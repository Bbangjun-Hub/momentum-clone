const quotes = [
    {
        quote: "Except our own thoughts, there is nothing absolutely in our power.",
        author: "<Rene Descartes>",
    },
    {
        quote: "You just keep pushing. You just keep pushing. I made every mistake that could be made. But I just kept pushing.",
        author: "<Rene Descartes>",
    },
    {
        quote: "Conquer yourself rather than the world.",
        author: "<Rene Descartes>",
    },
    {
        quote: "Waste no more time arguing about what a good man should be. Be one.",
        author: "<Marcus Aelius>",
    },
    {
        quote: "The best answer to anger is silence.",
        author: "<Marcus Aelius>",
    },
    {
        quote: "Knowlege is power.",
        author: "<Francis Bacon>",
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "<Friedrich Nietzsche>",
    },
    {
        quote: "A wise man will make more opportunities than he finds.",
        author: "<Francis Bacon>",
    },
    {
        quote: "Ignorance, the root and stem of all evil.",
        author: "<Platon>",
    },
    {
        quote: "Well begun is half done.",
        author: "<Aristotle>",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;