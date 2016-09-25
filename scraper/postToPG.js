'use strict';
const mongoose = require('mongoose');
const postToMongo = {};

postToMongo.playerList = function(req, res, next) {
	console.log(req.playerData);
	next();
};

postToMongo.playerData = function(req, res, next) {
	
	next()
};

module.exports = postToMongo;