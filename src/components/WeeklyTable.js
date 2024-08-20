import React, { useState, useEffect } from 'react';

export default function WeeklyTable({ players, matches, thisMonth, gameWeek }) {
  let position = 1;
  let lastPlayed = '';
  let playersPositions = '';
  let gamesPlayed = 0;
  let numplayers = 0;

  function allScores() {
    players.map((guess) => {
      let outcomePoints = 0;
      let goalPoints = 0;
      let resultPoints = 0;
      numplayers++;

      matches.map((played) => {
        if (
          played.Played &&
          thisMonth == played.Month &&
          gameWeek == played.Week
        ) {
          lastPlayed = `${played.Home} vs ${played.Away}`;
          gamesPlayed++;
          if (
            guess.M1H_Guesses[played.Week - 1][played.MatchNumber - 1] ==
            played.HomeGoals
          ) {
            goalPoints++;
          }
          if (
            guess.M1A_Guesses[played.Week - 1][played.MatchNumber - 1] ==
            played.AwayGoals
          ) {
            goalPoints++;
          }
          if (
            guess.M1H_Guesses[played.Week - 1][played.MatchNumber - 1] ==
              played.HomeGoals &&
            guess.M1A_Guesses[played.Week - 1][played.MatchNumber - 1] ==
              played.AwayGoals
          ) {
            resultPoints++;
            resultPoints++;
          }
          if (
            played.HomeGoals == played.AwayGoals &&
            guess.M1H_Guesses[played.Week - 1][played.MatchNumber - 1] ==
              guess.M1A_Guesses[played.Week - 1][played.MatchNumber - 1]
          ) {
            outcomePoints++;
          }
          if (
            played.HomeGoals > played.AwayGoals &&
            guess.M1H_Guesses[played.Week - 1][played.MatchNumber - 1] >
              guess.M1A_Guesses[played.Week - 1][played.MatchNumber - 1]
          ) {
            outcomePoints++;
          }
          if (
            played.HomeGoals < played.AwayGoals &&
            guess.M1H_Guesses[played.Week - 1][played.MatchNumber - 1] <
              guess.M1A_Guesses[played.Week - 1][played.MatchNumber - 1]
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
    });

    playersPositions = [...players].sort((a, b) =>
      a.total > b.total ? -1 : 1
    );
  }

  allScores();

  return (
    <>
      <div className="section-leauge">
        <div className="section-leauge__heading">
          <h1>August Week {gameWeek} League</h1>
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
                  <td>
                    {position == 2 && gamesPlayed / numplayers == 8 ? '🏆' : ''}
                    {standing.Player_Id}
                    {position == 2 && gamesPlayed / numplayers == 8 ? '🏆' : ''}
                  </td>
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
    </>
  );
}
