'use strict';

const express = require('express');
const app = express();
const searchController = require('./scraper');
const postToMongo = require('./postToMongo')
// var linksToScrape = 2;

// var paths = ['/', '/path1', '/path2']
// first sample route

app.get('/mongo', function(req, res){
	res.json
});

app.get('/scrape', searchController, postToMongo, function(req, res){
	// for (var i = 1; i <= 2; i++) {
		// console.log(urlGenerator())
		searchController(res, urlGenerator())

	// }
});

function urlGenerator(input){
	if(!input) input = "Kevin Durant";
	var array = input.split(' ');
	var sampleUrl = "http://www.pro-football-reference.com/leaders/pass_yds_career_playoffs.htm"
	return sampleUrl;
}

//sample: http://espn.go.com/search/results?q=kevin%20durant#&gsc.q=kevin%20durant&gsc.page=1

// app.get('/', function(req, res){
// 	res.header('Content-Type', 'application/json');
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.send(JSON.stringify("Hello World!"));
// })

// app.get('/paths', function(req, res){
// 	res.header('Content-Type', 'application/json');
// 	res.send(JSON.stringify("Hello World!"));
// })


app.listen(3000);

module.exports = app;
