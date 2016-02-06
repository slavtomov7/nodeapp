// Bringing in the OS module
var os = require('os');

var message = 'Here is your system info:';
//Creating an array that will hold all of our system info. Each index contains the name of the info and a call to the OS module, requesting the specific info
var sysarray = new Array('Type: ' + os.type(), 
						 'Node Version: ' + process.version, 
						 'Platform: ' + os.platform(), 
						 'Hostname: ' + os.hostname(), 
						 'Total Memory: ' + os.totalmem(), 
						 'Free Memory: ' + os.freemem(), 
						 'Uptime: ' + os.uptime()
						 );  
console.log(message);

//How many values inside the array
var arraylen = sysarray.length;

//counter
i=0;

//while counter is < than the array length, console.log the values.
while(i<arraylen) {
	console.log(sysarray[i]);
	i++;
}

//Additional commit
