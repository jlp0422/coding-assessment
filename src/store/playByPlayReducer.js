/* eslint-disable */
import axios from 'axios';

const GET_PLAYS = 'GET_PLAYS';
const GET_HOME_TEAM = 'GET_HOME_TEAM';
const GET_AWAY_TEAM = 'GET_AWAY_TEAM';

const getPlays = (plays) => ({ type: GET_PLAYS, plays })
const getHomeTeam = (team) => ({ type: GET_HOME_TEAM, team })
const getAwayTeam = (team) => ({ type: GET_AWAY_TEAM, team })

export const getPlayByPlay = () => {
  return (dispatch) => {
      axios.get('https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/db')
        .then(res => res.data)
        .then(info => {
          dispatch(getPlays(info.plays))
          dispatch(getHomeTeam(info.game_stats.home_team))
          dispatch(getAwayTeam(info.game_stats.away_team))
        })
        .catch(err => console.error(err))
  }
}

const playByPlayReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLAYS:
      return Object.assign({}, state, { plays: [ ...action.plays ]} )

    case GET_HOME_TEAM:
      return Object.assign({}, state, { homeTeam: action.team })

    case GET_AWAY_TEAM:
      return Object.assign({}, state, { awayTeam: action.team })
  }
  return state;
}

export default playByPlayReducer;
