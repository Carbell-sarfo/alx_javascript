const request = require('request');
const fs = require('fs');

// Check if the URL and file path are provided as command line arguments
if (process.argv.length !== 4) {
  console.error('Usage: node webpage_to_file.js <URL> <File Path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  // Check if the response contains a valid status code (usually 200 for success)
  if (response && response.statusCode === 200) {
    // Save the response body to the specified file (UTF-8 encoded)
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error('Failed to write to the file:', writeError);
        process.exit(1);
      }
      console.log(`Response body from ${url} saved to ${filePath}`);
    });
  } else {
    console.error(`Failed to retrieve web page. Status code: ${response.statusCode}`);
    process.exit(1);
  }
});