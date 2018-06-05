/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

const PlayByPlay = (props) => {
  const { plays, homeTeam, awayTeam } = props.plays
  if (!plays || !homeTeam || !awayTeam) return null
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

const mapState = ({ plays }) => ({ plays })

export default connect(mapState)(PlayByPlay);
