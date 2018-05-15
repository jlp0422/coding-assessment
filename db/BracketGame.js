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
        memo.push(game.losingTeam)
        return memo
      }, [])
    })
    .then( losingTeams => {
      // finding all teams that were in the losing team array
      return School.findAll({
        where: {
          id: {
            $or: [
              losingTeams[0],
              losingTeams[1],
              losingTeams[2],
              losingTeams[3],
              losingTeams[4],
              losingTeams[5],
            ]
          },
        },
        // trying to put them in order of the bracket game id, which would signify round
        include: [
          {
            model: BracketGame,
            as: 'losingTeam',
            order: [[ 'id', 'ASC']]
          }
        ]
      })
    })
    .then( teams => {
      // return teams
      // these probably won't be in order 100% of the time
      // having hard time ensuring they are in order
      // would likely need to add another column to the game model, with 'round'
      // or would need to find the number of wins for each of the losing teams, and then order by how many wins they had (0 wins = 1st round loss, 5 wins = nat'l champ game loss)
      return `Your champion's path to victory was: ${teams[0].name} --> ${teams[1].name} --> ${teams[2].name} --> ${teams[3].name} --> ${teams[4].name} --> ${teams[5].name}`
    })
}

module.exports = {
  BracketGame
}
