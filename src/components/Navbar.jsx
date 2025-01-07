import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const [items, setitems] = useState([]);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1>Shoezer</h1>
      <Link to="/cart">
        <div style={{ display: "flex", alignItems: "center", color: "white" }}>
          <FaCartShopping />
          <span style={{ marginLeft: "8px" }}>{cartCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
