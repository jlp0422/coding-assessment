/* eslint-disable */
import axios from 'axios';

// not using SELECT FOOTER GAME

const GET_FOOTER_SCORES = 'GET_FOOTER_SCORES';
const SELECT_FOOTER_GAME = 'SELECT_FOOTER_GAME';

const getScores = (scores) => ({ type: GET_FOOTER_SCORES, scores })
const selectGame = (id) => ({ type: SELECT_FOOTER_GAME, id })

export const getFooterScores = () => {
  return (dispatch) => {
    return axios.get('https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/footer_scoreboard')
      .then(res => res.data)
      .then(scores => dispatch(getScores(scores)))
      .catch(err => console.error(err))
  }
}

export const selectFooterGame = (id) => {
  return (dispatch) => dispatch(selectGame(id))
}

const footerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FOOTER_SCORES:
      return Object.assign({}, state, {scores: [...action.scores ], selectedGame: action.scores[0] })

    case SELECT_FOOTER_GAME:
      const selectedGame = state.scores.find(game => game.game_id === action.id)
      return Object.assign({}, state, { selectedGame })
  }
  return state;
}

export default footerReducer
