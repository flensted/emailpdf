var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var appSettings = require('./modules/appSettings');
var renderer = require('./modules/renderFromTemplate');
var pdfGenerator= require('./modules/generatePdf');
var mailer = require('./modules/sendEmail');


var app = express();
app.use(bodyParser.json());

var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = appSettings.cors.whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    }
};
/*
Accepts command structure specifying the details of the email to be sent
{
    message: {
        to: <email>,
        from: <email>,
        subject: <string>
        body: <string containing template>,
        bodyTemplateFile: <name of template file>, (overrides template string)
        attachment: <string containing template>,
        attachmentTemplateFile: <name of template file>, (overrides template string)
        attachmentName: <string to use as the name of the attached file>
    },
    data: <data to inject into Mustache template>,
    pdfTestMode: <true|false>, (only used when generating PDF attachment, true by default)
}
 */
app.post('/sendmail', cors(corsOptions), function(req, res) {
    var msgBody, attachmentHTML;
    if (!!req.body.message.bodyTemplateFile) {
        msgBody = renderer.renderTemplateFile(req.body.message.bodyTemplateFile, req.body.data)
    }
    else if (!!req.body.message.body) {
        msgBody = renderer.renderTemplate(req.body.message.body, req.body.data)
    }
    if (!!req.body.message.attachmentTemplateFile) {
        attachmentHTML = renderer.renderTemplateFile(req.body.message.attachmentTemplateFile, req.body.data)
    }
    else if (!!req.body.message.attachment) {
        attachmentHTML = renderer.renderTemplate(req.body.message.attachment, req.body.data)
    }

    if (!!attachmentHTML) {
        pdfGenerator.generatePdf(attachmentHTML, req.body.pdfTestMode, function (pdf) {
            mailer.sendEmail(req.body.message.to, req.body.message.from, req.body.message.subject, msgBody, pdf, req.body.message.attachmentName);
        });
    }
    else {
        mailer.sendEmail(req.body.message.to, req.body.message.from, req.body.message.subject, msgBody);
    }
    res.end();
});

app.get('/', function(req, res) {
   res.end('API for sending emails with optional genrated PDF attachment');
});

var port = process.env.PORT || 1337;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});