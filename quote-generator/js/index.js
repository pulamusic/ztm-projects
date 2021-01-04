// get quote from api
getQuote = async () => {
  // proxyUrl provides a solution to common CORS issues
  // **I need to duplicate this proxyUrl**
  const proxyUrl = 'https://cors-anywhere.heroku.com/'
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

  try {
    const response = await fetch(proxyUrl + apiUrl)
    const data = response.json()
    console.log(data)
  } catch (error) {
    console.log('Uuuuh...you fucked up somehow.', error)
  }
}

// onload
getQuote()
