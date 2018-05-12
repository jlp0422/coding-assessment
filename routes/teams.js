const app = require('express').Router();
const teams = require('../db/teams');
module.exports = app;

app.get('/', (req, res, next) => {
    res.send(teams.getTeams())
})

app.get('/:id', (req, res, next) => {
  const team = teams.getTeam(req.params.id * 1)
  res.send(team)
})
