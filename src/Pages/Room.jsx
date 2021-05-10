import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Map from '../Components/Map';
import data from "../data/data.json";
import "./Room.css"
import { useHistory, useLocation, useParams } from "react-router";

/**
 * This function renders a specific room up on user's selection 
 */
function Room() {
  let params = useParams();
  let item = data.find(item =>item.id === params.room_id);
  return (
    <div>
      <Header />
      <div className="room">
        <div className="item">
          <h3>
            {item.priceText}
          </h3>
          <img src={item.image} />
          <p>
            {item.text}
          </p>
          <div className="geo">
            <div><strong>Latitude: </strong> {item.latitude}</div>
            <div><strong>Longitude: </strong> {item.longitude}</div>
          </div>
        </div>
        <Map data={[item]} />
      </div>
      <Footer />
    </div>
  );
}

export default Room;
