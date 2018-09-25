//Require Express
var express = require('express');
var app = express();

// Set the port to listen on. 80 since it's the web server
// NOTE: su usually required for ports under 1024
app.set('port', process.env.PORT || 80);

// Setup to serve static files
app.use(express.static(__dirname + '/public'));

// Morgan for logging
var morgan = require('morgan');
app.use(morgan(':date :remote-addr :method :url :status :response-time ms - :res[content-length]'));

// Add / Setup handlebars view engine
var handlebars = require('express-handlebars');
// Point to a default template
app.engine('handlebars', handlebars({defaultLayout: 'main'}));

// Add handlebars to the app
app.set('view engine', 'handlebars');

// Kill cache 304 response
app.disable('etag');

//-----------------------------------------
// Startup the server
app.listen(app.get('port'), function(){
	console.log( 'The Web Server is running. Open a browser and navigate to: http://localhost');
});

//-----------------------------------------

// Welcome page route

app.get('/', function(req,res) {
	res.render('welcome');
});




