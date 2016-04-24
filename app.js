// Module dependencies
var express = require('express');
var morgan = require('morgan');
var stylus = require('stylus');
var nib = require('nib');

// Set port number variable
var portNum = 3000;

// Initialize Express
var app = express();
console.log("Express is initialized");

// Function for Stylus and Nib (required)
function compile(str, path){
	return stylus(str)
	.set('filename', path)
	.use(nib())
}

// Set Views Folder
app.set('views', __dirname+'/views');

// Initialize Jade
app.set('view engine', 'jade');
console.log("Jade has been initialized");
console.log("Testing some git crap");
console.log("Testing Git branching.");

// Stylus Middleware (functions that handle requests - error handling, loggin, etc.)
app.use(morgan('dev'));
app.use(stylus.middleware(
	{
		src:__dirname + '/public',
		compile: compile
	}
))
app.use(express.static(__dirname+'/public'));

// Render the index page - Route I
app.get('/', function(req, res){
	res.render('index',{title: 'Welcome'});
});
app.listen(portNum);
console.log("Server is now running on port: " + portNum);