var express = require('express');
var app = express();

app.set("view engine","ejs");
app.use(express.static("public"));


app.get('/', function(req,res){
    res.render("landing");
})

app.get('/testing', function(req,res){
    res.render("testing");
})

var port = process.env.port || 3000;
app.listen(port,process.env.IP,function(){
  console.log("MeetMe.io has started");
  console.log(port);
});
