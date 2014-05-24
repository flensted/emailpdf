/**
 * Created by Niels on 24-05-2014.
 */
var assert = require('assert');
var path = require('path');
var fs = require('fs');
var emailer = require('../modules/sendEmail');

var filename = '../testing.pdf';
var filepath = path.join(__dirname, filename);
var file = fs.readFileSync(filepath);

emailer.sendEmail('nfj@flensted-jensen.com', 'niels@grean.com', 'Testing 123', 'Hej Niels, vi tester bare', file, 'testing.pdf');
