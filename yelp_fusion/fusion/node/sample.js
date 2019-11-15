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
  radius: 1600,

};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  //const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(firstResult);
}).catch(e => {
  console.log(e);
});
