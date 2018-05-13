/* eslint-disable */
const express = require('express');
const app = express()
const path = require('path');
const db = require('./db');

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/vendor', express.static(path.join(__dirname, 'public')))
app.use('/nba', require('./routes'))
app.use('/bracket', require('./routes/bracket'))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`port: ${port}`))

db.sync()
  .then(() => db.seed())
