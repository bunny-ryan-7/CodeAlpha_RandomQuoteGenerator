const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const quoteBox = document.getElementById("quote-box");

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    // Fade-out before content changes
    quoteBox.classList.remove("show");

    setTimeout(() => {
        quoteText.textContent = quote.text;
        authorText.textContent = "- " + quote.author;

        // Fade-in after content updates
        quoteBox.classList.add("show");
    }, 200);
}

// show quote on first load
setTimeout(() => {
    showRandomQuote();
    quoteBox.classList.add("show");
}, 100);

// button click
newQuoteBtn.addEventListener("click", showRandomQuote);
