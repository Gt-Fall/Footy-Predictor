import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RandomSG from '../components/RandomSG';
import GuessesForm from '../components/GuessesForm';

export default function Guesses({
  matches,
  players,
  logedIn,
  setLogedIn,
  logedInPlayer,
  setLogedInPlayer,
  logedInCode,
  setLogedInCode,
}) {
  const runRandomGen = false;
  return (
    <>
      <Header />
      <Navbar />
      {runRandomGen ? <RandomSG /> : null}
      <GuessesForm
        matches={matches}
        players={players}
        logedIn={logedIn}
        setLogedIn={setLogedIn}
        logedInPlayer={logedInPlayer}
        setLogedInPlayer={setLogedInPlayer}
        logedInCode={logedInCode}
        setLogedInCode={setLogedInCode}
      />
      <Footer />
    </>
  );
}
