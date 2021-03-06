/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux';

const Scoreboard = ({ scoreboard }) => {
  const { away_team, home_team, arena, location, quarter, time_left } = scoreboard
  if (!scoreboard.arena) return null;
  return (
    <section className="app__game-chart app__section">
      <div className="app__game-chart__score score">
        <div className="score__team away-team">
          <div className="score__team__name">
            {away_team.location}
            <span className="mascot">
              {away_team.name}
            </span>
          </div>
          <div className="score__team__score">
            {away_team.score}
          </div>
        </div>

        <div className="score__game-info">
          <span className="score__game-info__game-time">
            {time_left} {quarter}{quarter === 1 ? 'st' : quarter === 2 ? 'nd' : quarter === 3 ? 'rd' : 'th'}
          </span>
          <div className="score__game-info__venue">
            {arena}<br />
            {location}
          </div>
        </div>

        <div className="score__team home-team">
          <div className="score__team__score">
            {home_team.score}
          </div>
          <div className="score__team__name">
            {home_team.location}
            <span className="mascot">
              {home_team.name}
            </span>
          </div>
        </div>
      </div>

      <div className="score__last-play">
        last play: tv timeout. go get a snack.
          </div>

      <div className="score__shot-chart">
        <div className="score__shot-chart__team away-team">
          {
            away_team.shooting_stats.map(stat => (
              <div key={stat.title} className="stat">
                <span className="stat__title">
                  {stat.title}
                </span>
                <span className="stat__int">
                  {stat.perc}
                </span>
              </div>
            ))
          }
        </div>

        <div className="score__shot-chart__image">
          <img src="../vendor/assets/shot_chart.png" />
        </div>

        <div className="score__shot-chart__team home-team">
          {
            home_team.shooting_stats.map(stat => (
              <div key={stat.title} className="stat">
                <span className="stat__title">
                  {stat.title}
                </span>
                <span className="stat__int">
                  {stat.perc}
                </span>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

const mapState = ({ scoreboard }) => ({ scoreboard })

export default connect(mapState)(Scoreboard);
