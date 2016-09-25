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
				playerArr = $(this).text().split('');
			});

				// var playerUrlArr = [];
				// // console.log('HELLO' + $('#leaders').find('td[data-stat="player"]').text());
				// $('#leaders').find('td[data-stat="player"]').each(function(){
				// 	var playerExt = $(this).find('a').attr('href');


				// 	if(playerExt){
				// 		var playerBegin = "http://www.pro-football-reference.com"
				// 		var playerUrl = playerBegin + playerExt;
				// 		playerUrlArr.push(playerUrl);
				// 		// playerController(res, playerUrl);
				// 	}

				// });
	   //  	for (var i = 0; i < 2; i++) {
	   //  		setTimeout(playerController(res, playerUrlArr[i]), )
	    		
	   //  	};

		})
		.catch(function(err){
			console.log(err);
		});

}

searchController(url);

function playerFinder (res, url){

  // change URL to any site that you want
  // request(url, (error, response, html) => {
  // let $ = cheerio.load(html);

	var body = $('.article').first().text();
	wordFinder(body);
	 		

	// });
}

