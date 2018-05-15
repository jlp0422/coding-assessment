const conn = require('./conn')
const Sequelize = require('sequelize');
const { School } = require('./School')

const BracketGame = conn.define('bracket_game', {
  winningTeam: Sequelize.INTEGER,
  losingTeam: Sequelize.INTEGER,
  userId: Sequelize.INTEGER,
  round: Sequelize.INTEGER
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
    // was playing around with group: [ 'winningTeam' ], but couldn't get that to work the way i wanted it
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
        memo.push({ losingTeamId: game.losingTeam, round: game.round })
        return memo
      }, [])
    })
    .then( losingTeams => {
      // return losingTeams
      // finding all teams that were in the losing team array
      return School.findAll({
        where: {
          id: {
            $or: [
              losingTeams[0].losingTeamId,
              losingTeams[1].losingTeamId,
              losingTeams[2].losingTeamId,
              losingTeams[3].losingTeamId,
              losingTeams[4].losingTeamId,
              losingTeams[5].losingTeamId,
            ]
          },
        },
        include: [ {
          model: BracketGame,
          as: 'losingTeam'
        } ]
      })
    })
    .then( teams => {
      const round1 = teams.find(team => team.losingTeam[0].round === 1)
      const round2 = teams.find(team => team.losingTeam[0].round === 2)
      const round3 = teams.find(team => team.losingTeam[0].round === 3)
      const round4 = teams.find(team => team.losingTeam[0].round === 4)
      const round5 = teams.find(team => team.losingTeam[0].round === 5)
      const round6 = teams.find(team => team.losingTeam[0].round === 6)
      return [ round1, round2, round3, round4, round5, round6 ]
    })
    .then( orderTeams => {
      return `Your champion's path to victory was: ${orderTeams[0].name} --> ${orderTeams[1].name} --> ${orderTeams[2].name} --> ${orderTeams[3].name} --> ${orderTeams[4].name} --> ${orderTeams[5].name}`
    })
}

module.exports = {
  BracketGame
}
