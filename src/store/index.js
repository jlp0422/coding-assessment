import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import navReducer from './navReducer';
import footerReducer from './footerReducer';
import playByPlayReducer from './playByPlayReducer';
import scoreboardReducer from './scoreboardReducer';

const reducer = combineReducers({
  nav: navReducer,
  footer: footerReducer,
  plays: playByPlayReducer,
  scoreboard: scoreboardReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export * from './navReducer';
export * from './footerReducer';
export * from './playByPlayReducer';
export * from './scoreboardReducer';
