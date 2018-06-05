import axios from 'axios';

const GET_FOOTER_SCORES = 'GET_FOOTER_SCORES';

const getScores = (scores) => ({ type: GET_FOOTER_SCORES, scores })

export const getFooterScores = () => {
  return (dispatch) => {
    return axios.get('https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/footer_scoreboard')
      .then(res => res.data)
      .then(scores => dispatch(getScores(scores)))
      .catch(err => console.error(err))
  }
}

const footerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FOOTER_SCORES:
      state = action.scores
  }
  return state;
}

export default footerReducer
