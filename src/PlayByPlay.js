/* eslint-disable */
import React from 'react';
import axios from 'axios';

class PlayByPlay extends React.Component {
  constructor() {
    super()
    this.state = {
      plays: [],
      homeTeam: {},
      awayTeam: {}
    }
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/db')
      .then( res => res.data)
      .then( info => {
        this.setState({ plays: info.plays, homeTeam: info.game_stats.home_team, awayTeam: info.game_stats.away_team })
      })
  }

  render() {
    // console.log(this.state)
    const { plays, homeTeam, awayTeam } = this.state
    return (
      <section className="app__play-by-play app__section split-flex">
        <div className="app__section__title">
          Play By Play
			</div>
        <div>
          { plays.map(play => (
              <div key={play.id} className="app__play-by-play__indiv play">
                <img src={`../vendor/assets/${play.scoring_player}.png`} className="play__headshot" />
                <div className="play__desc">
                  <span>{play.time_left} {play.quarter}th</span>
                  <p>{play.description}</p>
                </div>
                <div className="play__score">
                  {play.home_score > play.away_score ? (
                    `${play.home_score}-${play.away_score}, ${homeTeam.abbrev}`
                  ) : (
                      `${play.away_score}-${play.home_score}, ${awayTeam.abbrev}`
                    )
                  }
                </div>
              </div>
            )) }
        </div>
      </section>
    )
  }
}

export default PlayByPlay;
