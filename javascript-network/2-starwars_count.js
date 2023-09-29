const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films';
const characterIdToCheck = '18';

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    const movies = data.results;
    let moviesWithWedgeAntilles = 0;

    // Iterate through movies and check for Wedge Antilles
    movies.forEach((movie) => {
      if (movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterIdToCheck}/`)) {
        moviesWithWedgeAntilles++;
      }
    });

    console.log(moviesWithWedgeAntilles);
  } else {
    console.error('Error:', error);
  }
});