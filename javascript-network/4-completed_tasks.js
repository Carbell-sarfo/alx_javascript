const request = require('request');

// Check if the API URL is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node 4-completed_tasks.js <API URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Send a GET request to the specified API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  // Check if the response contains a valid status code
  if (response && response.statusCode === 200) {
    try {
      const todos = JSON.parse(body);

      // Initialize an object to store the count of completed tasks for each user ID
      const completedTasksByUser = {};

      // Iterate through the todos and count completed tasks
      for (const todo of todos) {
        if (todo.completed) {
          if (completedTasksByUser[todo.userId]) {
            completedTasksByUser[todo.userId]++;
          } else {
            completedTasksByUser[todo.userId] = 1;
          }
        }
      }

      // Print the count of completed tasks for each user ID
      console.log(completedTasksByUser);
    } catch (parseError) {
      console.error('Failed to parse JSON response.');
      process.exit(1);
    }
  } else {
    console.error(`Failed to retrieve data. Status code: ${response.statusCode}`);
    process.exit(1);
  }
});