// Richwood Scientific Bootcamp
// Basic Node+Express server for
// our test company
var express = require('express');
var app = express();

// Set the port to listen on. 3000 in this case
app.set('port', process.env.PORT || 3000);

// Setup to serve static files
app.use(express.static(__dirname + '/public'));

// Add BodyParser to read HTTP message body
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Morgan for logging
var morgan = require('morgan');
app.use(morgan(':date :remote-addr :method :url :status :response-time ms - :res[content-length]'));
// Kill cache 304 response
app.disable('etag');

// CORS for cross origin calls
// Study link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
var cors = require('cors');
app.use(cors());