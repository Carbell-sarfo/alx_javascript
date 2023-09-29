const request = require('request');

// Check if the API URL is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];
const characterId = 18; // ID for Wedge Antilles

// Send a GET request to the specified API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  // Check if the response contains a valid status code
  if (response && response.statusCode === 200) {
    try {
      const filmsData = JSON.parse(body).results;

      // Filter films to find how many times Wedge Antilles appears
      const numberOfFilms = filmsData.filter((film) =>
        film.characters.includes(`http://swapi.co/api/people/${characterId}/`)
      ).length;

      console.log(numberOfFilms);
    } catch (parseError) {
      console.error('Failed to parse JSON response.');
      process.exit(1);
    }
  } else {
    console.error(`Failed to retrieve data. Status code: ${response.statusCode}`);
    process.exit(1);
  }
});