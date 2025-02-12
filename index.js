import express from 'express';
import bodyParser from 'body-parser';
import { staticArticles, articles } from './src/services/articles.js';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(
        `<h1>${staticArticles[1].title}</h1>
        <p>${staticArticles[1].creationDate}</p>
        <p>${staticArticles[1].content}</p>`
    );
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});