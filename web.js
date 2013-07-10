var express = require('express');
//var fs = require('fs');

var app = express.createServer(express.logger());
//var content;

/*fs.readFileSync('index.html', function(err, data){
	if(err) return err;
	content = data.toString('utf-8');
	console.log(content);
	app.get('/', function(request, response){
		
		response.send("hello world!");
	});
});*/

app.get('/', function(request, response) {
	var fs = require('fs');
	fs.readFileSync("index.html", function(err, data){
		if(err) throw err;
		var content = data.toString();
		reponse.send(content);
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
