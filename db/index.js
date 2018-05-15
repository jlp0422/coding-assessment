const conn = require('./conn');
const { School, createAllSchools } = require('./School');
const { UserBracket } = require('./UserBracket');
const { BracketGame } = require('./BracketGame')

UserBracket.hasMany(BracketGame, { as: 'userId', foreignKey: 'userId'})
School.hasMany(BracketGame, { as: 'winningTeam', foreignKey: 'winningTeam'})
School.hasMany(BracketGame, { as: 'losingTeam', foreignKey: 'losingTeam' })

const sync = () => conn.sync({ force: true })

const seed = () => {
  createAllSchools()
  .then(() => {
    return Promise.all([
      UserBracket.create({ name: 'Jeremy' }),
      UserBracket.create({ name: 'Frank' })
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
      BracketGame.create({ winningTeam: 51, losingTeam: 13, userId: 2 }),
      BracketGame.create({ winningTeam: 15, losingTeam: 62, userId: 2 }),
      BracketGame.create({ winningTeam: 33, losingTeam: 46, userId: 2 }),
      BracketGame.create({ winningTeam: 25, losingTeam: 26, userId: 2 }),
      BracketGame.create({ winningTeam: 4, losingTeam: 6, userId: 2 }),
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
