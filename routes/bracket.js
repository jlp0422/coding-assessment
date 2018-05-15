const app = require('express').Router()
const { School, UserBracket, BracketGame } = require('../db').models
module.exports = app

app.get('/teams', (req, res, next) => {
  School.findAll()
    .then(schools => res.send(schools))
    .catch(next)
})

app.get('/:id', (req, res, next) => {
  BracketGame.findAll({ where: { userId: req.params.id } })
    .then(bracket => res.send(bracket))
    .catch(next)
})

app.get('/:id/status', (req, res, next) => {
  BracketGame.isBracketComplete(req.params.id)
    .then(count => res.send(count))
    .catch(next)
})

app.get('/:id/champion', (req, res, next) => {
  BracketGame.findChampion(req.params.id)
    .then(champion => {
      if (champion) res.send(champion)
      else res.send('Bracket does not have a champion')
    })
    .catch(next)
})

app.get('/:id/path', (req, res, next) => {
  BracketGame.pathToVictory(req.params.id)
    .then(teams => res.send(teams))
    .catch(next)
})
