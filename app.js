var express     = require('express');
var app         = require('express')();
var server      = require('http').createServer(app);
var io          = require('socket.io')(server);
var ejs         = require('ejs');

const request = require('request');


app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('landing');
});

users = [];
var midpoint;
io.on('connection', function(socket) {
   console.log('A user connected');
   socket.on('setUsername', function(data) {

      if(users.indexOf(data.name) > -1) {
         socket.emit('userExists', data + ' username is taken! Try some other username.');
      } else {
         users.push(data);
				 console.log(users);
         socket.emit('userSet', {username: data.name,users:users});
      }
   });

	 socket.on('midpoint',function(data){
		 midpoint = data.midpoint;
		 // var result;
		 // var bodyTest;
		 // url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=coffee&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@" + data.midpoint.address.lat + "," + data.midpoint.address.long +"&key=AIzaSyBN1VoKDBtn5fiqP4eyA5CvD6kGvqMzeSc"
		 // request(url, { json: true }, (err, res, body) => {
		 //   if (err) { return console.log(err); }
			//  result = res;
			//  bodyTest = body;
			//  res.render("meeting", {data:body});
		 // });

		 console.log("MIDPOINT DATA")
		 console.log(midpoint);
		 io.sockets.emit('midpointoutput', {midpoint:midpoint});
	 })
   socket.on('msg', function(data) {
      //Send message to everyone
      io.sockets.emit('newmsg', data);
   })
});

port = process.env.PORT || 3000
server.listen(port,process.env.IP, function(){
    console.log('app running');
});
