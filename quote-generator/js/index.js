/*
> Jim Carroll |
> 01/05/2021 |
> [GitHub Profile](https://github.com/pulamusic)
---
  This project is from the ZTM tutorial titled JavaScript Web Projects (https://academy.zerotomastery.io/courses/1007166/)

  proxyUrl provides a solution to common CORS issues. pure-mountain-34791.herokuapp.com is my own proxy server

  Problem in the catch statement: the way it was originally written, placing getQuote() in the catch statement caused an infinite recursive loop of error messages and api calls. I'm checking out (https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3) for a possible solution.
*/

const quoteContainer = document.getElementById('quote-container'),
  quoteTxt = document.getElementById('quote'),
  authorTxt = document.getElementById('author'),
  twitterBtn = document.getElementById('twitter'),
  newQuoteBtn = document.getElementById('new-quote'),
  loader = document.getElementById('loader')

showLoadingSpinner = () => {
  loader.hidden = false
  quoteContainer.hidden = true
}

removeLoadingSpinner = () => {
  if (!loader.hidden) {
    quoteContainer.hidden = false
    loader.hidden = true
  }
}

getQuote = async () => {
  showLoadingSpinner()
  const proxyUrl = 'https://pure-mountain-34791.herokuapp.com/',
    apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

  try {
    const response = await fetch(proxyUrl + apiUrl),
      data = await response.json()

    // conditional statement in case there is no author specified
    if (data.quoteAuthor === '') {
      authorTxt.innerText = 'unknown'
    } else {
      authorTxt.innerText = data.quoteAuthor
    }
    // reduce font size for long quotes
    if (data.quoteText.length > 120) {
      quoteTxt.classList.add('long-quote')
    } else {
      quoteTxt.classList.remove('long-quote')
    }
    // add text to html
    quoteTxt.innerText = data.quoteText
    // remove loader and show quote
    removeLoadingSpinner()
    //throw new Error('Ya fucked up')
  } catch (error) {
    for (let i = 0; i <= 10; i++) {
      console.log(error)
      //return getQuote()
    }
    getQuote()
  }
}

tweetQuote = () => {
  const quote = quoteTxt.innerText,
    author = authorTxt.innerText,
    twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
  window.open(twitterUrl, '_blank')
}

// event listeners for the two buttons
newQuoteBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)

// onload
getQuote()
