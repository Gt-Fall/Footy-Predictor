export default function ResultsList({ gameWeek, matches, thisMonth }) {
  return (
    <>
      <h1 className="resultsList__heading">This Months Results</h1>

      <h1 className="resultsList__week">Week {gameWeek} Results</h1>
      {matches.map((match) =>
        match.Week == gameWeek && match.Month == thisMonth ? (
          <div className="resultsList__match" key={match.id}>
            <p className="resultsList__match__heading">{match.Date} </p>
            <p className="resultsList__match__heading">{match.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {match.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {match.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {match.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null
      )}

      {gameWeek - 1 > 0 ? (
        <h1 className="resultsList__week">Week {gameWeek - 1} Results</h1>
      ) : null}
      {matches.map((match) =>
        match.Week == gameWeek - 1 &&
        match.Month == thisMonth &&
        gameWeek - 1 > 0 ? (
          <div className="resultsList__match" key={match.id}>
            <p className="resultsList__match__heading">{match.Date} </p>
            <p className="resultsList__match__heading">{match.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {match.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {match.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {match.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null
      )}

      {gameWeek - 2 > 0 ? (
        <h1 className="resultsList__week">Week {gameWeek - 2} Results</h1>
      ) : null}
      {matches.map((match) =>
        match.Week == gameWeek - 2 &&
        match.Month == thisMonth &&
        gameWeek - 2 > 0 ? (
          <div className="resultsList__match" key={match.id}>
            <p className="resultsList__match__heading">{match.Date} </p>
            <p className="resultsList__match__heading">{match.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {match.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {match.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {match.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null
      )}

      {gameWeek - 3 > 0 ? (
        <h1 className="resultsList__week">Week {gameWeek - 3} Results</h1>
      ) : null}
      {matches.map((match) =>
        match.Week == gameWeek - 3 &&
        match.Month == thisMonth &&
        gameWeek - 3 > 0 ? (
          <div className="resultsList__match" key={match.id}>
            <p className="resultsList__match__heading">{match.Date} </p>
            <p className="resultsList__match__heading">{match.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {match.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {match.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {match.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null
      )}

      {gameWeek - 4 > 0 ? (
        <h1 className="resultsList__week">Week {gameWeek - 4} Results</h1>
      ) : null}
      {matches.map((match) =>
        match.Week == gameWeek - 4 &&
        match.Month == thisMonth &&
        gameWeek - 4 > 0 ? (
          <div className="resultsList__match" key={match.id}>
            <p className="resultsList__match__heading">{match.Date} </p>
            <p className="resultsList__match__heading">{match.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {match.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {match.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {match.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null
      )}
      {gameWeek - 1 == 0 ? (
        <h1 className="resultsList__week">Week 2 Fixtures</h1>
      ) : null}
      {matches.map((match) =>
        match.Week == 2 && match.Month == thisMonth && gameWeek - 1 == 0 ? (
          <div className="resultsList__match" key={match.id}>
            <p className="resultsList__match__heading">{match.Date} </p>
            <p className="resultsList__match__heading">{match.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {match.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {match.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {match.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null
      )}

      {gameWeek - 2 == 0 ? (
        <h1 className="resultsList__week">Week 3 Fixtures</h1>
      ) : null}
      {matches.map((match) =>
        match.Week == 3 && match.Month == thisMonth && gameWeek - 2 == 0 ? (
          <div className="resultsList__match" key={match.id}>
            <p className="resultsList__match__heading">{match.Date} </p>
            <p className="resultsList__match__heading">{match.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {match.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {match.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {match.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null
      )}

      {gameWeek - 3 == 0 ? (
        <h1 className="resultsList__week">Week 4 Fixtures</h1>
      ) : null}
      {matches.map((match) =>
        match.Week == 4 && match.Month == thisMonth && gameWeek - 3 == 0 ? (
          <div className="resultsList__match" key={match.id}>
            <p className="resultsList__match__heading">{match.Date} </p>
            <p className="resultsList__match__heading">{match.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {match.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {match.Away}
                  </td>
                  <td className="resultsList__match__away__score">
                    {match.AwayGoals}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null
      )}

      {gameWeek - 4 == 0 ? (
        <h1 className="resultsList__week">Week 5 Fixtures</h1>
      ) : null}
      {matches.map((match) =>
        match.Week == 5 && match.Month == thisMonth && gameWeek - 4 == 0 ? (
          <div className="resultsList__match" key={match.id}>
            <p className="resultsList__match__heading">{match.Date} </p>
            <p className="resultsList__match__heading">{match.Comp}</p>
            <table className="resultsList__match__table">
              <tbody>
                <tr className="resultsList__match__home">
                  <td className="resultsList__match__home__team">
                    {match.Home}
                  </td>
                  <td className="resultsList__match__home__score">
                    {match.HomeGoals}
                  </td>
                </tr>
                <tr className="resultsList__match__away">
                  <td className="resultsList__match__away__team">
                    {match.Away}
                  </td>
                  <td className="resultsList__match__away__score">
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
