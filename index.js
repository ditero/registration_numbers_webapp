// grab the packages we need
var express = require('express');
var app = express();
var greetUsers = require('./myUsers');

//Instantiate the the Route
var greetUsers = greetUsers();

var port = 3000;

var listArray = [];

//Route Parameter Middleware
// parameter middleware that will run before the next routes
app.param('name', function(req, res, next, name) {

    // check if the user with that name exists
    // do some validations
    var modified = name;

    // save name to the request
    req.name = modified;

    next();
});
//var users = req.params.users;

// http://localhost:3000/greetings/Joe
// app.get('/greetings/', greetUsers.index);
// app.get('/greetings/greet', greetUsers.greet);
app.get('/greetings/:name', function(req, res) {
    // var foundUser = listArray.find(function(currentUser){
    //   return currentUser = req.name;
    // })
    // if (!foundUser) {
    // }
    listArray.push(req.name);


    res.send('Hello ' + req.name + '!');
});

// http://localhost:3000/greeted
app.get('/greeted/', function(req, res){
  res.send('My list: '+listArray);

});

// http://localhost:3000/counter/Joe
app.get('/counter/:name', function(req, res){
  var count = 0;
  for (var i = 0; i < listArray.length; i++) {
    if (req.name === listArray[i]) {
      count++;
    }
  }
  res.send('Hello, '+req.name + ' is greeted for the ' + count +' times');
});

////////////////////////////////Start THe Server//////////////

app.listen(port);
console.log('Server started! At http://localhost:' + port);
