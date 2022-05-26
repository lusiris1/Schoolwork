/*
Lance Baker
ENTD261
06/22/2020
*/

 

 

// setup

var express=require("express");

var http=require("http");

var app=express();

 

// run the server

 

http.createServer(app).listen(12345);

console.log('Express server listening on port 12345');

 

// <<< Creating the model

 

var products = [

         { id: 0, name: 'teddybear', description: 'Hug me', price: 10.00 },

         { id: 1, name: 'axe', description: 'For protection', price: 50.00 },

         { id: 2, name: 'water', description: 'When you are thirsty', price: 2.00 }

];

 

// http://localhost:12345                             // general route

// here is the view 

app.get("/", function(req,res){

  var msg=""

  msg += "<center><h1> Welcome to my store </h1></center>"

  msg += " Try all of the options <br />"

  msg += " http://localhost:12345/message <br />"

  msg += " http://localhost:12345/useme <br />"

  msg += " http://localhost:12345/products <br />"

  msg += " http://localhost:12345/name <br />"

 

  res.send(msg);

});

 

// <<< routes = controller

// http://localhost:12345/message                    // first message

app.get("/message", function(req,res){

  res.send("This is a simple message");

 });

 

// http://localhost:12345/useme                       // second message

app.get("/useme", function(req,res){

  res.send("Easter Egg");

 });

 

// http://localhost:12345/products                       // show some products

app.get('/products', function(req, res) {

         res.send(JSON.stringify(products));

 });

 

// http://localhost:12345/name                    // more products

app.get('/products/:id', function(req, res) {

         if (req.params.id > (products.length - 1) || req.params.id < 0) {

                 res.statusCode = 404;

                 res.end('Not Found');

         }

         res.send(JSON.stringify(products[req.params.id]));

 });