'use strict';

/**
 * @fileoverview Scrapes individual player data using an interval to ensure no ip blacklisting.
 */

const cheerio = require('cheerio');
const request = require('request');
const promisify = require('es6-promisify');
const rp = require('request-promise');

/**
* @property {number} Delay for scraper in milliseconds 
*/
const scraperDelay = 20000;

function playerData(req, res, next){ 

	let times = 0;
	let playerUrl, firstName, lastName;
	let playerData = [];
	const intervalID = setInterval(function () {
		firstName = req.playerData[times].firstName;
		lastName = req.playerData[times].lastName;
	  playerUrl = urlGenerator(firstName, lastName);
	  times++;
    eachPlayer(playerUrl, firstName, lastName)
    	.then(function(data) {
    		playerData[times-1] = data;
    		console.log(firstName, 'stored')
    	})
    	.then(function() {
    		if (times === req.playerData.length) {
    				req.playerData = playerData;
    		    clearInterval(intervalID);
    		}
    	})
    	.catch(function(err) {
    		if (times === req.playerData.length) {
    				req.playerData = playerData;
    		    clearInterval(intervalID);
    		}
				console.error(err);
    		throw new Error(err);
    	});

	}, scraperDelay);

	next();
}


/** 
* Promisified scraper that returns each individual player stats.
*	.data, .attr, .prop, css selectors didn't work
* @param {string} url of specific player website to scrape
* @param {string} first, last names of player
* @return {Promise} returns a promise that can be used to get the data of each player once it's available
*/
var eachPlayer = promisify(function (url, first, last, callback) {
	var options = {
		uri: url,
		transform: function(body){
			return cheerio.load(body)
		}
	};

	var playerObj = {firstName: first, lastName: last};

	rp(options)
		.then(function($){
			var table = $('#per_game').find('tfoot').find('tr').first().find('td');
			table
				.each(function(i, data) {
				if(data.attribs["data-stat"]==='fg_pct') playerObj['fg_pct'] = data.children[0].data;
				else if(data.attribs["data-stat"]==='fg3_pct') playerObj['fg3_pct'] = data.children[0].data;
				else if(data.attribs["data-stat"]==='ft_pct') playerObj['ft_pct'] = data.children[0].data;
				else if(data.attribs["data-stat"]==='trb_per_g') playerObj['reb'] = data.children[0].data;
				else if(data.attribs["data-stat"]==='ast_per_g') playerObj['ast'] = data.children[0].data;
				else if(data.attribs["data-stat"]==='pts_per_g') playerObj['pts'] = data.children[0].data;
				else if(data.attribs["data-stat"]==='stl_per_g') playerObj['stl'] = data.children[0].data;
				else if(data.attribs["data-stat"]==='blk_per_g') playerObj['blk'] = data.children[0].data;
				else if(data.attribs["data-stat"]==='tov_per_g') playerObj['tov'] = data.children[0].data;
			});

			callback(null, playerObj);
		})
		.catch(function(err) {
			callback(err, null);
		});
});


/**
* @param {string} first - first name of player.
* @param {string} last - last name of player.
* @return {string} Returns a generated url specific for www.basketball-reference.com
*/
function urlGenerator(first, last) {
	first = first.toLowerCase().substring(0,2);
	last = last.toLowerCase().substring(0,5);
	var lastInitial = last.substring(0,1);
	return `http://www.basketball-reference.com/players/${lastInitial}/${last}${first}01.html`;
}

    module.exports = playerData;