import React from 'react';

const YourScoring = () => {
  return (
    <section className="app__sidebar">
      <section className="app__your-scoring app__section">
        <div className="app__section__title">
          Your Scoring
        </div>
        <div>
          <div className="app__play-by-play__indiv play">
          <img src={`../vendor/assets/kevin_durant.png`} className="play__headshot" />
            <div className="play__desc">
              <p>Kevin Durant</p>
              <p>26 points, 5 rebounds</p>
            </div>
            <div className="play__score">
              44.5 FPTS
            </div>
          </div>
          <div className="app__play-by-play__indiv play">
            <img src={`../vendor/assets/steph_curry.png`} className="play__headshot" />
            <div className="play__desc">
              <p>Steph Curry</p>
              <p>36 points, 5 assists</p>
            </div>
            <div className="play__score">
              65.5 FPTS
            </div>
          </div>
          <div className="app__play-by-play__indiv play">
            <img src={`../vendor/assets/klay_thompson.png`} className="play__headshot" />
            <div className="play__desc">
              <p>Klay Thompson</p>
              <p>16 points, 2 assists</p>
            </div>
            <div className="play__score">
              28.8 FPTS
            </div>
          </div>
        </div>

      </section>
    </section>
  )
}

export default YourScoring
