import express        from 'express';
import bodyParser     from 'body-parser';

import { showLogin } from './src/routes/auth.routes.js';
import { listArticles,
         showNewArticleForm,
         showEditArticleForm,
         getArticle,
         createArticle,
         updateArticle,
         deleteArticle
        }  from './src/routes/articles.routes.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get('/login', showLogin);
app.get('/', listArticles);
app.get('/articles/new', showNewArticleForm);
app.get('/articles/:id/edit', showEditArticleForm);
app.get('/articles/:id', getArticle);
app.post('/articles/', createArticle);
app.put('/articles/:id', updateArticle);
app.delete('/articles/:id', deleteArticle);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});