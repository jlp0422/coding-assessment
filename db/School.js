const conn = require('./conn')
const Sequelize = require('sequelize');

const School = conn.define('school', {
  name: Sequelize.STRING,
  seed: Sequelize.INTEGER,
  region: Sequelize.ENUM('East', 'West', 'Midwest', 'South')
}, {
    timestamps: false
  }
)

module.exports = {
  School
}
