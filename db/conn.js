const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/fanduel_challenge_db', {
  logging: false
})

module.exports = conn
