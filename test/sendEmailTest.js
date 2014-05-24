/**
 * Created by Niels on 24-05-2014.
 */
var assert = require('assert');
var fs = require('fs');
var emailer = require('../modules/sendEmail');

emailer.sendEmail('nfj@flensted-jensen.com', 'niels@grean.com', 'Testing 123', 'Hej Niels, vi tester bare');
