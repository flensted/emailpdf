var express = require('express');
var bodyParser = require('body-parser');

var generatePdf = require('./modules/generatePdf').generatePdf;
var sendEmail = require('./modules/sendEmail').sendEmail;

var app = express();
app.use(bodyParser.json());

app.post('/createsend', function(req, res) {
	generatePdf(req.products, function(pdf) {
		sendEmail(req.toEmail, 'niels@grean.com', req.subject, req.message, pdf, 'product-sheet.pdf');
	});
});

app.get('/', function(req, res) {
   res.end('API for generating PDF from HTML and sending it as email');
});

var port = process.env.PORT || 1337;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});