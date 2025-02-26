import { staticArticles, articles } from '../data/articlesStore.js';

export function getArticleById(id) {
    const articleID = Number(id);
    return staticArticles.find(article => article.id === articleID);
}