var express     = require('express');
var app         = require('express')();
var server      = require('http').createServer(app);
var io          = require('socket.io')(server);
var ejs         = require('ejs');


app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('landing');
});

users = [];
io.on('connection', function(socket) {
   console.log('A user connected');
   socket.on('setUsername', function(data) {
      console.log(data);

      if(users.indexOf(data) > -1) {
         socket.emit('userExists', data + ' username is taken! Try some other username.');
      } else {
         users.push(data);
         socket.emit('userSet', {username: data});
      }
   });

   socket.on('msg', function(data) {
      //Send message to everyone
      io.sockets.emit('newmsg', data);
   })
});


server.listen(process.env.PORT,process.env.IP, function(){
    console.log('app running');
});


