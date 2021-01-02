const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  winner: String,
  loser: String,
  date: Date,
  location: String
});

module.exports = mongoose.model('Game', gameSchema);