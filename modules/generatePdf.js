var fs = require('fs');
var mustache = require('mustache');
var rest= require('restler');

var config = require('../modules/appSettings').docRaptor;

var mustacheTemplate = fs.readFileSync('./templates/productsheet.html').toString();

var postData = {
    user_credentials: config.apiKey,
    doc: {
        document_type: 'pdf',
        name: 'Uhrenholt Products',
        document_content: undefined,
        strict: 'html',
        test: undefined
    }
};

var renderProducts = function (data) {
    return mustache.render(mustacheTemplate, data);
}

var generatePdf = function(data, callback) {
    var finishedDocument = renderProducts(data);

    postData.doc.document_content = finishedDocument;
    postData.doc.test = data.testMode ? data.testMode : config.testMode;

    var req = rest.postJson(config.url, postData);
    req.on('success', function(data, response) {
        callback(response.raw);
    });
    req.on('fail', function(data, response) {
        console.log('Failure Creating Document');
    });
    req.on('error', function(err, response) {
        console.log('Error Creating Document');
    });
}

module.exports.renderProducts = renderProducts;
module.exports.generatePdf = generatePdf;