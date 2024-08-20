import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';
import PostHome from '../components/PostHome';

export default function Home({ matches, randomP, randomPWeek }) {
  return (
    <>
      <Header />
      <Navbar />
      <div className="home">
        {/* <SignUp /> */}
        <PostHome
          matches={matches}
          randomP={randomP}
          randomPWeek={randomPWeek}
        />
      </div>
      <Footer />
    </>
  );
}
