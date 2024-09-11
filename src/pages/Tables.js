import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MonthlyTable from "../components/MonthlyTable";
import WeeklyTable from "../components/WeeklyTable";

export default function Tables({ players, matches, thisMonth, gameWeek }) {
  return (
    <>
      <Header />
      <Navbar />
      <WeeklyTable
        matches={matches}
        players={players}
        thisMonth={thisMonth}
        gameWeek={gameWeek}
      />
      <div className="tables">
        <MonthlyTable
          matches={matches}
          players={players}
          thisMonth={thisMonth}
        />
      </div>

      <Footer />
    </>
  );
}
