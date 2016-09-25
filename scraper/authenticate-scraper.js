const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const password = require('../password.txt');

function authenticateScraper(req, res, next) {
	console.log(password)
	console.log(req.params.password)
	if(password !== req.params.password) {
		res.end('Please enter correct password for scraper <3');
	}
	else next();
}

module.exports = authenticateScraper;