/* eslint-disable */
const games = [
  { id: 1, home_team_id: 1, away_team_id: 2, date: '1/1/2016' },
  { id: 2, home_team_id: 3, away_team_id: 4, date: '1/1/2016' },
  { id: 3, home_team_id: 5, away_team_id: 6, date: '1/1/2016' },
  { id: 4, home_team_id: 2, away_team_id: 3, date: '1/2/2016' },
  { id: 5, home_team_id: 1, away_team_id: 4, date: '1/3/2016' },
]

const gameStates = [
  { id: 1, game_id: 1, home_team_score: 78, away_team_score: 77, broadcast: 'ESPN', quarter: 4, time_left_in_quarter: '10: 20', game_status: 'IN_PROGRESS' },
  { id: 2, game_id: 2, home_team_score: 10, away_team_score: 20, broadcast: 'TNT', quarter: 2, time_left_in_quarter: '1: 00', game_status: 'IN_PROGRESS' },
  { id: 3, game_id: 3, home_team_score: 100, away_team_score: 99, broadcast: 'TNT', quarter: 4, time_left_in_quarter: '0: 00', game_status: 'FINAL' },
  { id: 4, game_id: 4, home_team_score: 20, away_team_score: 30, broadcast: 'ROOT', quarter: 4, time_left_in_quarter: '10: 20', game_status: 'IN_PROGRESS' },
  { id: 5, game_id: 5, home_team_score: 120, away_team_score: 100, broadcast: 'ESPN3', quarter: 4, time_left_in_quarter: '0: 00', game_status: 'FINAL' },
]

const allGamesAndStates = games.reduce((memo, game) => {
  // used an object since it would be easier to look up a specific game id
  // also if game already existed, wouldn't add it again
  const singleGameState = gameStates.find(gState => gState.id === game.id)
  if (!memo[game.id]) memo[game.id] = { game, singleGameState }
  return memo
}, {})

const convertDate = (dateStr) => {
  const dateMonth = dateStr.slice(0, 2)
  const dateDay = dateStr.slice(2, 4)
  const dateYear = dateStr.slice(-4)
  return new Date(`${dateMonth}/${dateDay}/${dateYear}`)
}

const getGames = () => {
  return allGamesAndStates
}

const getGame = (id) => {
  return allGamesAndStates[id]
}

const getGamesByDate = (date) => {
  const gameDate = convertDate(date)
  const gamesForDate = games.filter(game => new Date(game.date).getTime() === gameDate.getTime())
  return gamesForDate.reduce((memo, game) => {
    memo[game.id] = getGame(game.id)
    return memo
  }, {})
}

module.exports = {
  getGames,
  getGame,
  getGamesByDate
}
