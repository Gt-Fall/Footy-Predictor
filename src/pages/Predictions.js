import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlayerPredictions from '../components/PlayerPredictions';
import Login from '../components/Login';

export default function Predictions({
  gameWeek,
  matches,
  thisMonth,
  players,
  logedIn,
  setLogedIn,
  logedInPlayer,
  setLogedInPlayer,
  logedInCode,
  setLogedInCode,
}) {
  return (
    <>
      <Header />
      <Navbar />
      <div className="playerPre">
        <h1>Login to see your predictions. Actual scores also displayed.</h1>
        <Login
          players={players}
          logedIn={logedIn}
          setLogedIn={setLogedIn}
          setLogedInPlayer={setLogedInPlayer}
          logedInPlayer={logedInPlayer}
          setLogedInCode={setLogedInCode}
        />
        <PlayerPredictions
          matches={matches}
          thisMonth={thisMonth}
          logedInPlayer={logedInPlayer}
          logedIn={logedIn}
          weekNumber={1}
        />
        <PlayerPredictions
          matches={matches}
          thisMonth={thisMonth}
          logedInPlayer={logedInPlayer}
          logedIn={logedIn}
          weekNumber={2}
        />
        <PlayerPredictions
          matches={matches}
          thisMonth={thisMonth}
          logedInPlayer={logedInPlayer}
          logedIn={logedIn}
          weekNumber={3}
        />
        <PlayerPredictions
          matches={matches}
          thisMonth={thisMonth}
          logedInPlayer={logedInPlayer}
          logedIn={logedIn}
          weekNumber={4}
        />
        <PlayerPredictions
          matches={matches}
          thisMonth={thisMonth}
          logedInPlayer={logedInPlayer}
          logedIn={logedIn}
          weekNumber={5}
        />
      </div>
      <Footer />
    </>
  );
}
