import { useState, useEffect } from 'react';

export default function PlayerPredictions({
  matches,
  thisMonth,
  logedInPlayer,
  logedIn,
  weekNumber,
}) {
  //   const [homePredict, setHomePredict] = useState();

  function getHomePrediction(week, match) {
    return logedIn
      ? logedInPlayer.M1H_Guesses[week - 1][match.MatchNumber - 1]
      : '-';
  }

  function getAwayPrediction(week, match) {
    return logedIn
      ? logedInPlayer.M1A_Guesses[week - 1][match.MatchNumber - 1]
      : '-';
  }

  return (
    <>
      <h1 className="playerPre__heading">Week {weekNumber} Predictions</h1>
      {matches.map((match) =>
        match.Week == weekNumber && match.Month == thisMonth ? (
          <div className="playerPre__match" key={match.id}>
            <p className="playerPre__match__heading">{match.Date} </p>
            <p className="playerPre__match__heading">{match.Comp}</p>
            <table className="playerPre__match__table">
              <thead>
                <tr>
                  <th></th>
                  <th>Yours</th>
                  <th>Actual</th>
                </tr>
              </thead>

              <tbody>
                <tr className="playerPre__match__home">
                  <td className="playerPre__match__home__team">{match.Home}</td>
                  <td
                    className={
                      logedIn
                        ? getHomePrediction(weekNumber, match) ==
                          match.HomeGoals
                          ? 'playerPre__match__home__actual__green'
                          : 'playerPre__match__home__actual__red'
                        : 'playerPre__match__home__actual'
                    }
                  >
                    {logedIn ? getHomePrediction(weekNumber, match) : '-'}
                  </td>
                  <td className="playerPre__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="playerPre__match__away">
                  <td className="playerPre__match__away__team">{match.Away}</td>
                  <td
                    className={
                      logedIn
                        ? getAwayPrediction(weekNumber, match) ==
                          match.AwayGoals
                          ? 'playerPre__match__home__actual__green'
                          : 'playerPre__match__home__actual__red'
                        : 'playerPre__match__home__actual'
                    }
                  >
                    {logedIn ? getAwayPrediction(weekNumber, match) : '-'}
                  </td>
                  <td className="playerPre__match__away__score">
                    {match.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null
      )}
    </>
  );
}
