/* eslint-disable */
const games = require('./games');

const players = [
  { id: 1, name: 'Nick Young', team_id: 1 },
  { id: 2, name: 'Lou Williams', team_id: 1 },
  { id: 3, name: 'Lebron James', team_id: 2 },
  { id: 4, name: 'Kyrie Irving', team_id: 2 },
  { id: 5, name: 'Chris Paul', team_id: 3 },
  { id: 6, name: 'Blake Griffin', team_id: 3 },
  { id: 7, name: 'Kevin Durant', team_id: 4 },
  { id: 8, name: 'Stephen Curry', team_id: 4 },
  { id: 9, name: 'Dwight Howard', team_id: 5 },
  { id: 10, name: 'Kyle Korver', team_id: 5 },
  { id: 11, name: 'Kyle Lowry', team_id: 6 },
  { id: 12, name: 'DeMar DeRozan', team_id: 6 }
]

const playersStats = [
  { id: 1, game_id: 1, player_id: 1, team_id: 1, points: 20, assists: 10, rebounds: 2, nerd: 10 },
  { id: 2, game_id: 1, player_id: 2, team_id: 1, points: 15, assists: 2, rebounds: 2, nerd: -1 },
  { id: 3, game_id: 1, player_id: 3, team_id: 2, points: 10, assists: 2, rebounds: 20, nerd: 20 },
  { id: 4, game_id: 1, player_id: 4, team_id: 2, points: 5, assists: 1, rebounds: 2, nerd: -10 },
  { id: 5, game_id: 2, player_id: 5, team_id: 1, points: 23, assists: 10, rebounds: 2, nerd: 2.7 },
  { id: 6, game_id: 2, player_id: 6, team_id: 1, points: 12, assists: 2, rebounds: 2, nerd: -8.9 },
  { id: 7, game_id: 2, player_id: 7, team_id: 2, points: 11, assists: 2, rebounds: 20, nerd: 15.2 },
  { id: 8, game_id: 2, player_id: 8, team_id: 2, points: 15, assists: 1, rebounds: 2, nerd: 13 },
  { id: 9, game_id: 3, player_id: 9, team_id: 1, points: 19, assists: 10, rebounds: 2, nerd: -2 },
  { id: 10, game_id: 3, player_id: 10, team_id: 1, points: 7, assists: 2, rebounds: 2, nerd: -17 },
  { id: 11, game_id: 3, player_id: 11, team_id: 2, points: 20, assists: 2, rebounds: 20, nerd: 21 },
  { id: 12, game_id: 3, player_id: 12, team_id: 2, points: 1, assists: 1, rebounds: 2, nerd: 21 },
  { id: 13, game_id: 4, player_id: 3, team_id: 2, points: 5, assists: 11, rebounds: 12, nerd: 3 },
  { id: 14, game_id: 4, player_id: 5, team_id: 3, points: 9, assists: 1, rebounds: 12, nerd: -12 },
  { id: 15, game_id: 4, player_id: 6, team_id: 3, points: 17, assists: 12, rebounds: 12, nerd: -7 },
  { id: 16, game_id: 4, player_id: 4, team_id: 2, points: 2, assists: 12, rebounds: 2, nerd: 2 },
  { id: 17, game_id: 5, player_id: 8, team_id: 4, points: 25, assists: 14, rebounds: 6, nerd: 9 },
  { id: 18, game_id: 5, player_id: 1, team_id: 1, points: 9, assists: 3, rebounds: 7, nerd: -21 },
  { id: 19, game_id: 5, player_id: 2, team_id: 1, points: 27, assists: 4, rebounds: 9, nerd: 7 },
  { id: 20, game_id: 5, player_id: 7, team_id: 4, points: 2, assists: 8, rebounds: 12, nerd: 15 }
]

const convertDate = (dateStr) => {
  const dateMonth = dateStr.slice(0, 2)
  const dateDay = dateStr.slice(2, 4)
  const dateYear = dateStr.slice(-4)
  return new Date(`${dateMonth}/${dateDay}/${dateYear}`)
}

const getPlayers = () => {
  return players;
}

const getPlayer = (id) => {
  return players.find(player => player.id === id)
}

const getPlayerStats = (id) => {
  return playersStats.filter(stat => stat.player_id === id)
}

const getPlayersForDate = (date) => {
  const gamesForDate = games.getGamesByDate(date)
  const gameIdArray = Object.keys(gamesForDate)
  // finding the player stats for the specified date
  const playerStatsForDate = gameIdArray.reduce((memo, gameId) => {
    const statsForGame = playersStats.filter(stat => stat.game_id === gameId * 1)
    memo = memo.concat(statsForGame)
    return memo
  }, [])
  return playerStatsForDate.reduce((memo, playerStat) => {
    const player = players.find(player => player.id === playerStat.player_id)
    // if player already exists, don't add again
    if (memo.includes(player)) return memo
    // not sure if i needed to include both player and player stat line
    memo.push(player, playerStat)
    return memo
  }, [])
}


module.exports = {
  getPlayers,
  getPlayer,
  getPlayerStats,
  getPlayersForDate
}
