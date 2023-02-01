import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import{FaUserCircle} from "react-icons/fa"

function NavBar(props) {
  const [IsMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">Logo</h3>

        <ul
          className={IsMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="Home">
            <li>Home</li>
          </Link>

          <Link to="/Services" className="Contact">
            <li>Services</li>
          </Link>

          <Link to="/Contact" className="Contact">
            <li>Contact</li>
          </Link>
          <Link to="/About" className="About">
            <li> <FaUserCircle/></li>
          </Link>

          <Link to="/Cart" className="Contact-1">
            <li>
             
              <FiShoppingCart />
              <sup>{props.count}</sup>
            </li>
          </Link>
        </ul>

        <button
          className="mobile-menu-icon "
          onClick={() => setIsMobile(!IsMobile)}
        >
          {IsMobile ? (
            <i className="fas fa-align-justify"></i>
          ) : (
            <i className="fas fa-align-justify"></i>
          )}
        </button>
      </nav>

    </>
  );
}

export default NavBar;
