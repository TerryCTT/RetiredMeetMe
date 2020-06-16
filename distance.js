//variable declaration
var DISTANCE_MATRIX_BASE_URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';
var dist_matrix_key = 'key=AIzaSyDHn0zF-JmlwAjc8JCD_zaVMT1G2tk2ZHQ';

var origins = "";

var originObj = [
  { name: 'Jan Rodriguez', address: { lat: 37.333442, lng: -121.87382780000002 } },
  { name: 'Nat Panzarini', address: { lat: 37.333442, lng: -121.87382780000002 } },
  { name: 'Terry and Erik', address: { lat: 34.040566, lng: -118.45429999999999 } }
]

//create google maps client
const googleMapsClient = require('@google/maps').createClient({
  key: 'insert google maps api key here'
});

//Create origins string
for(var attributename in originObj){
    if(attributename != originObj.length - 1){
      origins += JSON.parse(JSON.stringify(originObj[attributename].address.lat)) + ',' + JSON.parse(JSON.stringify(originObj[attributename].address.lng))
      + '|';
    }
    else{
      origins += JSON.parse(JSON.stringify(originObj[attributename].address.lat)) + ',' + JSON.parse(JSON.stringify(originObj[attributename].address.lng));
    }
    //console.log(attributename + ": " + JSON.parse(JSON.stringify(originObj[attributename].address.lat)));
}
console.log(origins);

var destinations = "";

var destinationsObj = [
  {coordinates: { latitude: 37.33638, longitude: -121.88988 }}
]

//Create destinations string
for(var attributename in destinationsObj){
    if(attributename != destinationsObj.length - 1){
      destinations += JSON.parse(JSON.stringify(destinationsObj[attributename].coordinates.latitude)) + ',' + JSON.parse(JSON.stringify(destinationsObj[attributename].coordinates.longitude))
      + '|';
    }
    else{
      destinations += JSON.parse(JSON.stringify(destinationsObj[attributename].coordinates.latitude)) + ',' + JSON.parse(JSON.stringify(destinationsObj[attributename].coordinates.longitude));
    }
    //console.log(attributename + ": " + JSON.parse(JSON.stringify(destinationsObj[attributename].address.lat)));
}
console.log(destinations);

//create formatted URL to return JSON object
var url = DISTANCE_MATRIX_BASE_URL + '?' + 'origins=' + origins + '&' +
'destinations=' + destinations + '&' + 'units=imperial' + '&' +  dist_matrix_key;

const https = require('https');
var output;

https.get(url, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    output = JSON.parse(data);
    //return JSON.parse(data);
    //console.log(JSON.parse(data).rows[0].elements[0]);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

console.log(output);
