import WeekGuess from './WeekGuess';
import Login from './Login';
import React, { useState, useEffect } from 'react';

export default function GuessesForm({
  matches,
  players,
  logedIn,
  setLogedIn,
  logedInPlayer,
  setLogedInPlayer,
  logedInCode,
  setLogedInCode,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Login Submitted');
  }

  return (
    <>
      <div className="guess-page">
        <div className="guess-page__info">
          <h1 className="guess-page__info__heading">
            Make Septembers Predictions Here - Deadline 02/09/2024
          </h1>
          <p className="guess-page__info__blurb">
            Login with your surname and code. (Or your predictions will not be
            logged).
            <br /> Next fill in your predictions and submit. You can change your
            mind as often as you like before the deadline.
          </p>
        </div>

        <Login
          players={players}
          logedIn={logedIn}
          setLogedIn={setLogedIn}
          setLogedInPlayer={setLogedInPlayer}
          logedInPlayer={logedInPlayer}
          setLogedInCode={setLogedInCode}
        />

        <div className="guess-page__week">
          <h1>Week One Games</h1>
          <p>
            Its an International week! So we have 8 games from the Nations
            League covering Thursday to Sunday.
          </p>
          <div className="guess-page__week_block">
            <WeekGuess
              matches={matches}
              players={players}
              selectedWeek={1}
              logedIn={logedIn}
              logedInPlayer={logedInPlayer}
              logedInCode={logedInCode}
            />
          </div>
        </div>

        <div className="guess-page__week">
          <h1>Week Two Games</h1>
          <p>
            Back to normal this week. Fife and North London Derbies and the wild
            card from Austria.
          </p>

          <div className="guess-page__week_block">
            <WeekGuess
              matches={matches}
              players={players}
              selectedWeek={2}
              logedIn={logedIn}
              logedInPlayer={logedInPlayer}
              logedInCode={logedInCode}
            />
          </div>
        </div>

        <div className="guess-page__week">
          <h1>Week Three Games</h1>
          <p>
            Scottish League cup this week and the games not anouncced yet so no
            SPL games. Milan Derby is the wild card, Man City vs Arsenal and the
            big one East Fife taking on Peterhead in Leauge 2.
          </p>

          <div className="guess-page__week_block">
            <WeekGuess
              matches={matches}
              players={players}
              selectedWeek={3}
              logedIn={logedIn}
              logedInPlayer={logedInPlayer}
              logedInCode={logedInCode}
            />
          </div>
        </div>

        <div className="guess-page__week">
          <h1>Week Four Games</h1>
          <p>
            EPL and SPL to see out the month. Also a massive game in Germany
            takes the wild card slot.
          </p>

          <div className="guess-page__week_block">
            <WeekGuess
              matches={matches}
              players={players}
              selectedWeek={4}
              logedIn={logedIn}
              logedInPlayer={logedInPlayer}
              logedInCode={logedInCode}
            />
          </div>
        </div>
        {/* 
        <div className="guess-page__week">
          <h1>Week Five Games</h1>
          <p>
            First Old Firm game of the year this week. Also the Wild Card has
            last years unbeaten German Champs.
          </p>

          <div className="guess-page__week_block">
            <WeekGuess
              matches={matches}
              players={players}
              selectedWeek={5}
              logedIn={logedIn}
              logedInPlayer={logedInPlayer}
              logedInCode={logedInCode}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
