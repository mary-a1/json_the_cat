const request = require('request');
const breedName = process.argv[2];

request('https://api.thecatapi.com/v1/breedsl/search ?q=' + breedName, (error, response, body) => {
  console.log('Breed is not found:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode);
  //console.log('Type of body:', typeof body);
  const data = JSON.parse(body);
  const breed = data[0];
  console.log(breed.description);
  //console.log("Type of body:", typeof data);
});