export default function CupMatch({
  matchNum,
  players,
  guessIndex,
  homePlayer,
  awayPlayer,
  winner,
}) {
  let homescore = null;

  return (
    <>
      <div className="cup__match">
        <p className="cup__match__heading">Match {matchNum} </p>

        <table className="cup__match__table">
          <thead>
            <tr>
              <th></th>
              <th>Match</th>
              <th> </th>
              <th>A</th>
              <th>||</th>
              <th>Match</th>
              <th> </th>
              <th>B</th>
              <td>|| </td>
              <th>Corners</th>
            </tr>
          </thead>

          <tbody>
            <tr className="cup__match__home">
              <td className="cup__match__home__team">{homePlayer}</td>

              <td className="cup__match__home__score">
                {players.map((player) =>
                  player.Player_Id == homePlayer
                    ? (homescore = player.Winter_cup_Home[guessIndex])
                    : null
                )}
              </td>
              <td> </td>
              <td className="cup__match__home__score">
                {players.map((player) =>
                  player.Player_Id == homePlayer
                    ? (homescore = player.Winter_cup_Away[guessIndex])
                    : null
                )}
              </td>
              <td> </td>
              <td className="cup__match__home__score">
                {players.map((player) =>
                  player.Player_Id == homePlayer
                    ? (homescore = player.Winter_cup_Home[guessIndex + 1])
                    : null
                )}
              </td>
              <td> </td>
              <td className="cup__match__home__score">
                {players.map((player) =>
                  player.Player_Id == homePlayer
                    ? (homescore = player.Winter_cup_Away[guessIndex + 1])
                    : null
                )}
              </td>
              <td> </td>
              <td className="cup__match__home__score">
                {' '}
                {players.map((player) =>
                  player.Player_Id == homePlayer
                    ? (homescore =
                        player.Winter_cup_Corners[guessIndex] +
                        player.Winter_cup_Corners[guessIndex + 1])
                    : null
                )}
              </td>
            </tr>
            <tr className="cup__match__away">
              <td className="cup__match__away__team">{awayPlayer}</td>
              <td className="cup__match__home__score">
                {players.map((player) =>
                  player.Player_Id == awayPlayer
                    ? (homescore = player.Winter_cup_Home[guessIndex])
                    : null
                )}
              </td>
              <td> </td>
              <td className="cup__match__home__score">
                {players.map((player) =>
                  player.Player_Id == awayPlayer
                    ? (homescore = player.Winter_cup_Away[guessIndex])
                    : null
                )}
              </td>
              <td> </td>
              <td className="cup__match__home__score">
                {players.map((player) =>
                  player.Player_Id == awayPlayer
                    ? (homescore = player.Winter_cup_Home[guessIndex + 1])
                    : null
                )}
              </td>
              <td> </td>
              <td className="cup__match__home__score">
                {players.map((player) =>
                  player.Player_Id == awayPlayer
                    ? (homescore = player.Winter_cup_Away[guessIndex + 1])
                    : null
                )}
              </td>
              <td> </td>
              <td className="cup__match__home__score">
                {' '}
                {players.map((player) =>
                  player.Player_Id == awayPlayer
                    ? (homescore =
                        player.Winter_cup_Corners[guessIndex] +
                        player.Winter_cup_Corners[guessIndex + 1])
                    : null
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="cup__match__winner">👏 Winner - {winner} </p>
      </div>
    </>
  );
}
