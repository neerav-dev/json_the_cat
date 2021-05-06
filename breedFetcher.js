const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      process.exit();
    }
  
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Requested breed '${breedName}' is not found.`, null);
      process.exit();
    }
    
    callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};