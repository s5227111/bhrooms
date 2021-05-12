import "./List.css"
import { NavLink } from "react-router-dom";

//Renders a list of the available rooms
function List(props) {

  const list = props.data.map((item) => {
    return (
      <div key={item.id}>
        <NavLink exact to={`/room/${item.id}`}>
          <img src={item.image} />
        </NavLink>
        <div>
          <h3>{item.priceText}</h3>
          <p>
            {item.description}
          </p>
          <p>
            {item.facilities}
            </p>
        </div>
      </div>
    );
  });

  return <div className="list">{list}</div>;
}

export default List;
