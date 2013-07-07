var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var filename = "index.html";
  var readFile = fs.readFileSync(filename);
  buf = new Buffer(readFile, "utf-8");
  var buffer2String = buf.toString(); 
  response.send(buffer2String);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
