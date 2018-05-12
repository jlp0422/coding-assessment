import React from 'react';

const PlayByPlay = () => {
  return (
    <section className="app__play-by-play app__section split-flex">
      <div className="app__section__title">
        Play By Play
							</div>
      <div>
        <div className="app__play-by-play__indiv play">
          <img src="../vendor/assets/steph_curry.png" className="play__headshot" />
          <div className="play__desc">
            <span>
              8:43 4th
										</span>
            <p>
              Stephen Curry makes 13-foot jumper. Assisted by Draymond Green.
										</p>
          </div>

          <div className="play__score">
            96-81, GS
									</div>
        </div>
        <div className="app__play-by-play__indiv play">
          <img src="../vendor/assets/steph_curry.png" className="play__headshot" />
          <div className="play__desc">
            <span>
              7:43 4th
										</span>
            <p>
              Kevin Durant misses 2-foot layup. Rebounded by Andrew Bogut.
										</p>
          </div>

          <div className="play__score">
            98-81, GS
									</div>
        </div>
        <div className="app__play-by-play__indiv play">
          <img src="../vendor/assets/steph_curry.png" className="play__headshot" />
          <div className="play__desc">
            <span>
              5:58 4th
										</span>
            <p>
              Klay Thompson misses 24-foot jumper. Rebounded by Serge Ibaka.
										</p>
          </div>

          <div className="play__score">
            96-81, GS
									</div>
        </div>
        <div className="app__play-by-play__indiv play">
          <img src="../vendor/assets/steph_curry.png" className="play__headshot" />
          <div className="play__desc">
            <span>
              4:42 4th
										</span>
            <p>
              Kevin Durant turnover.
										</p>
          </div>

          <div className="play__score">
            96-81, GS
									</div>
        </div>
        <div className="app__play-by-play__indiv play">
          <img src="../vendor/assets/steph_curry.png" className="play__headshot" />
          <div className="play__desc">
            <span>
              4:25 4th
										</span>
            <p>
              Stephen Curry makes free throw.
										</p>
          </div>

          <div className="play__score">
            96-81, GS
									</div>
        </div>
      </div>
    </section>
  )
}

export default PlayByPlay;
