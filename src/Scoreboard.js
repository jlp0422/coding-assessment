import React from 'react'

const Scoreboard = () => {
  return (
    <section className="app__game-chart app__section">
      <div className="app__game-chart__score score">
        <div className="score__team away-team">
          <div className="score__team__name">
            Golden State
									<span className="mascot">
              Warriors
									</span>
          </div>
          <div className="score__team__score">
            87
								</div>
        </div>

        <div className="score__game-info">
          <span className="score__game-info__game-time">
            7:34 4th
								</span>
          <div className="score__game-info__venue">
            Oracle Arena<br />
            Oakland, CA
								</div>
        </div>

        <div className="score__team home-team">
          <div className="score__team__score">
            75
								</div>
          <div className="score__team__name">
            Oklahoma City
									<span className="mascot">
              Thunder
									</span>
          </div>
        </div>
      </div>

      <div className="score__last-play">
        last play: tv timeout. go get a snack.
						</div>

      <div className="score__shot-chart">
        <div className="score__shot-chart__team away-team">
          <div className="stat">
            <span className="stat__title">
              FG%
									</span>
            <span className="stat__int">
              46.6%
									</span>
          </div>
          <div className="stat">
            <span className="stat__title">
              3P%
									</span>
            <span className="stat__int">
              42.1%
									</span>
          </div>
          <div className="stat">
            <span className="stat__title">
              FT%
									</span>
            <span className="stat__int">
              60.0%
									</span>
          </div>
        </div>

        <div className="score__shot-chart__image">
          <img src="../vendor/assets/shot_chart.png" />
        </div>

        <div className="score__shot-chart__team home-team">
          <div className="stat">
            <span className="stat__title">
              FG%
									</span>
            <span className="stat__int">
              46.6%
									</span>
          </div>
          <div className="stat">
            <span className="stat__title">
              3P%
									</span>
            <span className="stat__int">
              42.1%
									</span>
          </div>
          <div className="stat">
            <span className="stat__title">
              FT%
									</span>
            <span className="stat__int">
              60.0%
									</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Scoreboard
