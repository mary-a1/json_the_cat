const request = require('request');
const breedName = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {

  // Print the error if one occurred
  if (error) {
    console.log(error);
    return;
  }
  //console.log('statusCode:', response && response.statusCode);
  //console.log('Type of body:', typeof body);
  const data = JSON.parse(body);
  const breed = data[0];
  if (!breed) {
    console.log("Breed not found");
    return;
  }
  console.log(breed.description);
});


