// =====================================
// Imports
// =====================================
import express            from 'express';
import bodyParser         from 'body-parser';

import { showLogin }      from './src/routes/auth.routes.js';
import * as articleRoutes from './src/routes/articles.routes.js';


// =====================================
// Express Configuration
// =====================================
const app = express();
const port = 3000;


// =====================================
// Middleware
// =====================================
// Serve static files (CSS, JS, images) from the public directory
app.use(express.static("public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }))


// =====================================
// Authentication Routes
// =====================================
app.get('/login', showLogin);


// =====================================
// Article Routes
// =====================================
// The order of routes is important: specific routes must come before
// parametric onse to avoid /new being treated as an :id parameter

// GET - Page display
app.get('/', articleRoutes.listArticles);
app.get('/articles/new', articleRoutes.showNewArticleForm);
app.get('/articles/:id/edit', articleRoutes.showEditArticleForm);
app.get('/articles/:id', articleRoutes.getArticle);

// POST, PUT, DELETE - Data modifications
app.post('/articles/', articleRoutes.createArticle);
app.put('/articles/:id', articleRoutes.updateArticle);
app.delete('/articles/:id', articleRoutes.deleteArticle);


// =====================================
// Server Initialization
// =====================================
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});