var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    var fs = require('fs'); 
    var text = fs.readFileSync('index.html');
    console.log(text.toString('utf8'));
    var ch = text.toString('utf8');

    response.send(ch);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
