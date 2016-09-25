'use strict';
const mongoose = require('mongoose');
const Player = require('./playerlist-mg-model.js');
const mongoMethods = {};

mongoMethods.savePlayers = function(req, res, next) {
	Player.create({}, (err, res) =>  {

	})
	console.log(req.playerData);
	next();
};

mongoMethods.retrievePlayers = function(req, res, next) {
	
	next()
};

module.exports = mongoMethods;