/* eslint-disable */
import React from 'react';
import Nav from './Nav';
import Scoreboard from './Scoreboard';
import PlayByPlay from './PlayByPlay';
import Stats from './Stats';
import YourScoring from './YourScoring';
import Footer from './Footer';
import { connect } from 'react-redux';
import {
  getNavElements,
  getFooterScores,
  getPlayByPlay,
  getScoreboardStats
} from './store'

class App extends React.Component {

  componentDidMount() {
    const { getNav, getScores, getPlays, getScoreboard } = this.props
    getNav()
    getScores()
    getPlays()
    getScoreboard()
  }

  render() {
    return (
      <div>
        <Nav />
        <section className="app__flex app__wrap">
          <section className="app__column">
            <Scoreboard />
            <div className="app__flex">
              <PlayByPlay />
              <Stats />
            </div>
          </section>
          <YourScoring />
        </section>
        <Footer />
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    getNav: () => dispatch(getNavElements()),
    getScores: () => dispatch(getFooterScores()),
    getPlays: () => dispatch(getPlayByPlay()),
    getScoreboard: () => dispatch(getScoreboardStats())
  }
}

export default connect(null, mapDispatch)(App);
