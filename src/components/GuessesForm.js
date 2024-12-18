import WeekGuess from './WeekGuess';
import CupGuess from './CupGuess';
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
            Make Jan Predictions Here - Deadline 30/12/2024
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
            Bonus (Scottish) Bank Holoday week! All the games from the SPL, Plus
            Breford v Arsenal in NYD and a wild card from Italy
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
            Even it up with more games form England. Livepool v Man U probably
            the highlight. Wild Card from Portugal.
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
            Dortmund v Leverkusen to kick things off and then FA cup games! Good
            Luck!
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
            This week is the Scottish Cup, again good luck. Wild Card is in
            Italy again.
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

        <div className="guess-page__week">
          <h1>Week Five Games</h1>
          <p>
            A normal game week to finish off the month. Wild card from
            Austrailla!
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
        </div>

        {/* <div className="guess-page__week">
          <h1>The Cup</h1>
          <p>
            Below are all the scores for the cup. Make a guess for each game.
            You can see your draw in the Cup section once the cup starts. If you
            beat your apponent you go to the next round. Fingers crossed you
            need all your scorces as that means your in the final!
          </p>
          <div className="guess-page__week_block">
            <CupGuess
              matches={matches}
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
