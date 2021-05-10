import { NavLink } from "react-router-dom";
import "./Header.css"

/**
 * Component that renders the Header.
 */
function Header() {
  return (
    <header className="header" >
      <div className="column1"><NavLink exact to="/">BH ROOMS</NavLink></div>
      <div className="column2">
        <ul>
            <li><a href="/moving">Moving to Bournemouth</a></li>
            <li><a href="https://www.bournemouth.ac.uk/why-bu/bournemouth-local-area" target="blank">Explore Bournemouth</a></li>
            <li><NavLink exact to="/contact-us">Contact us</NavLink></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
