import React from 'react'
import GameBox from './GameBox'

const FooterPlayerStats = ({ team, player, position, stats}) => {
  return (
    <div className="footer-player">
      <div className="team">
        <span>{team}</span>
      </div>
      <div className="player-stat">
        <span className="player">{player}, {position}</span><br />
        <span className="stat">{stats}</span>
      </div>
    </div>
  )
}

export default FooterPlayerStats
