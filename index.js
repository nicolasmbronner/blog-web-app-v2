import express from 'express';
import bodyParser from 'body-parser';
import { staticArticles, articles } from './src/data/articlesStore.js';
import articlesRoutes from './src/routes/articles.routes.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/', articlesRoutes);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});