const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');

router.post('/add', gamesCtrl.addGame);

module.exports = router;