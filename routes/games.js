const app = require('express').Router()
const games = require('../db/games')
module.exports = app

app.get('/', (req, res, next) => {
  if (req.query.date) {
    res.send(games.getGamesByDate(req.query.date))
  }
  else {
    res.send(games.getGames())
  }
})

app.get('/:id', (req, res, next) => {
  const game = games.getGame(req.params.id * 1)
  res.send(game)
})
