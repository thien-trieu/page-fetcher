const fs = require('fs');
const request = require('request');

request('http://www.example.edu/', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  const content = body;
  
  fs.writeFile('./index.html', content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});

