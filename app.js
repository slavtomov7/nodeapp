// Importing the express module
var express = require('express');

var app = express();

// Telling the app to get the html from index.ejs and render it on the root (/index.html) page, it is also adding the title dynamically
app.get('/', function(request, response){
	response.render('index.ejs', {title: 'Hello WoRlD'});
});

// The app adds the content in layout.ejs to a /about folder, and is adding the title and the body dynamically.
app.get('/about', function(request, response){
	response.render('layout.ejs', {title: 'About us', body: '<button><a href="http://joindota.com" target="_blank">Dota</a></button>'});
});

//Note that app.get functions kind of like an else if, meaning that if it doesn't take the first route, it will take the second, and if not the first or second, then the third.
// In this case anything that is not in the root folder or the /about/ folder will use this route and spit out an error.
app.get('/*', function(request, response){
	response.status(404).render('error.ejs', {title: "Error", body: '<h2><strong>There was an error causing us the page to load a 404</strong></h2>'});
});

console.log('Server started');
app.listen(3000);