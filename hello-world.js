// task 1
console.log("HELLO WORLD")

// task 2
var http = require("http");
http.createServer(function (request, response) {
   
    response.writeHead(200, {'Content-Type': 'text/html'});
    
   
    // response.write('<h1>Hello Node!!!!</h1>');
    response.end('<h1>Hello Node!!!!</h1>')
 }).listen(3000);
 
 
 console.log('Server running at http://127.0.0.1:3000/');
//  task 3
var fs = require("fs")
fs.readFile('welcome.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });


