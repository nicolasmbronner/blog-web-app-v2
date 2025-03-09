// Default articles to be used for initialization and resets
const DEFAULT_ARTICLES = [
    {
        id: 1,
        title: "I am conscious of my body",
        creationDate: "2023-01-05T12:55:00",
        lastEditDate: "2023-01-05T12:55:00",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 2,
        title: "Here and now",
        creationDate: "2023-03-01T12:55:00",
        lastEditDate: "2023-04-01T12:55:00",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 3,
        title: "One thing",
        creationDate: "2024-05-28T12:55:00",
        lastEditDate: "2024-07-29T12:55:00",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 4,
        title: "Daily Gratitude",
        creationDate: "2025-01-05T12:55:00",
        lastEditDate: "2025-01-05T12:55:00",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 5,
        title: "The why",
        creationDate: "2025-02-21T12:55:00",
        lastEditDate: "2025-02-14T12:55:00",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    },
    {
        id: 6,
        title: "Mindfulness basics",
        creationDate: "2025-03-09T12:55:00",
        lastEditDate: "2025-03-09T12:55:00",
        content: "Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree but show belly."
    }
];

// Active articles - initialized with default articles
export let articles = [...DEFAULT_ARTICLES];

// Function to reset articles to their default state
export function resetArticles(silent = false) {
    articles = [...DEFAULT_ARTICLES];
    if (!silent) console.log("Articles reset to default state");
    return articles;
}

// Function to get the next available ID
export function getNextId() {
    if (articles.length === 0) return 1;
    return Math.max(...articles.map(article => article.id)) + 1;
}

// Explort default articles if needed for tests or reference
export { DEFAULT_ARTICLES as staticArticles };