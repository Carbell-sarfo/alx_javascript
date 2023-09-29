const request = require('request');

// Check if a URL is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node 0-statuscode.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

// Send a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  // Check if the response contains a valid status code
  if (response && response.statusCode !== undefined) {
    console.log(`code: ${response.statusCode}`);
  } else {
    console.error('Failed to retrieve the status code.');
    process.exit(1);
  }
});