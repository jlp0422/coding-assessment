/* eslint-disable */
import React from 'react';
import GameBox from './GameBox';
import GameBoxSelected from './GameBoxSelected';
import axios from 'axios'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      scores: [],
      selectedGame: {}
    }
    this.onChangeGame = this.onChangeGame.bind(this)
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/footer_scoreboard')
      .then( res => res.data)
      .then( scores => this.setState({ scores, selectedGame: scores[0] }))
  }

  onChangeGame(id) {
    const { scores } = this.state
    const selectedGame = scores.find(game => game.game_id === id)
    this.setState({ selectedGame })
  }

  render() {
    const { scores, selectedGame } = this.state
    const {onChangeGame} = this
    return (
      <_Footer {...this.props} scores={ scores } onChangeGame={ onChangeGame } selectedGame={ selectedGame } />
    )
  }
}

const _Footer = ({ scores, selectedGame, onChangeGame }) => {
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

export default Footer
