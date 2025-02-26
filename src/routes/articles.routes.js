// =====================================
// Imports
// =====================================
// Using both staticArticles (demo data) and articles
// (for future dynamic contents)
import { staticArticles, articles } from '../data/articlesStore.js';
import * as articleService from '../services/articleService.js';


// =====================================
// Utility Functions
// =====================================
// These functions are kept here rather than in utils/ because they
// are specific to article route handling and won't be reused
// elsewhere in the application
function handleArticleNotFound(res) {
    return res.status(404).send('<h1>Article not found</h1>');
}


// =====================================
// GET Routes
// =====================================
export function listArticles(req, res) {
    let htmlContent = '';

    for (const article of staticArticles) {
        htmlContent += `<p>${article.creationDate} | ${article.title}</p>`;
    }

    res.send(htmlContent);
}

export function showNewArticleForm(req, res) {
    res.send('<h1>New Article Form</h1>');
}

// While currently similar to other article-handling functions,
// (getArticle, updateArticle, deleteArticle), update logic will
// diverge once we implement proper article modification
export function showEditArticleForm(req, res) {
    const article = articleService.getArticleById(req.params.id);
    if (!article) return handleArticleNotFound(res);

    res.send(
        `<h1>Edit : ${article.title}</h1>
        <p>${article.creationDate}</p>
        <p>${article.content}</p>`
    );
}

export function getArticle(req, res) {
    const article = articleService.getArticleById(req.params.id);
    if (!article) return handleArticleNotFound(res);

    res.send(
        `<h1>${article.title}</h1>
        <p>${article.creationDate}</p>
        <p>${article.content}</p>`
    );
}


// =====================================
// POST Routes
// =====================================
export function createArticle(req, res) {
    res.send('<h1>New Article Created</h1>');
}


// =====================================
// PUT Routes
// =====================================
export function updateArticle(req, res) {
    const article = articleService.getArticleById(req.params.id);
    if (!article) return handleArticleNotFound(res);

    res.send(`<h1>Article ${article.id} Updated</h1>`);
}


// =====================================
// DELETE Routes
// =====================================
export function deleteArticle(req, res) {
    const article = articleService.getArticleById(req.params.id);
    if (!article) return handleArticleNotFound(res);

    res.send(`<h1>Article ${article.id} Deleted</h1>`);
}