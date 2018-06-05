/* eslint-disable */
import axios from 'axios';

const GET_NAV_ELEMENTS = 'GET_NAV_ELEMENTS'

const getNav = (nav) => ({ type: GET_NAV_ELEMENTS, nav });

export const getNavElements = () => {
  return (dispatch) => {
    return axios.get('https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/nav_elements')
      .then(res => res.data)
      .then(nav => dispatch(getNav(nav)))
      .catch(err => console.error(err))
  }
}

const navReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NAV_ELEMENTS:
      state = action.nav
      break;
  }
  return state
}

export default navReducer;
