const app = require('express').Router()
const { School, UserBracket, BracketGame } = require('../db').models
module.exports = app

app.get('/teams', (req, res, next) => {
  School.findAll()
    .then(schools => res.send(schools))
})

app.get('/:id', (req, res, next) => {
  BracketGame.findAll({
    where: { userId: req.params.id }
  })
    .then(bracket => res.send(bracket))
})

app.get('/:id/status', (req, res, next) => {
  BracketGame.isBracketComplete(req.params.id)
    .then(count => res.send(count))
    .catch(next)
})

app.get('/:id/champion', (req, res, next) => {
  BracketGame.findChampion(req.params.id)
    .then(teams => res.send(teams))
    .catch(next)
})
