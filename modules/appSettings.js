/**
 * Created by Niels on 23-05-2014.
 */

var docRaptor = {
    url: 'https://docraptor.com/docs',
    apiKey: '08iKzqZc2QQQivMMaI',
    testMode: 'true'
};

var mailgun = {
    apiKey: 'key-66hcumj0xjvoi-llmhvpjym1sfs0gtr3',
    domain: 'mg.grean.com'
};

var cors = {
    whitelist: ['http://localhost:2152',
                'https://uhrenholtv2.azurewebsites.net',
                'https://uhrenholtv2uat.azurewebsites.net']
};

module.exports.docRaptor = docRaptor;
module.exports.mailgun = mailgun;
module.exports.cors = cors;

