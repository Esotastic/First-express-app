var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there!");
});

app.get("/bye", function(req, res){
  res.send("Peace out.")
});

app.get("/dog", function(req, res){
  res.send("Bark?");
});

//Catch-all route
app.get("*", function(req, res){
  res.send("Generic page, which means you're in the wrong place. whoops.");
});

//Port listening
app.listen(3000, 'localhost', function(){
  console.log("Server has started.")
});
