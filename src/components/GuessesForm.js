import WeekGuess from "./WeekGuess";
import Login from "./Login";
import React, { useState, useEffect } from "react";

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
    console.log("Login Submitted");
  }

  return (
    <>
      <div className="guess-page">
        <div className="guess-page__info">
          <h1 className="guess-page__info__heading">
            Make October Predictions Here - Deadline 01/10/2024
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
            Games from accross England and Scotland this week, Wildcard from
            Italy this week.
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
            Interationals again! This time spread over 6 days to give the boring
            old gap in domestic football some spice!
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
            Back to domestic fooball and a big EPL game as Liverpool take on
            Chelsea. Wild card is coming from Greece this week (good Luck with
            that!)
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
            A big game from each country this week. Hibs v Hearts, Arsenal v
            Liverpool and Barca v Real.
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
