import supabase from "./supabase";

export default function WeekGuess({
  matches,
  selectedWeek,
  players,
  logedIn,
  logedInPlayer,
  logedInCode,
}) {
  const scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let awayGuesses = [0, 0, 0, 0, 0, 0, 0, 0];
  let homeGuesses = [0, 0, 0, 0, 0, 0, 0, 0];

  function getHome(match) {
    if (logedIn) {
      homeGuesses = logedInPlayer.M3H_Guesses[selectedWeek - 1];
      if (logedInPlayer.M3H_Guesses[selectedWeek - 1]) {
        return logedInPlayer.M3H_Guesses[selectedWeek - 1][
          match.MatchNumber - 1
        ];
      }
    } else {
      return homeGuesses[match.MatchNumber - 1];
    }
  }

  function getAway(match) {
    if (logedIn) {
      awayGuesses = logedInPlayer.M3A_Guesses[selectedWeek - 1];
      if (logedInPlayer.M3A_Guesses[selectedWeek - 1]) {
        return logedInPlayer.M3A_Guesses[selectedWeek - 1][
          match.MatchNumber - 1
        ];
      }
    } else {
      return awayGuesses[match.MatchNumber - 1];
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (logedIn) {
      async function sendPredictions() {
        const homeGuess = logedInPlayer.M3H_Guesses;
        homeGuess[selectedWeek - 1] = homeGuesses;
        const awayGuess = logedInPlayer.M3A_Guesses;
        awayGuess[selectedWeek - 1] = awayGuesses;
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
          .from("Players")
          .update({ M3H_Guesses: homeGuess, M3A_Guesses: awayGuess })
          .eq("Surname", logedInPlayer.Surname)
          .eq("Code", logedInCode)
          .select();
      }
      sendPredictions();
      alert("Predictions Sending Sucessful!");
    } else {
      alert("not Logged In so cant save");
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
          match.Week == selectedWeek && match.Month == "Oct" ? (
            <div className="guess-page__form__match" key={match.id}>
              <p className="guess-page__form__match__heading">{match.Date}</p>
              <p className="guess-page__form__match__heading">{match.Comp}</p>
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
            </div>
          ) : null
        )}
        <div className="sub-button-box">
          <button className="sub-button">
            <span>Submit Week {selectedWeek}</span>
            <i></i>
          </button>
        </div>
      </form>
    </>
  );
}
