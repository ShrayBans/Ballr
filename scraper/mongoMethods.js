'use strict';
const mongoose = require('mongoose');
const Player = require('./playerlist-mg-model.js');
const mongoMethods = {};

mongoMethods.savePlayers = function(req, res, next) {
	console.log(req.playerData);
	Player.create(req.playerData, (err, res) =>  {
		console.log(res);
		next();
	});
};

mongoMethods.retrievePlayers = function(req, res, next) {
	
	next()
};

module.exports = mongoMethods;