'use strict';

const url = "http://www.si.com/nba/top-100-nba-players-2016";

const cheerio = require('cheerio');
const request = require('request');
const rp = require('request-promise');
var playerData = [];

function searchController(url){
	var options = {
		uri: url,
		transform: function(body){
			return cheerio.load(body);
		}
	};

	rp(options)
		.then(function($){
			var playerArr;
			$('.title').each(function() {
				playerArr = $(this).text().replace(/[0-9.]/g, '').split(' ');
				playerData.push({firstName: playerArr[0], lastName: playerArr[1]});
			});

		})
		.catch(function(err){
			console.log(err);
		});

}

searchController(url);
console.log(playerData);
