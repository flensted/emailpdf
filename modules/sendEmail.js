
var config = require('../modules/appSettings').mailgun;
var Mailgun = require('mailgun-js');

var sendEmail = function(toEmail, fromEmail, subject, message, attachment, attachmentName) {
    var mailgun  = new Mailgun({ apiKey: config.apiKey, domain: config.domain});
    var data = {
        from: fromEmail,
        to: toEmail,
        subject: subject,
        text: message
    };

    if (!!attachment) {
        var attch = new Mailgun.Attachment(attachment, attachmentName);
        data.attachment = attch;
    }

    mailgun.messages().send(data,
        function(error, response, body) {
            if (!!error) {
                console.log(error.message);
            }
        });
}

module.exports.sendEmail = sendEmail;