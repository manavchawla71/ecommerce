import { useState } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState({});
  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
    setAddedItems((prev) => ({
      ...prev,
      [shoe.id]: true, // Persist added state
    }));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route
          exact
          path="/main"
          element={<MainPage addToCart={addToCart} addedItems={addedItems} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              addToCart={addToCart}
              addedItems={addedItems}
            />
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const gotoshop = () => {
    navigate("/main");
  };

  return (
    <div>
      <h2>Shop your favourite shoes now</h2>
      <button onClick={gotoshop}>Shop Now</button>
    </div>
  );
}

export default App;
