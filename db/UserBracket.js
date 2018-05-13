const conn = require('./conn')
const Sequelize = require('sequelize');

const UserBracket = conn.define('user_bracket', {
  name: Sequelize.STRING,
}, {
  timestamps: false
})

module.exports = {
  UserBracket
}
