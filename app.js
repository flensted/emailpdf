var express = require('express');
var bodyParser = require('body-parser');

var generatePdf = require('./modules/generatePdf').generatePdf;

var app = express();

app.post('/createsend', function(req, res) {
	generatePdf(req, function(pdf) {
		sendFileByEmail(pdf);
	});
});

app.get('/', function(req, res) {
   res.end('Hello World');
});

var port = process.env.PORT || 1337;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});