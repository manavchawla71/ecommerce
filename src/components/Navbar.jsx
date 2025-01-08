import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Separate CSS file for Navbar

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="navbar-title">Shoezer</h1>
      </Link>
      <Link to="/cart" className="navbar-cart-link">
        <div className="navbar-cart">
          <FaCartShopping className="cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
