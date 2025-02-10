import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// ARTICLES
const staticArticles = [
    {
        id: 1,
        title: "Bodhichitta",
        creationDate: "2024-11-24",
        lastEditDate: "2025-01-10",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 2,
        title: "Smile",
        creationDate: "2024-10-28",
        lastEditDate: "2024-11-02",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 3,
        title: "The walking meditation",
        creationDate: "2024-08-24",
        lastEditDate: "2024-08-24",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    }
]

let articles = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("I'm good, i'm working dude!");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});