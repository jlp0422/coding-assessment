import React from 'react';
import FooterPlayerStats from './FooterPlayerStats';

const GameBox = ({awayTeam, awayScore, homeTeam, homeScore, time }) => {
  return (
    <div className="footer-box">
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
          { homeTeam }
        </div>
        <div className="footer-box-score">
          {homeScore}
        </div>
      </div>
      <div className="footer-box-time">
        <span>{time}</span>
      </div>
    </div>
  )
}

export default GameBox
