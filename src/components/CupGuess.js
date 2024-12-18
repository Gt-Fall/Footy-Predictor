import supabase from './supabase';

export default function CupGuess({
  matches,
  logedIn,
  logedInPlayer,
  logedInCode,
}) {
  const scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const amountCorners = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];

  let awayGuesses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let homeGuesses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let corners = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  function getHome(match) {
    if (logedIn) {
      homeGuesses = logedInPlayer.Winter_cup_Home;
      if (logedInPlayer.Winter_cup_Home) {
        return logedInPlayer.Winter_cup_Home[match.MatchNumber - 1];
      }
    } else {
      return homeGuesses[match.MatchNumber - 1];
    }
  }

  function getAway(match) {
    if (logedIn) {
      awayGuesses = logedInPlayer.Winter_cup_Away;
      if (logedInPlayer.Winter_cup_Away) {
        return logedInPlayer.Winter_cup_Away[match.MatchNumber - 1];
      }
    } else {
      return awayGuesses[match.MatchNumber - 1];
    }
  }

  function getConers(match) {
    if (logedIn) {
      corners = logedInPlayer.Winter_cup_Corners;
      if (logedInPlayer.Winter_cup_Corners) {
        return logedInPlayer.Winter_cup_Corners[match.MatchNumber - 1];
      }
    } else {
      return corners[match.MatchNumber - 1];
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (logedIn) {
      async function sendPredictions() {
        let homeGuess = logedInPlayer.Winter_cup_Home;
        homeGuess = homeGuesses;
        let awayGuess = logedInPlayer.Winter_cup_Away;
        awayGuess = awayGuesses;
        let cornerGuess = logedInPlayer.Winter_cup_Corners;
        cornerGuess = corners;
        // const homeGuess = logedInPlayer.M1H_Guesses.with(
        //   selectedWeek - 1,
        //   homeGuesses
        // );
        // const awayGuess = logedInPlayer.M1A_Guesses.with(
        //   selectedWeek - 1,
        //   awayGuesses
        // );

        //The above Code would work on Chrome and IE but not on Safari.

        const { data, error } = await supabase
          .from('Players')
          .update({
            Winter_cup_Home: homeGuess,
            Winter_cup_Away: awayGuess,
            Winter_cup_Corners: cornerGuess,
          })
          .eq('Surname', logedInPlayer.Surname)
          .eq('Code', logedInCode)
          .select();
      }
      sendPredictions();
      alert('Predictions Sending Sucessful!');
    } else {
      alert('not Logged In so cant save');
    }
    // if (homeGuesses.length != 36 || awayGuesses.length != 36) {
    //   alert('Error Sending, missing scores. Try again ');
    //   window.location.reload();
    // } else {
    //   async function sendPredictions() {
    //     const { data, error } = await supabase.from('Predictions').insert([
    //       {
    //         homeGuesses: homeGuesses,
    //         awayGuesses: awayGuesses,
    //         player: playerName,
    //         email: playerEmail,
    //       },
    //     ]);
    //   }
    //   sendPredictions();
    //   alert('Predictions Sending Sucessful!');
    // }
  }

  return (
    <>
      <form className="guess-page__form" onSubmit={handleSubmit}>
        {matches.map((match) =>
          match.Month == 'Wcup' ? (
            <div className="guess-page__form__cup" key={match.id}>
              <p className="guess-page__form__cup__heading">
                Round {match.Week}
              </p>
              <p className="guess-page__form__cup__heading">{match.Date}</p>
              <p className="guess-page__form__cup__heading">{match.Comp}</p>
              <div className="guess-page__form__home">
                <label htmlFor={`M1-H${match.MatchNumber}`}>{match.Home}</label>
                <select
                  id={`M1-H${match.MatchNumber}`}
                  className="guess-page__form__home__options"
                  onChange={(e) =>
                    (homeGuesses[match.MatchNumber - 1] = Number(
                      e.target.value
                    ))
                  }
                >
                  <option vlaue={getHome(match)}>{getHome(match)}</option>
                  {scores.map((score) => (
                    <option key={score} value={score}>
                      {score}
                    </option>
                  ))}
                </select>
              </div>
              <p className="guess-page__form_vs">Vs</p>
              <div className="guess-page__form__away">
                <label htmlFor={`M1-A${match.MatchNumber}`}>{match.Away}</label>
                <select
                  id={`M1-A${match.MatchNumber}`}
                  className="guess-page__form__away__options"
                  onChange={(e) =>
                    (awayGuesses[match.MatchNumber - 1] = Number(
                      e.target.value
                    ))
                  }
                >
                  <option vlaue="">{getAway(match)}</option>
                  {scores.map((score) => (
                    <option key={score} value={score}>
                      {score}
                    </option>
                  ))}
                </select>
              </div>
              <div className="guess-page__form__away">
                <label htmlFor={`M1-A${match.MatchNumber}`}>Corners</label>
                <select
                  id={`M1-A${match.MatchNumber}`}
                  className="guess-page__form__away__options"
                  onChange={(e) =>
                    (corners[match.MatchNumber - 1] = Number(e.target.value))
                  }
                >
                  <option vlaue="">{getConers(match)}</option>
                  {amountCorners.map((score) => (
                    <option key={score} value={score}>
                      {score}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : null
        )}
        <div className="sub-button-box">
          <button className="sub-button">
            <span>Submit Cup</span>
            <i></i>
          </button>
        </div>
      </form>
    </>
  );
}
