/* eslint-disable */
import React from 'react';
import FooterPlayerStats from './FooterPlayerStats';

const GameBox = ({ game }) => {
  const { away_team, home_team, time_left, quarter } = game
  return (
    <div className="footer-box">
      <div className="footer-box-team-score">
        <div className="footer-box-team">
          {away_team.abbrev}
        </div>
        <div className="footer-box-score">
          {away_team.score}
        </div>
      </div>
      <div className="footer-box-team-score">
        <div className="footer-box-team">
          { home_team.abbrev }
        </div>
        <div className="footer-box-score">
          {home_team.score}
        </div>
      </div>
      <div className="footer-box-time">
        <span>{time_left} {quarter}{quarter === 1 ? 'st' : quarter === 2 ? 'nd' : quarter === 3 ? 'rd' : 'th'}</span>
      </div>
    </div>
  )
}

export default GameBox
