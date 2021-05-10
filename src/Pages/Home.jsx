import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Search from '../Components/Search';
import Map from '../Components/Map';
import data from '../data/data.json';

function NotFound() {
  return (
    <div>
      <Header />
      <Search />
      <Map data={data}/>
      <Footer />
    </div>
  );
}

export default NotFound;
