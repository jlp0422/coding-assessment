import React from 'react';
import Nav from './Nav';
import Scoreboard from './Scoreboard';
import PlayByPlay from './PlayByPlay';
import Stats from './Stats';
import YourScoring from './YourScoring';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Nav />
      <section className="app__flex app__wrap">
        <section className="app__column">
          <Scoreboard />
          <div className="app__flex">
            <PlayByPlay awayTeam={ 'GSW' } homeTeam={ 'OKC' } />
            <Stats />
          </div>
        </section>
        <YourScoring />
      </section>
      <Footer />
    </div>
  )
}

export default App;
