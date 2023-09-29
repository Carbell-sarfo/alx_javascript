const request = require('request');

// Check if the movie ID is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node 5-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the specified API URL to fetch movie details
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  // Check if the response contains a valid status code
  if (response && response.statusCode === 200) {
    try {
      const movieData = JSON.parse(body);

      // Check if the movie data contains characters
      if (Array.isArray(movieData.characters)) {
        // Iterate through the characters and print their names
        movieData.characters.forEach((characterUrl) => {
          // Fetch character details from the character URL
          request.get(characterUrl, (charError, charResponse, charBody) => {
            if (charError) {
              console.error(charError.message);
              process.exit(1);
            }

            if (charResponse && charResponse.statusCode === 200) {
              const characterData = JSON.parse(charBody);
              console.log(characterData.name);
            } else {
              console.error(`Failed to retrieve character data. Status code: ${charResponse.statusCode}`);
              process.exit(1);
            }
          });
        });
      } else {
        console.error('No characters found for this movie.');
      }
    } catch (parseError) {
      console.error('Failed to parse JSON response.');
      process.exit(1);
    }
  } else {
    console.error(`Failed to retrieve movie data. Status code: ${response.statusCode}`);
    process.exit(1);
  }
});