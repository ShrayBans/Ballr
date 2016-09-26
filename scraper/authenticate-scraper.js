const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const password = require('../password.txt');

/**
* Authenticates the scraper needing param to be the same as the password.txt file
**/
function authenticateScraper(req, res, next) {

	if(password !== req.params.password) {
		res.end('Please enter correct password for scraper.');
	}
	else next();
}

module.exports = authenticateScraper;