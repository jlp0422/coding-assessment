import React from 'react';
import GameBox from './GameBox';
import GameBoxSelected from './GameBoxSelected';

const Footer = () => {
  return (
    <div className="footer">
      <div className="arrow">&lt;</div>
      <GameBoxSelected awayTeam="Warriors" homeTeam="Thunder" awayScore="87" homeScore="56" time="7:34 4th" />
      <GameBox awayTeam="CHI" awayScore="45" homeTeam="BOS" homeScore="34" time="3:26 2nd" />
      <GameBox awayTeam="ATL" awayScore="43" homeTeam="MEM" homeScore="39" time="6:15 3rd"  />

      <div className="arrow">&gt;</div>
    </div>
  )
}

export default Footer
