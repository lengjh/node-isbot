var isbot = require('./index.js');
var fs = require('fs');
var expect = require('chai').expect;
var path = require('path');
var browserPath = path.join(__dirname, 'browser.txt');
var crawlersPath = path.join(__dirname, 'crawlers.txt');

var browserFile = fs.readFileSync(browserPath, 'utf-8').trim().split('\n');
var crawlersFile = fs.readFileSync(crawlersPath, 'utf-8').trim().split('\n');

describe('Browser:', function() {
	browserFile.forEach(function(item) {
		item = item.replace(/\s/ig, '');
		if (!item.length) {
			return;
		}
		it('should not detect ' + item + ' as bot', function() {
			expect(isbot(item)).to.be.false;
		});

	});

});


describe('Crawlers:', function() {
	crawlersFile.forEach(function(item) {
		item = item.replace(/\s/ig, '');
		if (!item.length) {
			return;
		}
		it('should detect ' + item + ' as bot', function() {
			expect(isbot(item)).to.be.true;
		});

	});

});
