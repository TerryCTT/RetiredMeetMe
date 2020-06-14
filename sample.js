'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '3hA2LibDgEfVt2522QoVsDVs_JkJ5uA3J-0U7K_A0I3_2uDgnT8Fay7cdW4T8JTZrDb5pkzbsf7sgg5zWhQId7wKnwVm7lhC5-yMS1wIyCwdAL5sN2sFcOLOoQHPXXYx';

const inputLat = 37.338207;
const inputLong = -121.886330;

const searchRequest = {
  latitude: inputLat,
  longitude: inputLong,
  radius: 3200,
  limit: 5,
  //sort_by: distance

};

const client = yelp.client(apiKey);
//console.log(searchRequest)

const test = client.search(searchRequest);
Promise.resolve(test);
test.then(response => {
  const t = response.jsonBody.businesses;

  //console.log(test)
  //console.log(response.jsonBody.businesses)
  return t
  //const prettyJson = JSON.stringify(firstResult, null, 4);
  //console.log(response.jsonBody.businesses.length)
  //console.log(response.jsonBody.businesses)
}).catch(e => {
  console.log(e);
});

console.log(test);
console.log(Promise.resolve(test));

// let result = storeResult(response.jsonBody.businesses) {
//   return response.jsonBody.businesses
// };
//console.log(JSON.stringify(test))
