import express from 'express';
import { staticArticles, articles } from '../data/articlesStore.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(
        `<h1>${staticArticles[0].title}</h1>
        <p>${staticArticles[0].creationDate}</p>
        <p>${staticArticles[0].content}</p>`
    );
});

export default router;