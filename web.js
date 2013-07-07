var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var filename = "index.html";
  var readFile = fs.readFileSync(filename);
  var buffer2String = buf.toString('utf8', 0, readFile); 
  response.send(buffer2String);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
