import { articles } from '../data/articlesStore.js';

// Get an article by its ID
export function getArticleById(id) {
    const articleID = Number(id);
    return articles.find(article => article.id === articleID);
}

// Delete an article by its ID and return the deleted article
export function deleteArticleById(id) {
    const articleID = Number(id);
    const articleIndex = articles.findIndex(article => article.id === articleID);

    if (articleIndex === -1) {
        return null; // Article not found
    }

    // Delete the article and return it
    const [deletedArticle] = articles.splice(articleIndex, 1);
    return deletedArticle;
}

// Update an article by its ID and return the updated article
export function updateArticle(id, updatedData) {
    const articleID = Number(id);
    const articleIndex = articles.findIndex(article => article.id === articleID);

    if (articleIndex === -1) {
        return null; // Article not foun
    }

    // Update Article
    const article = articles[articleIndex];
    
    // Update only the fields that are present in the updatedData
    articles[articleIndex] = {
        ...article,
        ...updatedData,
        // Always update lastEditDate to current date
        lastEditDate: new Date().toISOString()
    };

    return articles[articleIndex];
}