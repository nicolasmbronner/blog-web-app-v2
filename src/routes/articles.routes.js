// =====================================
// Imports
// =====================================
// Using both staticArticles (demo data) and articles
// (for future dynamic contents)
import { staticArticles, articles } from '../data/articlesStore.js';
import * as articleService          from '../services/articleService.js';
import dateFormatter                from '../utils/dateFormatter.js';


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
    // req.device.type will be 'phone', 'tablet', 'desktop', etc.
    const deviceType = req.device.type;

    // Create a copy of articles with formatted dates
    const formattedArticles = articles.map(article => {
        // Create a copy of the article for not modify the original
        return {
            ...article,
            // Format creation date for list view
            formattedDate: dateFormatter.formatForList(
                article.creationDate,
                deviceType === 'phone' // true only for smartphones
            )
        };
    });
    res.render('pages/index.ejs', {
         articles: formattedArticles.reverse(),
         deviceType,
         currentPage: 'home',
         isLoggedIn: true
    });
}

export function showNewArticleForm(req, res) {
    res.render('pages/new.ejs', {
        currentPage: 'new',
        isLoggedIn: true
    });
}

// While currently similar to other article-handling functions,
// (getArticle, updateArticle, deleteArticle), update logic will
// diverge once we implement proper article modification
export function showEditArticleForm(req, res) {
    const article = articleService.getArticleById(req.params.id);
    if (!article) return handleArticleNotFound(res);

    // Render the template edit.ejs with article data
    res.render('pages/edit.ejs', {
        article,
        currentPage: 'edit',
        articleId: article.id,
        isLoggedIn: true,
        isAuthor: true
    });
}

export function getArticle(req, res) {
    const article = articleService.getArticleById(req.params.id);
    if (!article) return handleArticleNotFound(res);

    // Create a copy of the article with formatted date for display
    const formattedArticle = {
        ...article,
        formattedDate: dateFormatter.formatForArticle(article.creationDate, article.lastEditDate),
    }

    res.render('pages/article.ejs', {
         article: formattedArticle,
         currentPage: 'article',
         articleId: article.id,
         isAuthor: true
    });
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
    // Récupérer les données du formulaire
    const { title, content } = req.body;
    
    // Mettre à jour l'article dans la base de données
    const updatedArticle = articleService.updateArticle(req.params.id, { title, content });
    
    // Si l'article n'existe pas, retourner une erreur 404
    if (!updatedArticle) return handleArticleNotFound(res);
    
    // Rediriger vers la page de l'article après la mise à jour
    res.redirect(`/articles/${updatedArticle.id}`);
}


// =====================================
// DELETE Routes
// =====================================
export function deleteArticle(req, res) {
    // Get article ID from request parameters
    const articleId = req.params.id;

    // Call deleteArticle function from articleService
    const deletedArticle = articleService.deleteArticleById(articleId);

    // Check if article was found and deleted
    if (!deletedArticle) {
        return handleArticleNotFound(res);
    }

    // Determine if request comes from fetch (AJAX) or click on a link
    const isAjaxRequest = req.xhr || req.headers.accept.indexOf('json') > -1;

    if (isAjaxRequest) {
        // For AJAX request (like in interactions.js)
        res.status(200).json({ success: true, message: `Article ${articleId} deleted` });
    } else {
        // For classic request (clic on a link)
        res.redirect('/');
    }
}