'use strict';
// var uselessWords = ['to', 'is', 'all', 'in', 'the', 'a', 'and', 'and', 'it', 'The', 'what', 'that', 'he', 'his', 'her', 'was', 'with', 'in']
const cheerio = require('cheerio');
const request = require('request');
const Promise = require("bluebird");
const rp = require('request-promise');
var json = {};

function playerData(req, res, next){ 

	let playerUrl = urlGenerator(req.playerData[i].firstName, req.playerData[i].lastName);
	eachPlayer()
	setIntervalX(function () {
	    console.log('suppppp')
	}, 1000, 5);

	setInterval(, 1000)
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
		.then
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

// function playerData(res, url){
// 	var playerUrl;



// 	rp(options)
// 		.then(function($){
				
// 				var playerUrlArr = [];
// 				// console.log('HELLO' + $('#leaders').find('td[data-stat="player"]').text());
// 				$('#leaders').find('td[data-stat="player"]').each(function(){
// 					var playerExt = $(this).find('a').attr('href');


// 					if(playerExt){
// 						var playerBegin = "http://www.pro-football-reference.com"
// 						var playerUrl = playerBegin + playerExt;
// 						playerUrlArr.push(playerUrl);
// 						// playerController(res, playerUrl);
// 					}

// 				});
// 	    	for (var i = 0; i < 2; i++) {
// 	    		setTimeout(playerController(res, playerUrlArr[i]), )
	    		
// 	    	};

// 	    					// console.log(playerUrlArr)

// 	     	res.send(JSON.stringify(json));

// 		})
// 		.catch(function(err){
// 			console.log(err);
// 		})

// }

// function playerController (res, url){
// 	// console.log(url);
// 	var options = {
// 		uri: url,
// 		transform: function(body){
// 			return cheerio.load(body)
// 		}
// 	};

// 	rp(options)
// 		.then(function($){
// 			var name, year, team, gs, cmpPerc, yards, td, interc, qbr, sacks;

// 			name = $('#meta').find('h1').first().text();
// 			// console.log(name)

// 			json[name]={};
// 	    $('#passing').find('.full_table').each(function(){
// 	    	year = parseInt($(this).find('th').find('a').text());
// 	    	json[name][year] = {};
// 	   		team = $(this).find('td[data-stat="team"]').text();
// 	   		gs = parseInt($(this).find('td[data-stat="gs"]').text());
// 	   		cmpPerc = parseInt($(this).find('td[data-stat="pass_cmp_perc"]').text());
// 	   		yards = parseInt($(this).find('td[data-stat="pass_yds"]').text());
// 	   		td = parseInt($(this).find('td[data-stat="pass_td"]').text());
// 	   		interc = parseInt($(this).find('td[data-stat="pass_int"]').text());
// 	   		qbr = parseInt($(this).find('td[data-stat="qbr"]').text());
// 	   		sacks = parseInt($(this).find('td[data-stat="pass_sacked"]').text());
// 	   		json[name][year]["Team"] = team;
// 	   		json[name][year]["Games Started"] = gs;
// 	   		json[name][year]["Completion Percentage"] = cmpPerc;
// 	   		json[name][year]["Pass Yards"] = yards;
// 	   		json[name][year]["TD"] = td;
// 	   		json[name][year]["Interceptions"] = interc;
// 	   		json[name][year]["QBR"] = qbr;
// 	   		json[name][year]["Times Sacked"] = sacks;
// 	    });

// 		})
// 		.catch(function(err){
// 			console.log(err);
// 		})

// }

// function scrapeController (res, url){

//   // change URL to any site that you want
//   // request(url, (error, response, html) => {
//   // let $ = cheerio.load(html);

// 	var body = $('.article').first().text();
// 	wordFinder(body);
	 		

// 	// });
// }

// function wordFinder(input){	
// 	var arr = input.split(' ');
// 	arr.forEach(function(item){
// 	 	if(!json[item]) json[item] = 1;
// 	 	else json[item] = json[item] + 1;
// 	});
// }

// function wordParser(input){
// 	input;
// }
 			

// function deleteWords(){
// for(var key in json){
//     		if(json[key] < 5 || key.length < 4){
//     			delete json[key];
//     		}
//     	}
//     }

    module.exports = playerData;