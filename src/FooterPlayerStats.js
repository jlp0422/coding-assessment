import React from 'react'

const FooterPlayerStats = ({ topPerformer }) => {
  const { team, name, points, position, rebounds} = topPerformer
  return (
    <div className="footer-player">
      <div className="team">
        <span>{team}</span>
      </div>
      <div className="player-stat">
        <span className="player">{name}, {position}</span><br />
        <span className="stat">Points: {points}, Rebounds: {rebounds }</span>
      </div>
    </div>
  )
}

export default FooterPlayerStats
