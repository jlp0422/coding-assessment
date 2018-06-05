/* eslint-disable */
import axios from 'axios';

const GET_SCOREBOARD = 'GET_SCOREBOARD';

const getScoreboard = (scoreboard) => ({ type: GET_SCOREBOARD, scoreboard })

export const getScoreboardStats = () => {
  return (dispatch) => {
    axios.get('https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/game_stats')
      .then(res => res.data)
      .then(game_stats => dispatch(getScoreboard(game_stats)))
      .catch(err => console.error(err))
  }
}

const scoreboardReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SCOREBOARD:
      return Object.assign({}, state, action.scoreboard)
  }
  return state
}

export default scoreboardReducer;
