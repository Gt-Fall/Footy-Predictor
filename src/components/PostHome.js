import { useState, useEffect, useLayoutEffect } from "react";

export default function PostHome({ matches, randomP, randomPWeek }) {
  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState([]);
  const [result3, setResult3] = useState([]);
  const [fixture1, setFixture1] = useState([]);
  const [fixture2, setFixture2] = useState([]);
  const [fixture3, setFixture3] = useState([]);

  // let result1 = [];
  //   let result2 = [];
  //   let result3 = [];
  //   let fixture1 = [];
  //   let fixture2 = [];
  //   let fixture3 = [];

  useEffect(() => {
    let playedgames = [];
    let gamestocome = [];

    function getMatches() {
      matches.map((match) =>
        match.Month == "Sep"
          ? match.Played
            ? playedgames.push(match)
            : gamestocome.push(match)
          : null
      );

      if (playedgames.length - 1 >= 0) {
        setResult1(playedgames[playedgames.length - 1]);
      } else {
        setResult1(null);
      }

      if (playedgames.length - 2 >= 0) {
        setResult2(playedgames[playedgames.length - 2]);
      } else {
        setResult2(null);
      }

      if (playedgames.length - 3 >= 0) {
        setResult3(playedgames[playedgames.length - 3]);
      } else {
        setResult3(null);
      }

      setFixture1(gamestocome[0]);
      setFixture2(gamestocome[1]);
      setFixture3(gamestocome[2]);
    }

    getMatches();
  }, [matches]);

  // function getRandomPHome(match) {
  //   return randomP.M1H_Guesses[randomPWeek - 1][match.MatchNumber - 1];
  // }

  return (
    <>
      <div className="home__welcome">
        <h1>Welcome to F.F.P.</h1>
        <p>
          <br />
          F.F.P. is a regular season score predictor. Every week 7 games are
          selected from across the Scottish and English leauges, as well as 1
          wildcard from Europe. <br />
          Your job is to predict as may scoreline right as possible. <br />
          <br />
          To see the results of this months matches head to "Results". To see
          where your sit in the weekly, monthly and overall standings, head to
          "Tables".
          <br />
          Sign into "Predictions" and you can see what you predicted and how you
          did against the actual score. For next months matches, login to "Set
          Scores" and you can get make your predictions for next months games.
          <br />
        </p>
      </div>

      <div className="home__last-three">
        <h2 className="home__last-three__heading">Lastest Results</h2>
        {console.log("result 1", result1)}
        {result1 ? (
          <div className="resultsList__match">
            <p className="resultsList__match__heading">{result1.Date} </p>
            <p className="resultsList__match__heading">{result1.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {result1.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {result1.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {result1.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {result1.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          "No Games Played Yet This Month"
        )}

        {result2 ? (
          <div className="resultsList__match">
            <p className="resultsList__match__heading">{result2.Date} </p>
            <p className="resultsList__match__heading">{result2.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {result2.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {result2.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {result2.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {result2.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}

        {result3 ? (
          <div className="resultsList__match">
            <p className="resultsList__match__heading">{result3.Date} </p>
            <p className="resultsList__match__heading">{result3.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {result3.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {result3.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {result3.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {result3.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="home__next-three">
        <h2 className="home__last-three__heading">Next Games</h2>
        {fixture1 ? (
          <div className="resultsList__match">
            <p className="resultsList__match__heading">{fixture1.Date} </p>
            <p className="resultsList__match__heading">{fixture1.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {fixture1.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {fixture1.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {fixture1.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {fixture1.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        {fixture2 ? (
          <div className="resultsList__match">
            <p className="resultsList__match__heading">{fixture2.Date} </p>
            <p className="resultsList__match__heading">{fixture2.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {fixture2.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {fixture2.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {fixture2.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {fixture2.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        {fixture3 ? (
          <div className="resultsList__match">
            <p className="resultsList__match__heading">{fixture3.Date} </p>
            <p className="resultsList__match__heading">{fixture3.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {fixture3.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {fixture3.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {fixture3.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {fixture3.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}
      </div>

      <div className="home__random">
        <h2 className="home__random__heading">Who is Random P?</h2>
        <p className="home__random__text">
          Random P is a player whos scores have been generated by a Random Score
          Generator, designed as part of the application. It takes a list of
          possible scores and randomly picks a position in that list. That score
          is then given to the home team of the game, the same is done for the
          away. The Score List is made up of 160 scores, mainly 0,1,2 with a few
          3 and 4 and one 5,6 and 7. So each score is completly random. <br />
          The Idea is to see if a randomly picked score can be better than one
          thought over. This is the follow up to my score in the euro precitor
          being beaten by every prediction being 0-0!
        </p>
        <div className="home__random__scores">
          <h3 className="home__random__scores__heading">
            This Weeks Random P predictions:
          </h3>
          {matches.map((match) =>
            randomP.M1H_Guesses &&
            match.Week == randomPWeek &&
            match.Month == "Sep" ? (
              <p className="home__random__scores__fixture">
                {match.MatchNumber}. {match.Home}{" "}
                {randomP.M2H_Guesses[randomPWeek - 1][match.MatchNumber - 1]} -{" "}
                {match.Away}{" "}
                {randomP.M2A_Guesses[randomPWeek - 1][match.MatchNumber - 1]}
              </p>
            ) : null
          )}
        </div>
      </div>

      <div className="home__role-of-honer">
        <h2 className="home__role-of-honer__heading">⚜️ Roll of Honour ⚜️</h2>
        <div className="home__role-of-honer__champs">
          <h3>🥇 👑 Overall League Winner 👑 🥇</h3>
          <h3>- -</h3>
          <h3>🎄 Christmas #1 🎄</h3>
          <h3>- -</h3>
          <h3>⭐️ Most Weekly Wins ⭐️</h3>
          <h3>- -</h3>
          <h3>🏆 Most Monthly Wins 🏆</h3>
          <h3>- -</h3>
        </div>

        <div className="home__role-of-honer__weekly-winner">
          <h3 className="home__role-of-honer__weekly-winner__heading">
            Weekly Winners ⭐️
          </h3>
          <div className="col-1-of-3">
            <p>Wk 1 - Owen M (19)</p>
            <p>Wk 2 - Amy M (13)</p>
            <p>Wk 3 - Steve R + Fraser D (23)</p>
            <p>Wk 4 - Chris G + Amy M (18)</p>
            <p>Wk 5 - Ruth D (16)</p>
          </div>
          <div className="col-1-of-3">
            <p>Wk 6 - </p>
            <p>Wk 7 - </p>
            <p>Wk 8 - </p>
            <p>Wk 9 - </p>
            <p>Wk 10 - </p>
          </div>
          <div className="col-1-of-3">
            <p>Wk 11 - </p>
            <p>Wk 12 - </p>
            <p>Wk 13 - </p>
            <p>Wk 14 - </p>
            <p>Wk 15 - </p>
          </div>
        </div>

        <div className="home__role-of-honer__monthly-winner">
          <h3 className="home__role-of-honer__weekly-winner__heading">
            Monthly Winners 🏆
          </h3>
          <div className="col-1-of-2">
            <p>August - Ruth D (69)</p>
            <p>September - </p>
            <p>October - </p>
            <p>November - </p>
            <p>December - </p>
          </div>
          <div className="col-1-of-2">
            <p>January - </p>
            <p>February - </p>
            <p>March - </p>
            <p>April- </p>
            <p>May - </p>
          </div>
        </div>
      </div>

      <h1 className="rulesHeading">Scoring Rules</h1>
      <div className="section-rules">
        <div className="section-rules__left">
          <h3 className="smaller-heading">The Rules</h3>
          <p className="section-rules__text">
            The following points are awarded on each match: <br /> <br />+ 1
            point for the correct match outcome (winning team/draw) <br />+ 1
            point for each teams match goals predicted correctly
            <br />+ 2 points if you get the scoreline correct <br />
          </p>
        </div>
        <div className="section-rules__right">
          <h3 className="smaller-heading">Examples</h3>
          <p className="section-rules__text">
            You predict Home 1 Away 0 <br />
            <br />- Actual score: Home 3 Away 2 = 1 point for outcome of match.
            <br />- Actual socre: Home 1 Away 1 = 1 point for correct home team
            goals.
            <br />- Actual socre: Home 3 Away 0 = 2 points - 1 for correct away
            team goals and 1 for correct outcome.
            <br />
            - Actual score: Home 1 Away 0 = 5 points (max) - 1 for outcome, 1
            for home goals, 1 for away goals and 2 for correct result. <br />
          </p>
        </div>
      </div>
    </>
  );
}
