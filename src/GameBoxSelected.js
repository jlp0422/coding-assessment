import React from 'react';
import FooterPlayerStats from './FooterPlayerStats';
import Footer from './Footer';

const GameBoxSelected = ({awayTeam, awayScore, homeTeam, homeScore, time }) => {
  return (
    <div className="big-game-box">
      <div className="footer-box-select">
        <div className="footer-box-team-score">
          <div className="footer-box-team">
            {awayTeam}
          </div>
          <div className="footer-box-score">
            {awayScore}
          </div>
        </div>
        <div className="footer-box-team-score">
          <div className="footer-box-team">
            {homeTeam}
          </div>
          <div className="footer-box-score">
            { homeScore }
          </div>
        </div>
        <div className="footer-box-time">
          <span>{ time }</span>
        </div>
      </div>
      <FooterPlayerStats team="GSW" player="S. Curry" position="PG" stats="26 points, 5 rebounds" />
      <FooterPlayerStats team="OKC" player="K. Durant" position="SF" stats="26 points, 5 rebounds" />
    </div>
  )
}

export default GameBoxSelected
