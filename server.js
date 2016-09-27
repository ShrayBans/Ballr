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
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongoMethods.savePlayers
app.get('/player/:first/:last', mongoMethods.retrievePlayer , function(req, res){
	res.json(req.player);
});

app.use(express.static('build'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/index.html'));
});

/**
* Scrapes playerList and adds to database
* Needs password authentication to scrape
**/
app.get('/scrape/:password', authenticateScraper, playerScraper, playerData, mongoMethods.savePlayers, function(req, res){
	res.json(req.playerData);
});

var server = app.listen(3000);
server.timeout = 300000;

module.exports = app;
