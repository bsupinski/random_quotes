/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
// import { colors } from "./colors";
let counter = 0;

const body = document.querySelector("body");

const quote_box = document.querySelector(".quote-box");
quotes = [
  {
    quote: `You should try not to talk so much, friend. You’ll sound far less stupid that way.`,
    author: "Brandon Sanderson",
    citation: "Mistborn: The Final Empire",
    character: "Edgard Ladrian",
    date: "July 17, 2006",
  },
  {
    quote:
      "Expectation. That is the true soul of art. If you can give a man more than he expects, then he will laud you his entire life. If you can create an air of anticipation and feed it properly, you will succeed.",
    author: "Brandon Sanderson",
    citation: "Words of Radiance",
    character: "Wit",
    date: "March 4, 2017",
  },
  {
    quote: "“I will protect those who cannot protect themselves.”",
    author: "Brandon Sanderson",
    citation: "The Way of Kings",
    character: "Kaladin",
    date: "August 31, 2010",
  },
  {
    quote:
      "Sometimes a hypocrite is nothing more than a man in the process of changing.",
    author: "Brandon Sanderson",
    citation: "Oathbringer",
    character: "Dalinar Kholin",
    date: "November 14, 2017",
  },
  {
    quote: "Unknowing ignorance is preferable to informed stupidity",
    author: "Brandon Sanderson",
    citation: "Warbreaker",
    date: "June 9, 2009",
  },
];

/***
 * `getRandomQuote` function
 ***/
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = () => {
  return Math.floor(Math.random() * colors.length);
};

/***
 * `printQuote` function
 ***/
const printQuote = () => {
  quote = getRandomQuote();
  quote_container = `<p class="quote">${quote.quote}</p>`;
  source_container = `<p class="source">${quote.author}`;
  if (quote.character)
    source_container += `<span class ="character">${quote.character}</span>`;
  if (quote.citation)
    source_container += `<span class ="citation">${quote.citation}</span>`;
  if (quote.date)
    source_container += `<span class ="year">${quote.date}</span>`;
  source_container += `</p>`;

  quote_box.innerHTML = quote_container + source_container;
  body.style.backgroundColor = `${colors[getRandomColor()]}`;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

setInterval(printQuote, 5000);
