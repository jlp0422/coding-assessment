const conn = require('./conn');
const { School } = require('./School');
const { UserBracket } = require('./UserBracket');
const { BracketGame } = require('./BracketGame')

UserBracket.hasMany(BracketGame, { as: 'userId', foreignKey: 'userId'})
School.hasMany(BracketGame, { as: 'winningTeam', foreignKey: 'winningTeam'})
School.hasMany(BracketGame, { as: 'losingTeam', foreignKey: 'losingTeam' })

const sync = () => conn.sync({ force: true })

const seed = () => {
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
  .then(() => {
    return Promise.all([
      UserBracket.create({ name: 'Jeremy' })
    ])
  })
  .then(() => {
    return Promise.all([
      BracketGame.create({ winningTeam: 5, losingTeam: 12, userId: 1 }),
      BracketGame.create({ winningTeam: 11, losingTeam: 3, userId: 1 }),
      BracketGame.create({ winningTeam: 5, losingTeam: 4, userId: 1 }),
      BracketGame.create({ winningTeam: 5, losingTeam: 44, userId: 1 }),
      BracketGame.create({ winningTeam: 5, losingTeam: 34, userId: 1 }),
      BracketGame.create({ winningTeam: 5, losingTeam: 1, userId: 1 }),
      BracketGame.create({ winningTeam: 5, losingTeam: 60, userId: 1 }),
      BracketGame.create({ winningTeam: 51, losingTeam: 64, userId: 1 }),
      BracketGame.create({ winningTeam: 35, losingTeam: 62, userId: 1 }),
      BracketGame.create({ winningTeam: 45, losingTeam: 36, userId: 1 }),
    ])
  })
}

module.exports = {
  sync,
  seed,
  models: {
    School,
    UserBracket,
    BracketGame
  }
}
