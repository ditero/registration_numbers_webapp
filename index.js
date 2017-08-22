 const express = require('express');
 const exphbs = require('express3-handlebars');
 const bodyParser = require('body-parser');
 const flash = require('express-flash');
 const session = require('express-session');
 var registrations = require('./functions/registrations');

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
var register = registrations();

app.get('/', register.main);
app.post('/reg_number', register.bodyReg);
app.get('/reg_number/:number', register.paramReg);


app.set('port',(process.env.PORT || 5000) );

app.listen(app.get('port'), function(){
  console.log("Web app started on port: ", app.get('port'));
});
