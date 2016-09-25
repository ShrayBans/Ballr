const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var connector = mongoose.connect('mongodb://localhost/ballr');

//Schema for all data of each player

const playerSchema = new Schema({
  first_name: String,
  last_name: String,
  fg_percent: Number,
  ft_percent: Number,
  three_percent: Number,
  assists: Number,
  steals: Number,
  blocks: Number,
  turnovers: Number,
  points: Number
});

const playerData = mongoose.model('playerData', playerSchema);

module.exports = { playerData, connector };

