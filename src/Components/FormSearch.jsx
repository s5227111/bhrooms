import "./FormSearch.css"
import React from "react"
import { useHistory } from "react-router";

const FormSearch = () => {
  const history = useHistory();
 
  function handleSubmit(e) {

    //Useful for future use with API
    e.preventDefault();
    let minPrice = document.getElementById("minPrice").value;
    let maxPrice = document.getElementById("maxPrice").value;
    let ageRange = document.getElementById("ageRange").value;
    let profile = document.getElementById("profile").value;

    if (minPrice > maxPrice) {
      return alert('The minimum price has to be higher than the maximum price.')
    }

    history.push(`/search?minPrice=${minPrice}&maxPrice=${maxPrice}&ageRange=${ageRange}&profile=${profile}`);
  }

  //Return the template formated to the search filter
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="box">
        <div className="form-opacity">&nbsp;</div>
        <div className="form">

          <select id="minPrice">
            <option value="0">Min price:</option>
            <option value="£200PCM">£200PCM</option>
            <option value="£300PCM">£300PCM</option>
            <option value="£400PCM">£400PCM</option>
            <option value="£500PCM">£500PCM</option>
            <option value="£600PCM">£600PCM</option>
            <option value="£700PCM">£700PCM</option>
            <option value="£800PCM">£800PCM</option>
            <option value="£900PCM">£900PCM</option>
            <option value="£1000PCM">£1000PCM</option>
          </select>

          <select id="maxPrice">
            <option value="0">Max price:</option>
            <option value="£200PCM">£200PCM</option>
            <option value="£300PCM">£300PCM</option>
            <option value="£400PCM">£400PCM</option>
            <option value="£500PCM">£500PCM</option>
            <option value="£600PCM">£600PCM</option>
            <option value="£700PCM">£700PCM</option>
            <option value="£800PCM">£800PCM</option>
            <option value="£900PCM">£900PCM</option>
            <option value="£1000PCM">£1000PCM</option>
          </select>

          <select id="ageRange">
            <option value="0">Age range:</option>
            <option value="20's">20's</option>
            <option value="30's">30's</option>
            <option value="40's">40's</option>
            <option value="50's">50's</option>
            <option value="More mature">More mature</option>
          </select>

          <select id="profile">
            <option value="0">Students Profile:</option>
            <option value="Quiet">Quiet</option>
            <option value="Communicative">Communicative</option>
            <option value="Music fan">Music fan</option>
            <option value="Beer fan">Beer fan</option>
            <option value="Studious">Studious</option>
          </select>

          <button>Search</button>
        </div>
      </div>
    </form>
  );
}

export default FormSearch;
