import express        from 'express';
import bodyParser     from 'body-parser';

import { showLogin } from './src/routes/auth.routes.js';
import * as articleRoutes from './src/routes/articles.routes.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get('/login', showLogin);
app.get('/', articleRoutes.listArticles);
app.get('/articles/new', articleRoutes.showNewArticleForm);
app.get('/articles/:id/edit', articleRoutes.showEditArticleForm);
app.get('/articles/:id', articleRoutes.getArticle);
app.post('/articles/', articleRoutes.createArticle);
app.put('/articles/:id', articleRoutes.updateArticle);
app.delete('/articles/:id', articleRoutes.deleteArticle);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});