const app = require('express').Router()
module.exports = app

app.use('/games', require('./games'))
app.use('/players', require('./players'))
app.use('/teams', require('./teams'))
