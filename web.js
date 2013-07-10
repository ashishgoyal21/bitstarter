var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var content;

fs.readFileSync('index.html', function(err, data){
	if(err) return err;
	content = data.toString('utf-8');
	console.log(content);
	app.get('/', function(request, response){
		
		response.send(content);
	});
});

/*app.get('/', function(request, response) {
  response.send(content);
});*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
