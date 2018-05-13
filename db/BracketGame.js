const conn = require('./conn')
const Sequelize = require('sequelize');
const { School } = require('./School')

const BracketGame = conn.define('bracket_game', {
  winningTeam: Sequelize.INTEGER,
  losingTeam: Sequelize.INTEGER,
  userId: Sequelize.INTEGER
}, {
    timestamps: false
  }
)

BracketGame.isBracketComplete = function(id) {
  return this.count({
    where: { userId: id }
  })
  .then(count => {
    // brackets have 63 games, must fill in all 63 to be complete
    if (count < 63) return ('Bracket is not complete')
    else return ('Bracket is complete')
  })
}

BracketGame.findChampion = function(id) {
  return this.findAll({
    attributes: ['winningTeam', [Sequelize.fn('count', Sequelize.col('winningTeam')), 'wins']],
    where: { userId: id },
    group: [ 'winningTeam', 'id' ]
  })
  .then( winningTeams => {
    return winningTeams.reduce((memo, team) => {
      if (!memo[team.winningTeam]) memo[team.winningTeam] = 1
      else memo[team.winningTeam]++
      return memo
    }, {})
  })
  .then( winsPerTeam => {
    for (let key in winsPerTeam) {
      if (winsPerTeam[key] === 6) return key
      else return ('Your bracket does not have a champion')
    }
  })
  .then(winningTeamId => {
    return School.findById(winningTeamId)
      .then( champion => `Your champion is ${champion.name}`)
  })
}

BracketGame.pathToVictory = function(id) {

}

module.exports = {
  BracketGame
}
