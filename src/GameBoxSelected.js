/* eslint-disable */
import React from 'react';
import FooterPlayerStats from './FooterPlayerStats';
import Footer from './Footer';

const GameBoxSelected = ({selectedGame}) => {
  if (!selectedGame.quarter) return null
  const { away_team, home_team, time_left, quarter, top_performers } = selectedGame
  return (
    <div className="big-game-box">
      <div className="footer-box-select">
        <div className="footer-box-team-score">
          <div className="footer-box-team">
            {away_team.name}
          </div>
          <div className="footer-box-score">
            {away_team.score}
          </div>
        </div>
        <div className="footer-box-team-score">
          <div className="footer-box-team">
            {home_team.name}
          </div>
          <div className="footer-box-score">
            {home_team.score}
          </div>
        </div>
        <div className="footer-box-time">
          <span>{time_left} {quarter}{quarter === 1 ? 'st' : quarter === 2 ? 'nd' : quarter === '3' ? 'rd' : 'th'}</span>
        </div>
      </div>
      <FooterPlayerStats topPerformer={ top_performers[1]} />
      <FooterPlayerStats topPerformer={ top_performers[0]}/>
    </div>
  )
}

export default GameBoxSelected
