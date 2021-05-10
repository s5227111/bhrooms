import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Search from '../Components/Search';

/**
 * This function handles page when it is not expected/ found 
 */
function Home() {
  return (
    <div>
      <Header />
      <h1 className="center">The page is not found.</h1>
      <Search />
      <Footer />
    </div>
  );
}

export default Home;
