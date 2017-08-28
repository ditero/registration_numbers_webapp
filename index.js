 const express = require('express');
 const exphbs = require('express3-handlebars');
 const bodyParser = require('body-parser');
 const flash = require('express-flash');
 const session = require('express-session');
 const mongoURL = process.env.MONGO_DB_URL || 'mongodb://localhost/registrerDB';
 const Registrations = require('./functions/registrations');
 const Models = require('./schema/models');
 const models = Models(mongoURL);
 
 //Instantiate the routes
 const registerRoute = Registrations(models);

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


app.get('/reg_number', registerRoute.regnums);
app.post('/reg_number', registerRoute.addReg);
app.get('/reg_number/:number', registerRoute.paramReg);
app.get('/town', registerRoute.filterTown);
app.post('/town', registerRoute.filterTown);


app.set('port',(process.env.PORT || 5000) );

app.listen(app.get('port'), function(){
  console.log("Web app started on port: ", app.get('port'));
});
