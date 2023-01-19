const request = require('request');
const breedName = process.argv[2];


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {

    // Print the error if one occurred
    if (error) {
      callback(error, null);
      return;
    }

    const [data] = JSON.parse(body);
    
    if (!data) {
      return callback(error, null);
      
    }
    return callback(null, data.description);

  });
};

module.exports = { fetchBreedDescription };