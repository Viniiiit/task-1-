import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div>
          <NavLink to="/Men" end>
            Men
          </NavLink>
        </div>
        <div>
          <NavLink to="/Women" end>
            Women
          </NavLink>
        </div>
        <div>
          <NavLink to="/Kids" end>
            Kids
          </NavLink>
        </div>
        <div>
          <NavLink to="/New-&-Featured" end>
            New & Featured
          </NavLink>
        </div>
        <div>
          <NavLink to="/Gifts" end>
            Gifts
          </NavLink>
        </div>
      </div>
      <div className="navbar-logo">
        <span className="logo-text">Frozen Sip</span> {/* Coffee logo text */}
      </div>

      <div className="navbar-user-info">
        <FaSearch className="search-icon" />
        <FaShoppingCart className="cart-icon" />
        <span>User Info</span>
      </div>
    </div>
  );
};

export default Navbar;
