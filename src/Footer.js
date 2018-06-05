/* eslint-disable */
import React from 'react';
import GameBox from './GameBox';
import GameBoxSelected from './GameBoxSelected';
import { connect } from 'react-redux';
import { selectFooterGame } from './store'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedGame: {}
    }
    this.onChangeGame = this.onChangeGame.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { scores } = nextProps.games
    this.setState({ selectedGame: scores[0] })
  }

  onChangeGame(id) {
    const { scores } = this.props.games
    const selectedGame = scores.find(game => game.game_id === id)
    this.setState({ selectedGame })
  }

  render() {
    const { scores } = this.props.games
    const { selectedGame } = this.state
    const { onChangeGame } = this
    if (!scores) return null
    return (
      <div className="footer">
        <div className="arrow">&lt;</div>
        { scores.map(game => (
            game.game_id === selectedGame.game_id ? (
              <GameBoxSelected key={game.game_id} selectedGame={selectedGame} />
            ) : (
            <div onClick={() => onChangeGame(game.game_id)} key={game.game_id} >
              <GameBox game={game} />
            </div>
            )
          )) }
        <div className="arrow-divider" />
        <div className="arrow">&gt;</div>
      </div>
    )
  }
}

const mapState = ({ footer }) => ({ games: footer })

const mapDispatch = (dispatch) => {
  return {
    selectGame: (game) => dispatch(selectFooterGame(game))
  }
}

export default connect(mapState, mapDispatch)(Footer)
