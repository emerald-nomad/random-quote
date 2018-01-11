// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Accepts an array parameter, and return a random index from the array.
function getRandom(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// Will choose and return a random quote fro the quoute array.
function getRandomQuote() {
    return getRandom(quotes);
}

// Will choose and return a random color fro the color array.
function getRandomColor() {
    return getRandom(colors);
}

// Will recieve quote from getRandomQuote(), and render it to the screen.
function printQuote() {
    let quote = getRandomQuote();
    let color = getRandomColor();

    let html = '<p class="quote">' + quote.quote + '</p>';
    html += '<p class="source">' + quote.source; 
    // If citation is a property in the object, then add it to the html. 
    // Otherwise return an empty string.
    quote.citation ? html += '<span class="citation">' + quote.citation + '</span>' : '';
    // If year is a property in the object, then add it to the html. 
    // Otherwise return an empty string.
    quote.year ? html += '<span class="year">' + quote.year + '</span>' : '';
    html += '</p>';
    
    document.body.setAttribute('style','background-color:'+color+';')
    document.getElementById('quote-box').innerHTML = html;
}

const quotes = [
    {
        quote: "The actual quote",
        source: "The creator of the quote",
        citation: "Where the quote comes from",
        year: "The year of the quote"
    }
];

const colors = [
    '#34403A',
    '#FFCAB1',
    '#36b55c',
    '#69A2B0',
    '#8DFFCD'
]; 