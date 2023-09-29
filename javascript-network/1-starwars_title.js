const request = require('request');

// Check if a movie ID is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node 1-starwars_title.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  // Check if the response contains a valid status code
  if (response && response.statusCode === 200) {
    try {
      const movieData = JSON.parse(body);
      console.log(movieData.title);
    } catch (parseError) {
      console.error('Failed to parse JSON response.');
      process.exit(1);
    }
  } else {
    console.error(`Failed to retrieve movie data. Status code: ${response.statusCode}`);
    process.exit(1);
  }
});