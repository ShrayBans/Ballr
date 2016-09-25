'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const playerData = require('./scraper');
const playerScraper = require('./player-scraper');
const postToMongo = require('./postToMongo')

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/mongo', function(req, res){
	res.send('SUP');
});

app.get('/playerlist', playerScraper, postToMongo.playerList, function(req, res){

	res.json(req.playerData);

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
