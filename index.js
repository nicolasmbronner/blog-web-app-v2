import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("I'm good, i'm working dude!");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});