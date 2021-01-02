const Game = require('../models/game') 

module.exports = {
  addGame
};

function addGame(req, res) {
  Game.create(req.body)
  res.json('ok!')
}
