import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Tables from "./pages/Tables";
import Predictions from "./pages/Predictions";
import Guesses from "./pages/Guesses";
import supabase from "./components/supabase";
import "./css/style.css";

export default function App() {
  const [matches, setMatches] = useState([]);
  const [players, setPlayers] = useState([]);
  const [logedIn, setLogedIn] = useState(false);
  const [logedInPlayer, setLogedInPlayer] = useState({});
  const [logedInCode, setLogedInCode] = useState("");
  const [randomP, setRandomP] = useState({});
  const [randomPWeek, setRandomPWeek] = useState(1);
  const gameWeek = 1;
  const thisMonth = "Sep";

  useEffect(function () {
    async function getMatches() {
      const { data: games, error } = await supabase.from("Matches").select("*");
      const gameArray = [...games].sort(
        (a, b) => a.Week - b.Week || a.MatchNumber - b.MatchNumber
      );
      setMatches(gameArray);
    }
    getMatches();

    async function getPlayers() {
      const { data: players, error } = await supabase
        .from("Players")
        .select("*");
      setPlayers(players);
    }
    getPlayers();
  }, []);

  useEffect(
    function () {
      function getRandomP() {
        players.map((player) =>
          player.Surname == "PERSON" ? setRandomP(player) : null
        );
      }
      getRandomP();
    },
    [players]
  );

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Home
              matches={matches}
              randomP={randomP}
              randomPWeek={randomPWeek}
            />
          }
        />
        <Route
          path="results"
          element={
            <Results
              matches={matches}
              gameWeek={gameWeek}
              thisMonth={thisMonth}
            />
          }
        />
        <Route
          path="tables"
          element={
            <Tables
              matches={matches}
              players={players}
              thisMonth={thisMonth}
              gameWeek={gameWeek}
            />
          }
        />
        <Route
          path="predictions"
          element={
            <Predictions
              matches={matches}
              gameWeek={gameWeek}
              thisMonth={thisMonth}
              players={players}
              logedIn={logedIn}
              setLogedIn={setLogedIn}
              logedInPlayer={logedInPlayer}
              setLogedInPlayer={setLogedInPlayer}
              logedInCode={logedInCode}
              setLogedInCode={setLogedInCode}
            />
          }
        />
        <Route
          path="guesses"
          element={
            <Guesses
              matches={matches}
              players={players}
              logedIn={logedIn}
              setLogedIn={setLogedIn}
              logedInPlayer={logedInPlayer}
              setLogedInPlayer={setLogedInPlayer}
              logedInCode={logedInCode}
              setLogedInCode={setLogedInCode}
            />
          }
        />
      </Routes>
    </>
  );
}
