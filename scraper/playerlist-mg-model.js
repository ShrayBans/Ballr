const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for all data of each player

const playerSchema = new Schema({
  firstName: {type: String, unique: true},
  lastName: String,
  fg_pct: Number,
  ft_pct: Number,
  fg3_pct: Number,
  ast: Number,
  stl: Number,
  blk: Number,
  tov: Number,
  pts: Number
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;