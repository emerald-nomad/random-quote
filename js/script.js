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

// Will automatically change quote after 30 seconds
let timeoutHandle = setTimeout(printQuote, 30000);

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
    
    document.body.setAttribute('style','background-color:'+color+';');
    document.getElementById('loadQuote').setAttribute('style', 'background-color:' + color + ';')
    document.getElementById('quote-box').innerHTML = html;

    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(printQuote, 30000);
}

const quotes = [
    {
        tag: "historic",
        quote: "It is easier to build strong children than to repair broken men.",
        source: "Frederick Douglass"
    },
    {
        tag: "historic",
        quote: "Herein lies the tragedy of the age: not that men are poor—all men know something of poverty; not that men are wicked—who is good? Not that men are ignorant—what is truth? Nay, but that men know so little of men.",
        source: "W.E.B. Du Bois",
        citation: "The Souls of Black Folk"
    },
    {
        tag: "movie",
        quote: "Bye, Felicia",
        source: "Craig",
        citation: "Friday",
        year: "1995"
    },
    {
        tag: 'humor',
        quote: "You ever get a bill so high, you try to put it in the light, like it’s gonna change?",
        source: "Kevin Hart",
    },
    {
        tag: 'movie',
        quote: "They got the Golden Arches, mine is the Golden Arcs. You see, they got the Big Mac, I got the Big Mick.",
        source: "Mr. McDowell",
        citation: "Coming to America",
        year: "1988"
    },
    {
        tag: 'humor',
        quote: "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
        source: "Alan Dundes",
    },
    {
        tag: 'humor',
        quote: 'My neighbor has two dogs. One of them says to the other, "Woof!" The other replies, "Moo!" The dog is perplexed. "Moo? Why did you say Moo?" The other dog says, "I am trying to learn a foreign language."',
        source: "Morey Amsterdam",
    },
    {
        tag: 'movie',
        quote: 'My Mama said "Stupid is what Stupid does."',
        source: "Forrest Gump",
        year: "1994"
    },
    {
        tag: 'historic',
        quote: "Power tends to corrupt, and absolute power corrupts absolutely. Great men are almost always bad men.",
        source: "Lord Acton"
    }
];

const colors = [
    '#34403A',
    '#FFCAB1',
    '#36b55c',
    '#69A2B0',
    '#8DFFCD'
]; 