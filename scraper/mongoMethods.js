'use strict';
const mongoose = require('mongoose');
const Player = require('./playerlist-mg-model.js');
const mongoMethods = {};

mongoMethods.savePlayers = function(req, res, next) {
	// console.log(req.playerData);
	Player.create(req.playerData, (err, res) =>  {
		console.log(res);
		next();
	});
};

mongoMethods.retrievePlayer = function(req, res, next) {
	Player.findOne({'firstName': {'$regex': req.params.first ,$options:'i'}, 'lastName': {'$regex': req.params.last ,$options:'i'}}, function(err, player) {
		req.player = player;
		next();
	});
};

module.exports = mongoMethods;