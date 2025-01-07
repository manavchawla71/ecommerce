import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import a separate CSS file for cleaner styling

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">Shoezer</h1>
      <Link to="/cart" className="cart-link">
        <div className="cart-container">
          <FaCartShopping />
          <span className="cart-count">{cartCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
