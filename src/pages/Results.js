import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResultsList from '../components/ResultsList';

export default function Results({ gameWeek, matches, thisMonth }) {
  return (
    <>
      <Header />
      <Navbar />
      <div className="resultsList">
        <ResultsList
          matches={matches}
          gameWeek={gameWeek}
          thisMonth={thisMonth}
        />
      </div>
      <Footer />
    </>
  );
}
