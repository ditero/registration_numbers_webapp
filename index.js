 const express = require('express');
 const exphbs = require('express3-handlebars');
 const bodyParser = require('body-parser');
 const flash = require('express-flash');
 const session = require('express-session');
 var greetUsers = require('./myusers');
 const app = express();

 app.engine('handlebars', exphbs({defaultLayout: 'main'}));
 app.set('view engine', 'handlebars');

app.use(express.static('public'));

// prase application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use the session middleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 * 30}}));
app.use(flash());
//Instantiate the routes
var greetUsers = greetUsers();

 app.get('/', function(req, res){
   res.send('LetsGreet');
 });
// app.get('/greetings', greetUsers.index);
 app.get('/greetings', greetUsers.greetScreen);
 app.get('/greeted', greetUsers.greeted);
 app.get('/counter/:user', greetUsers.countGreetings);
 app.post('/greetings', greetUsers.greet);



 const port = 3000;
 app.listen(port, function(){
   console.log("Web app started on port: "+port);
 });
