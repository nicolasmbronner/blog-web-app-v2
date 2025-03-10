// Import the functions we want to test
import { getArticleById } from '../../src/services/articleService.js';
import { resetArticles } from '../../src/data/articlesStore.js';

// Group related tests in a describe block
describe('articleService', () => {
    // Reset articles before each test (using silent mode)
    beforeEach(() => {
        resetArticles(true);
    });

    // Test 1: Verify that getArticleById returns the correct article
    test('getarticleById should return the correct article', () => {
        // Act: Call the function with a known ID
        const article = getArticleById(1);

        // Assert: Verify the returned article
        expect(article).toBeDefined();
        // @ts-ignore
        expect(article.id).toBe(1);
        // @ts-ignore
        expect(article.title).toBe('I am conscious of my body');
    });

    // Test 2: Verify behavior with non-existent ID
    test('getArticleById should return undefined for non-existent article', () => {
        // Act: Call the function with an ID that doesn't exist
        const article = getArticleById(999);

        // Assert: Should return undefined
        expect(article).toBeUndefined();
    });

    // Test 3: Verify that string IDs are handled correctly
    test('getArticleById should handle string IDs', () => {
        // Act: Call the function with an ID as string instead of number
        const article = getArticleById('2');

        // Assert: Should still find the article with numeric ID 2
        expect(article).toBeDefined();
        // @ts-ignore
        expect(article.id).toBe(2);
        // @ts-ignore
        expect(article.title).toBe('Here and now');
    });
});