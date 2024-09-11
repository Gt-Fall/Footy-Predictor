import React, { useState, useEffect } from "react";
import supabase from "./supabase";

export default function MonthlyTable({ players, matches, thisMonth }) {
  let position = 1;
  let overallPosition = 1;
  let lastPlayed = "";
  let playersPositions = "";
  let overallPositions = "";
  let updateTotalScores = false;

  function allScores() {
    players.map((guess) => {
      let outcomePoints = 0;
      let goalPoints = 0;
      let resultPoints = 0;
      //   guess.homeGuesses = guess.homeGuesses.replace(/[\[\]']/g, '');
      //   guess.awayGuesses = guess.awayGuesses.replace(/[\[\]']/g, '');
      //   guess.homeGuesses = guess.homeGuesses.split(',');
      //   guess.awayGuesses = guess.awayGuesses.split(',');
      //console.log('this is home guesses for testing', guess.homeGuesses);

      matches.map((played) => {
        if (played.Played && thisMonth == played.Month) {
          lastPlayed = `${played.Home} vs ${played.Away}`;
          if (
            guess.M2H_Guesses[played.Week - 1][played.MatchNumber - 1] ==
            played.HomeGoals
          ) {
            goalPoints++;
          }
          if (
            guess.M2A_Guesses[played.Week - 1][played.MatchNumber - 1] ==
            played.AwayGoals
          ) {
            goalPoints++;
          }
          if (
            guess.M2H_Guesses[played.Week - 1][played.MatchNumber - 1] ==
              played.HomeGoals &&
            guess.M2A_Guesses[played.Week - 1][played.MatchNumber - 1] ==
              played.AwayGoals
          ) {
            resultPoints++;
            resultPoints++;
          }
          if (
            played.HomeGoals == played.AwayGoals &&
            guess.M2H_Guesses[played.Week - 1][played.MatchNumber - 1] ==
              guess.M2A_Guesses[played.Week - 1][played.MatchNumber - 1]
          ) {
            outcomePoints++;
          }
          if (
            played.HomeGoals > played.AwayGoals &&
            guess.M2H_Guesses[played.Week - 1][played.MatchNumber - 1] >
              guess.M2A_Guesses[played.Week - 1][played.MatchNumber - 1]
          ) {
            outcomePoints++;
          }
          if (
            played.HomeGoals < played.AwayGoals &&
            guess.M2H_Guesses[played.Week - 1][played.MatchNumber - 1] <
              guess.M2A_Guesses[played.Week - 1][played.MatchNumber - 1]
          ) {
            outcomePoints++;
          }
        }
      });

      let total = outcomePoints + goalPoints + resultPoints;
      guess.outcomePoints = outcomePoints;
      guess.goalPoints = goalPoints;
      guess.resultPoints = resultPoints;
      guess.total = total;
      guess.overallTotal = total + guess.Aug_Total;
    });

    playersPositions = [...players].sort((a, b) =>
      a.total > b.total ? -1 : 1
    );

    overallPositions = [...players].sort((a, b) =>
      a.overallTotal > b.overallTotal ? -1 : 1
    );

    async function sendScoreTotals() {
      if (updateTotalScores) {
        playersPositions.map(async (playersPositions) => {
          const { data, error } = await supabase
            .from("Players")
            .update({
              Sep_Total: playersPositions.total,
              SepOP: playersPositions.outcomePoints,
              SepGP: playersPositions.goalPoints,
              SepRP: playersPositions.resultPoints,
            })
            .eq("Player_Id", playersPositions.Player_Id)
            .select();
        });
      }
    }
    sendScoreTotals();
  }

  allScores();

  return (
    <>
      <div className="section-leauge">
        <div className="section-leauge__heading">
          <h1>The September League</h1>
        </div>
        <div className="section-leauge__info section-leauge__info-overall">
          <p>
            Just a reminder of the scoring: <br />
            + 1 point for the correct match outcome (winning team/draw) <br />
            + 1 point for each teams match goals predicted correctly <br />+ 2
            points if you get the scoreline correct
          </p>
          <p className="section-leauge__info-overall__last-update">
            Last updated after: {lastPlayed}
          </p>
        </div>
        <div className="section-leauge__table">
          <table className="section-leauge__table__contents">
            <thead className="section-leauge__table__head">
              <tr>
                <th>Position</th>
                <th>Player</th>
                <th>Outcome Points</th>
                <th>Goal Points</th>
                <th>Result Points</th>
                <th>Total Points</th>
              </tr>
            </thead>
            {playersPositions.map((standing) => (
              <tbody className="section-leauge__body" key={standing.Player_Id}>
                <tr>
                  <td>{position++}</td>
                  <td>{standing.Player_Id}</td>
                  <td>{standing.outcomePoints}</td>
                  <td> {standing.goalPoints}</td>
                  <td>{standing.resultPoints}</td>
                  <td>{standing.total}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>

      <div className="section-leauge">
        <div className="section-leauge__heading">
          <h1>Overall League</h1>
        </div>
        <div className="section-leauge__info section-leauge__info-overall">
          <p>
            Just a reminder of the scoring: <br />
            + 1 point for the correct match outcome (winning team/draw) <br />
            + 1 point for each teams match goals predicted correctly <br />+ 2
            points if you get the scoreline correct
          </p>
          <p className="section-leauge__info-overall__last-update">
            Last updated after: {lastPlayed}
          </p>
        </div>
        <div className="section-leauge__table">
          <table className="section-leauge__table__contents">
            <thead className="section-leauge__table__head">
              <tr>
                <th>Position</th>
                <th>Player</th>
                <th>Outcome Points</th>
                <th>Goal Points</th>
                <th>Result Points</th>
                <th>Total Points</th>
              </tr>
            </thead>
            {overallPositions.map((standing) => (
              <tbody className="section-leauge__body" key={standing.Player_Id}>
                <tr>
                  <td>{overallPosition++}</td>
                  <td>{standing.Player_Id}</td>
                  <td>{standing.outcomePoints + standing.AugOP}</td>
                  <td> {standing.goalPoints + standing.AugGP}</td>
                  <td>{standing.resultPoints + standing.AugRP}</td>
                  <td>{standing.total + standing.Aug_Total}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

//   async function updatePlayerPoints(
//     outcomePoints,
//     goalPoints,
//     resultPoints,
//     player
//   ) {
//     const { data, error } = await supabase
//       .from('Predictions')
//       .update({
//         outcomePoints: outcomePoints,
//         goalPoints: goalPoints,
//         resultPoints: resultPoints,
//       })
//       .eq('player', player);
//     //console.log('this has run');
//   }
//   updatePlayerPoints();

//   console.log(
//     'comparision part 1 -',
//     guess.homeGuesses.split(',')[played.matchNumber - 1] * 1,
//     'this is match ',
//     played.matchNumber,
//     'and player - ',
//     guess.player
//   );
//   console.log(guess.homeGuesses.split(','));
//   console.log(guess.homeGuesses.split(',')[played.matchNumber - 1] * 1);
//   console.log(typeof (guess.homeGuesses[played.matchNumber - 1] * 1));
//   console.log('comparision part 2 -', played.homeResult);
