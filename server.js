/*
//Starting a simple Web Server.
var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello'); 
}).listen(1337,'127.0.0.1'); //Listening for port 1337 and IP is for the localhost
console.log('Webserver has started!');
*/

//http module
var http = require('http');
//File system module
var fs = require('fs');
http.createServer(function(req, res){
	fs.readFile('index.html', function(error, data){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end(data); 
	});
//Listening for port 1337 and setting up localhost IP
}).listen(1337,'127.0.0.1');
console.log('Webserver has started!');