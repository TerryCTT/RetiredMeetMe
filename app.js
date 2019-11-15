var express     = require('express');
var app         = require('express')();
var server      = require('http').createServer(app);
var io          = require('socket.io')(server);
var ejs         = require('ejs');


app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('landing');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
      });
});

server.listen(process.env.PORT || 3000, function(){
    console.log('app running');
});
