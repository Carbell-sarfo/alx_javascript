const request = require('request');

// Check if the API URL is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Send a GET request to the Star Wars API to retrieve all films
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  // Check if the response contains a valid status code
  if (response && response.statusCode === 200) {
    try {
      const filmsData = JSON.parse(body);
      const characterId = '18'; // Character ID for "Wedge Antilles"
      
      // Filter films where "Wedge Antilles" is present
      const moviesWithWedge = filmsData.results.filter((film) => {
        return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
      });

      console.log(moviesWithWedge.length);
    } catch (parseError) {
      console.error('Failed to parse JSON response.');
      process.exit(1);
    }
  } else {
    console.error(`Failed to retrieve movie data. Status code: ${response.statusCode}`);
    process.exit(1);
  }
});