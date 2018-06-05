/* eslint-disable */
import React from 'react';
import GameBox from './GameBox';
import GameBoxSelected from './GameBoxSelected';
import { connect } from 'react-redux';

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      scores: [],
      selectedGame: {}
    }
    this.onChangeGame = this.onChangeGame.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { scores } = nextProps
    this.setState({ scores, selectedGame: scores[0] })
  }

  onChangeGame(id) {
    const { scores } = this.state
    const selectedGame = scores.find(game => game.game_id === id)
    this.setState({ selectedGame })
  }

  render() {
    const { scores, selectedGame } = this.state
    const {onChangeGame} = this
    const otherGames = scores.filter(score => score.game_id !== selectedGame.game_id)
    return (
      <div className="footer">
        <div className="arrow">&lt;</div>
        {
          scores.map(game => (
            game.game_id === selectedGame.game_id ? (
              <GameBoxSelected key={game.game_id} selectedGame={selectedGame} />
            ) : (
            <div onClick={() => onChangeGame(game.game_id)} key={game.game_id} >
              <GameBox game={game} />
            </div>
            )
          ))
        }
        <div className="arrow-divider" />
        <div className="arrow">&gt;</div>
      </div>
    )
  }
}

const mapState = ({ footer }) => ({ scores: footer })

export default connect(mapState)(Footer)
