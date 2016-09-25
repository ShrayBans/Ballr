'use strict';
// var uselessWords = ['to', 'is', 'all', 'in', 'the', 'a', 'and', 'and', 'it', 'The', 'what', 'that', 'he', 'his', 'her', 'was', 'with', 'in']
const cheerio = require('cheerio');
const request = require('request');
const Promise = require("bluebird");
const rp = require('request-promise');
var json = {};

function playerData(req, res, next){ 

	// let playerUrl = urlGenerator(req.playerData[i].firstName, req.playerData[i].lastName);
	// eachPlayer(playerUrl);
	setIntervalX(function () {
	    console.log('suppppp')
	}, 5000, 1);

	next();
}

function eachPlayer(url) {
	var options = {
		uri: url,
		transform: function(body){
			return cheerio.load(body)
		}
	};

	rp(options)
		.then(function($){
			console.log()
			var playerArr;
			$('.title').each(function() {
				playerArr = $(this).text().replace(/[0-9.]/g, '').split(' ');
				playerData.push({firstName: playerArr[0], lastName: playerArr[1]});
			});

			return playerData;

		})
		.then(function(playerData) {
			req.playerData = playerData;
			console.log(playerData)
			next();
		})
		.catch(function(err){
			console.log(err);
			next();
		});
}

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

function urlGenerator(first, last) {

}

    module.exports = playerData;