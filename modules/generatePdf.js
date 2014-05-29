var fs = require('fs');
var rest= require('restler');

var config = require('../modules/appSettings').docRaptor;

var docRaptorPostData = {
    user_credentials: config.apiKey,
    doc: {
        document_type: 'pdf',
        document_content: undefined,
        strict: 'html',
        name: 'Uhrenholt Products',
        test: undefined
    }
};

var generatePdf= function(text, testMode, callback) {
    docRaptorPostData.doc.document_content = text;
    docRaptorPostData.doc.test = !!testMode ? testMode : config.testMode;

    var req = rest.postJson(config.url, docRaptorPostData);
    req.on('success', function(data, response) {
        callback(response.raw);
    });
    req.on('fail', function(data, response) {
        console.log('Failure Creating Document');
    });
    req.on('error', function(err, response) {
        console.log('Error Creating Document: ' + err.message);
    });
}

module.exports.generatePdf = generatePdf;