import { staticArticles, articles } from '../data/articlesStore.js';

// Refactor, similar code :
// - GET : showEditArticleForm, getArticle
// - PUT : updateArticle
// - DELETE : deleteArticle



// GET

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

export function showEditArticleForm(req, res) {
    const articleId = Number(req.params.id);
    const article = staticArticles.find(article => article.id === articleId);

    if (!article) {
        return res.status(404).send('<h1>Article not found</h1>');
    }

    res.send(
        `<h1>Edit : ${article.title}</h1>
        <p>${article.creationDate}</p>
        <p>${article.content}</p>`
    );
}

export function getArticle(req, res) {
    const articleId = Number(req.params.id);
    const article = staticArticles.find(article => article.id === articleId);

    if (!article) {
        return res.status(404).send('<h1>Article not found</h1>');
    }

    res.send(
        `<h1>${article.title}</h1>
        <p>${article.creationDate}</p>
        <p>${article.content}</p>`
    );
}



// POST

export function createArticle(req, res) {
    res.send('<h1>New Article Created</h1>');
}



// PUT

export function updateArticle(req, res) {
    const articleId = Number(req.params.id);
    const article = staticArticles.find(article => article.id === articleId);

    if (!article) {
        return res.status(404).send('<h1>Article not found</h1>');
    }

    res.send(`<h1>Article ${articleId} Updated</h1>`);
}



// DELETE

export function deleteArticle(req, res) {
    const articleId = Number(req.params.id);
    const article = staticArticles.find(article => article.id === articleId);

    if (!article) {
        return res.status(404).send('<h1>Article not found</h1>');
    }

    res.send(`<h1>Article ${articleId} Deleted</h1>`);
}