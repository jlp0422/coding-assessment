const app = require('express').Router()
const players = require('../db/players')
module.exports = app

app.get('/', (req, res, next) => {
  if (req.query.date) {
    res.send(players.getPlayersForDate(req.query.date))
  }
  else {
    res.send(players.getPlayers())
  }
})

app.get('/:id', (req, res, next) => {
  const player = players.getPlayer(req.params.id * 1)
  res.send(player)
})

app.get('/:id/stats', (req, res, next) => {
  const player = players.getPlayerStats(req.params.id * 1)
  res.send(player)
})

app.get('/players')
