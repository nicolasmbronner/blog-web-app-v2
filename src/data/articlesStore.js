// Default articles to be used for initialization and resets
const DEFAULT_ARTICLES = [
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
];

// Active articles - initialized with default articles
export let articles = [...DEFAULT_ARTICLES];

// Function to reset articles to their default state
export function resetArticles() {
    articles = [...DEFAULT_ARTICLES];
    console.log("Articles reset to default state");
    return articles;
}

// Function to get the next available ID
export function getNextId() {
    if (articles.length === 0) return 1;
    return Math.max(...articles.map(article => article.id)) + 1;
}

// Explort default articles if needed for tests or reference
export { DEFAULT_ARTICLES as staticArticles };