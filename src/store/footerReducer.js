/* eslint-disable */
import axios from 'axios';

// not using SELECT FOOTER GAME

const GET_FOOTER_SCORES = 'GET_FOOTER_SCORES';
const SELECT_FOOTER_GAME = 'SELECT_FOOTER_GAME';

const getScores = (scores) => ({ type: GET_FOOTER_SCORES, scores })
const selectGame = (game) => ({ type: SELECT_FOOTER_GAME, game })

export const getFooterScores = () => {
  return (dispatch) => {
    return axios.get('https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/footer_scoreboard')
      .then(res => res.data)
      .then(scores => dispatch(getScores(scores)))
      .catch(err => console.error(err))
  }
}

export const selectFooterGame = (game) => {
  return (dispatch) => dispatch(selectGame(game))
}

const footerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FOOTER_SCORES:
      return Object.assign({}, state, { scores: [ ...action.scores ]})

    case SELECT_FOOTER_GAME:
      return Object.assign({}, state, { selectedGame: action.game })
  }
  return state;
}

export default footerReducer
