import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import List from '../Components/List';
import Map from '../Components/Map';
import FormSearch from '../Components/FormSearch';
import data from "../data/data.json";
import "./Search.css"
import { useHistory, useLocation } from "react-router";

/**
 * This function renders a Search form and handles the submission 
 */
function Search() {
  let location = useLocation();
  let searchParams = new URLSearchParams(location.search);
  let minPrice = searchParams.get("minPrice")
  let maxPrice = searchParams.get("maxPrice")
  let ageRange = searchParams.get("ageRange")
  let profile = searchParams.get("profile")

  return (
    <div>
      <Header />
      <div className="search-form">
        <FormSearch />
      </div>
      <div className="search-page">
        <div><List data={data}/></div>
        <div><Map data={data}/></div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
