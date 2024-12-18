import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CupDraw from '../components/CupDraw';
import CupDisplay from '../components/CupDisplay';
import { useState } from 'react';

export default function Cup({ players }) {
  const [draw, setDraw] = useState([]);
  const runDraw = false;
  return (
    <>
      <Header />
      <Navbar />
      <div className="cup">
        <h1 className="cup__heading">The Winter Cup</h1>
        <p className="cup__info">
          Each cup game is against another player. Usual scoring, player with
          higher score after the two games in the round goes through. If points
          are the same then total corners over the two games will be the tie
          breaker. If this is the same I will use Round 1's scores. <br />
          <br />
          Set all 5 rounds scores (even if your not in Round One) before the end
          of October. Cup runs along side the November leauge. Sorry to those
          playing in Round One, you were the first 4 drawn!
        </p>
        {runDraw ? (
          <CupDraw draw={draw} setDraw={setDraw} players={players} />
        ) : null}

        <CupDisplay draw={draw} players={players} />
      </div>
      <Footer />
    </>
  );
}
