const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "― Oscar Wilde"
    },
    {
        quote: "So many books, so little time.",
        author: "― Frank Zappa"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "― Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "― Mark Twain"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "― Elbert Hubbard"
    }
];

var lastDisplayed = -1;

function displayQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    if (randomNumber === lastDisplayed) {
        randomNumber = (randomNumber + 1) % quotes.length; 
    }
    const quoteData = quotes[randomNumber];
    lastDisplayed = randomNumber; 
    document.getElementById("quoteLine").textContent = quoteData.quote;
    document.getElementById("authorLine").textContent = quoteData.author;
}
document.getElementById("quoteButton").addEventListener("click", displayQuote);

