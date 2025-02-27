import { jest } from '@jest/globals';

// Import the function we want to test
import { articles, resetArticles, getNextId, staticArticles } from '../../src/data/articlesStore.js';

// Group related tests in a describe block
describe('articleStore', () => {
    // Reset articles before each test to ensure consistent test conditions
    beforeEach(() => {
        resetArticles(true);
    });

    // Test 1: Check if resetArticles properly resets the articles array
    test('resetArticles should reset articles to default state', () => {
        // Arrange: Modify the articles array
        articles.push({
            id: 999, 
            title: 'Test Article',
            creationDate: '2024-02-26',
            lastEditDate: '2024-02-26',
            content: 'Test content'
        });
        expect(articles.length).toBe(staticArticles.length + 1);

        // Act: Call the function we're testing
        resetArticles(true);

        // Assert: Check the expected outcome
        expect(articles.length).toBe(staticArticles.length);
        expect(articles[0]).toEqual(staticArticles[0]);
    });

    // Test 2: Check if getNextId returns the next available ID
    test('getNextId should return the next available ID', () => {
        // With default articles (IDs 1, 2, 3), next ID should be 4
        expect(getNextId()).toBe(4);

        // After adding an article with ID 4, next ID should be 5
        articles.push({
            id: 4,
            title: 'Test Article',
            creationDate: '2024-02-26',
            lastEditDate: '2024-02-26',
            content: 'Test content' 
        });
        expect(getNextId()).toBe(5);
    });

    // Test 3: Check if articles are correctly initialized
    test('articles should be initialized with default articles', () => {
        expect(articles.length).toBe(staticArticles.length);
        expect(articles[0].id).toBe(1);
        expect(articles[1].id).toBe(2);
        expect(articles[2].id).toBe(3);
    });

    // Test 4: getNextId should return 1 when articles array is empty
    test('getNextId should return 1 when articles array is empty', () => {
        // Arrange: Empty the articles array
        articles.length = 0;

        // Act: Call getNextId()
        const nextId = getNextId();

        // Assert: Check that the returned ID is 1
        expect(nextId).toBe(1);

        // Clean up: Reset articles to not affect other tests
        resetArticles(true);
    });

    // Test 5: getNextId should work with very large IDs
    test('getNextId should work with very large IDs', () => {
        // Arrange: Add an article with a very large ID
        const veryLargeId = Number.MAX_SAFE_INTEGER - 1; // ~9007199254740991
        articles.push({
            id: veryLargeId,
            title: 'Article with very large ID',
            creationDate: '2025-01-01',
            lastEditDate: '2025-01-01',
            content: 'Test content'
        });

        // Act: Call getNextId()
        const nextId = getNextId();

        // Assert: Check that the returned ID is the large ID + 1
        expect(nextId).toBe(veryLargeId + 1);

        // Clean up
        resetArticles(true);
    });

    // Test 6: getNextId should work with non-sequential IDs
    test('getNextId should return highest ID + 1 even with non-sequential IDs', () => {
        // Arrange: Reset then add articles with non-sequential IDs
        resetArticles(true);
        articles.push({
            id: 10,
            title: 'Article with gap ID',
            creationDate: '2025-01-01',
            lastEditDate: '2025-01-01',
            content: 'Test content'
        });

        // Act: Call getNextId()
        const nextId = getNextId();

        // Assert: Check that the returned ID is the highest + 1 (not a simply length + 1)
        expect(nextId).toBe(11); // 10 + 1, not 4 (which would be length + 1)

        // Clean up
        resetArticles(true);
    });

    // Test 7: resetArticles should work after multiple modifications
    test('resetArticles should restore default state after multiple modifications', () => {
        // Arrange: Perform multiple modifications on the articles array
        articles.length = 0; // Emtpy first
        articles.push({
            id: 42,
            title: 'New test article',
            creationDate: '2025-02-01',
            lastEditDate: '2025-02-01',
            content: 'Brand new content'
        });

        // Act: Reset the articles
        resetArticles(true);

        // Assert: Check taht the array has been restored to its original state
        expect(articles.length).toBe(staticArticles.length);
        expect(articles[0].id).toBe(1);
        expect(articles[0].title).toBe('Bodhichitta');
        expect(articles[1].id).toBe(2);
        expect(articles[2].id).toBe(3);
    });

    // Test 8: resetArticles should log a message when silent is false
    test('resetArticles should log a message when silent is false', () => {
        // Arrange : Spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');

        // Act: Call resetArticles with silent=false
        resetArticles(false);

        // Assert: check that console.log have been called with expected message
        expect(consoleSpy).toHaveBeenCalledWith('Articles reset to default state');

        // Clean up: restore console.log
        consoleSpy.mockRestore();
    });

    // Test 9: resetArticles should use default silent parameter value
    test('resetArticles should use default silent parameter value', () => {
        // Arrange: Spy on console.log
        const consoleSpy = jest.spyOn(console, 'log');
        
        // Act: Call resetArticles WITHOUT any parameter
        resetArticles();
        
        // Assert: Verify console.log was called (default silent is false)
        expect(consoleSpy).toHaveBeenCalledWith('Articles reset to default state');
        
        // Clean up: Restore console.log
        consoleSpy.mockRestore();
      });
});