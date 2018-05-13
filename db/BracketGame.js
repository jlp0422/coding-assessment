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
  return this.count({ where: { userId: id } })
  .then(count => {
    // brackets have 63 games, must fill in all 63 to be complete
    if (count < 63) return ('Bracket is not complete')
    else return ('Bracket is complete')
  })
}

BracketGame.findChampion = function(id) {
  return this.findAll({
    // getting all teams who won at least 1 game
    attributes: ['winningTeam', [Sequelize.fn('count', Sequelize.col('winningTeam')), 'wins']],
    where: { userId: id },
    group: [ 'winningTeam', 'id' ]
  })
  .then( winningTeams => {
    // summing up wins per team into an object
    return winningTeams.reduce((memo, team) => {
      if (!memo[team.winningTeam]) memo[team.winningTeam] = 1
      else memo[team.winningTeam]++
      return memo
    }, {})
  })
  .then( winsPerTeam => {
    for (let key in winsPerTeam) {
      // finding team that had 6 wins (must have 6 to win tournament)
      if (winsPerTeam[key] === 6) return key
      else return null
    }
  })
  // returning school that had 6 wins
  .then(winningTeamId => School.findById(winningTeamId))
}

BracketGame.pathToVictory = function(id) {
  // using findChampion to get the winning team, then finding losing teams
  return this.findChampion(id)
    .then( champion => this.findAll({
      // finding all games where champion won, in order of game id
      where: { winningTeam: champion.id },
      order: [[ 'id', 'ASC' ]]
    }))
    .then( games => {
      // creating array of losing team ids
      return games.reduce((memo, game) => {
        memo.push(game.losingTeam)
        return memo
      }, [])
    })
    .then( losingTeams => {
      return School.findAll({
        include: [ {
          model: BracketGame, as: 'losingTeam'
        } ],
        where: {
          id: { $or: [
              losingTeams[0],
              losingTeams[1],
              losingTeams[2],
              losingTeams[3],
              losingTeams[4],
              losingTeams[5],
            ] },
          }
      })
    })
    .then( teams => {
      // return teams
      return `Your champion's path to victory was: ${teams[0].name} --> ${teams[1].name} --> ${teams[2].name} --> ${teams[3].name} --> ${teams[4].name} --> ${teams[5].name}`
    })
}

module.exports = {
  BracketGame
}
