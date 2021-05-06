const request = require('request');
const args = process.argv.splice(2);

const breedName = args[0].toString();//+'sss';

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  if (error) {
    console.log(`Error: ${error}`);
    process.exit();
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Requested breed:${breedName} is not found.`);
    process.exit();
  }
  
  console.log(data[0].description);
});