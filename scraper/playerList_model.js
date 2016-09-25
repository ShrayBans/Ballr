const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var connector = mongoose.connect('mongodb://localhost/ballr');

//Schema for all data of each player

const playerSchema = new Schema({
  firstname: String,
  lastName: String,

});

const playerData = mongoose.model('playerData', playerSchema);

module.exports = { playerData, connector };

