'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/ballr';
const db = mongoose.connect(mongoURI);
const mongoMethods = require('./scraper/mongoMethods')


// var pg = require('pg');
// const table = require('./scraper/pg-table.js');
// var conString = process.env.ELEPHANTSQL_URL || "postgres://postgres:5432@localhost/postgres";

// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query(`CREATE TABLE nba_ballr (${table}) `, function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result);
//   });
// });
// const postToPG = require('./scraper/postToPG');


const authenticateScraper = require('./scraper/authenticate-scraper');
const playerData = require('./scraper/player-data-scraper');
const playerScraper = require('./scraper/player-scraper');

app.use(bodyParser.urlencoded({ extended: true }));


/**
* @scrapes playerData using original list and adds to database 
*
**/
app.get('/players', mongoMethods.retrievePlayers, function(req, res){
	res.json(req.playerData);
});

//mongoMethods.savePlayers
app.get('/test/:first/:last', playerData , function(req, res){
	console.log('DONE SCRAPING!');
	res.send('nice');
});

app.get('/', function(req, res){
	res.send('Home');
});

/**
* @scrapes playerList and adds to database 
*
**/
app.get('/scrape/:password', authenticateScraper, playerScraper, playerData, mongoMethods.savePlayers, function(req, res){
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
