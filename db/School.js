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

// 2018 ncaa tournament field!
const createAllSchools = () => {
  return Promise.all([
    School.create({ name: 'Virginia', seed: 1, region: 'South' }),
    School.create({ name: 'Cincinnati', seed: 2, region: 'South' }),
    School.create({ name: 'Tennessee', seed: 3, region: 'South' }),
    School.create({ name: 'Arizona', seed: 4, region: 'South' }),
    School.create({ name: 'Kentucky', seed: 5, region: 'South' }),
    School.create({ name: 'Miami (FL)', seed: 6, region: 'South' }),
    School.create({ name: 'Nevada', seed: 7, region: 'South' }),
    School.create({ name: 'Creighton', seed: 8, region: 'South' }),
    School.create({ name: 'Kansas State', seed: 9, region: 'South' }),
    School.create({ name: 'Texas', seed: 10, region: 'South' }),
    School.create({ name: 'Loyola–Chicago', seed: 11, region: 'South' }),
    School.create({ name: 'Davidson', seed: 12, region: 'South' }),
    School.create({ name: 'Buffalo', seed: 13, region: 'South' }),
    School.create({ name: 'Wright State', seed: 14, region: 'South' }),
    School.create({ name: 'Georgia State', seed: 15, region: 'South' }),
    School.create({ name: 'UMBC', seed: 16, region: 'South' }),
    School.create({ name: 'Xavier', seed: 1, region: 'West' }),
    School.create({ name: 'North Carolina', seed: 2, region: 'West' }),
    School.create({ name: 'Michigan', seed: 3, region: 'West' }),
    School.create({ name: 'Gonzaga', seed: 4, region: 'West' }),
    School.create({ name: 'Ohio State', seed: 5, region: 'West' }),
    School.create({ name: 'Houston', seed: 6, region: 'West' }),
    School.create({ name: 'Texas A&M', seed: 7, region: 'West' }),
    School.create({ name: 'Missouri', seed: 8, region: 'West' }),
    School.create({ name: 'Florida State', seed: 9, region: 'West' }),
    School.create({ name: 'Providence', seed: 10, region: 'West' }),
    School.create({ name: 'San Diego State', seed: 11, region: 'West' }),
    School.create({ name: 'South Dakota State', seed: 12, region: 'West' }),
    School.create({ name: 'UNC Greensboro', seed: 13, region: 'West' }),
    School.create({ name: 'Montana', seed: 14, region: 'West' }),
    School.create({ name: 'Lipscomb', seed: 15, region: 'West' }),
    School.create({ name: 'North Carolina Central', seed: 16, region: 'West' }),
    School.create({ name: 'Villanova', seed: 1, region: 'East' }),
    School.create({ name: 'Purdue', seed: 2, region: 'East' }),
    School.create({ name: 'Texas Tech', seed: 3, region: 'East' }),
    School.create({ name: 'Wichita State', seed: 4, region: 'East' }),
    School.create({ name: 'West Virginia', seed: 5, region: 'East' }),
    School.create({ name: 'Florida', seed: 6, region: 'East' }),
    School.create({ name: 'Arkansas', seed: 7, region: 'East' }),
    School.create({ name: 'Virginia Tech', seed: 8, region: 'East' }),
    School.create({ name: 'Alabama', seed: 9, region: 'East' }),
    School.create({ name: 'Butler', seed: 10, region: 'East' }),
    School.create({ name: 'St. Bonaventure', seed: 11, region: 'East' }),
    School.create({ name: 'Murray State', seed: 12, region: 'East' }),
    School.create({ name: 'Marshall', seed: 13, region: 'East' }),
    School.create({ name: 'Stephen F. Austin', seed: 14, region: 'East' }),
    School.create({ name: 'Cal State Fullerton', seed: 15, region: 'East' }),
    School.create({ name: 'LIU Brooklyn', seed: 16, region: 'East' }),
    School.create({ name: 'Kansas', seed: 1, region: 'Midwest' }),
    School.create({ name: 'Duke', seed: 2, region: 'Midwest' }),
    School.create({ name: 'Michigan State', seed: 3, region: 'Midwest' }),
    School.create({ name: 'Auburn', seed: 4, region: 'Midwest' }),
    School.create({ name: 'Clemson', seed: 5, region: 'Midwest' }),
    School.create({ name: 'TCU', seed: 6, region: 'Midwest' }),
    School.create({ name: 'Rhode Island', seed: 7, region: 'Midwest' }),
    School.create({ name: 'Seton Hall', seed: 8, region: 'Midwest' }),
    School.create({ name: 'NC State', seed: 9, region: 'Midwest' }),
    School.create({ name: 'Oklahoma', seed: 10, region: 'Midwest' }),
    School.create({ name: 'Syracuse', seed: 11, region: 'Midwest' }),
    School.create({ name: 'New Mexico State', seed: 12, region: 'Midwest' }),
    School.create({ name: 'College of Charleston', seed: 13, region: 'Midwest' }),
    School.create({ name: 'Bucknell', seed: 14, region: 'Midwest' }),
    School.create({ name: 'Iona', seed: 15, region: 'Midwest' }),
    School.create({ name: 'Penn', seed: 16, region: 'Midwest' }),
  ])
}

module.exports = {
  School,
  createAllSchools
}
