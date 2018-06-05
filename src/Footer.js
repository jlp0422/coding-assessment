/* eslint-disable */
import React from 'react';
import GameBox from './GameBox';
import GameBoxSelected from './GameBoxSelected';
import { connect } from 'react-redux';
import { selectFooterGame } from './store'

const Footer = ({ games, selectGame }) => {
  const { scores, selectedGame } = games
  if (!scores) return null
  return (
    <div className="footer">
      <div className="arrow">&lt;</div>
      { scores.map(game => (
          game.game_id === selectedGame.game_id ? (
            <GameBoxSelected key={game.game_id} selectedGame={selectedGame} />
          ) : (
          <div onClick={() => selectGame(game.game_id)} key={game.game_id} >
            <GameBox game={game} />
          </div>
          )
        )) }
      <div className="arrow-divider" />
      <div className="arrow">&gt;</div>
    </div>
  )
}

const mapState = ({ footer }) => ({ games: footer })

const mapDispatch = (dispatch) => {
  return {
    selectGame: (id) => dispatch(selectFooterGame(id))
  }
}

export default connect(mapState, mapDispatch)(Footer)
