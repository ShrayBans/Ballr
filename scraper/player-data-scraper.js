'use strict';

/**
 * @fileoverview Scrapes individual player data using an interval to ensure no ip blacklisting.
 */

const cheerio = require('cheerio');
const request = require('request');
const Promise = require("bluebird");
const rp = require('request-promise');
var json = {};

/**
* @property {number} Delay for scraper in milliseconds 
*/
const scraperDelay = 5000;
const repetitions = 5;

function playerData(req, res, next){ 
	console.log(urlGenerator(req.params.first, req.params.last));
	// let playerUrl = urlGenerator(req.playerData[i].firstName, req.playerData[i].lastName);
	// eachPlayer(playerUrl);
	var times = 0;
	setInterval(function () {
	    
	    console.log(times);

			if (++times === repetitions) {
			    clearInterval();
			}

	}, scraperDelay);

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
    var intervalID = setInterval(function () {

       callback();

       if (++x === repetitions) {
           clearInterval(intervalID);
       }
    }, delay);
}

//http://www.basketball-reference.com/players/(first letter of last name)/(5 letters of lastname)+(2 letters of firstname)01.html

/**
* @param {string} first - first name of player.
* @param {string} last - last name of player.
* @return {string} Returns a generated url specific for www.basketball-reference.com
*/
function urlGenerator(first, last) {
	first = first.substring(0,2);
	last = last.substring(0,5);
	var lastInitial = last.substring(0,1);
	return `http://www.basketball-reference.com/players/${lastInitial}/${last}${first}01.html`;
}

    module.exports = playerData;