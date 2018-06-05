import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import navReducer from './navReducer';
import footerReducer from './footerReducer';
import playByPlayReducer from './playByPlayReducer';

const reducer = combineReducers({
  nav: navReducer,
  footer: footerReducer,
  plays: playByPlayReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
