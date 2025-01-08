import { useState } from "react";
import "./CartPage.css"; // Import the CSS file

const CartPage = ({ cart }) => {
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * quantities[item.id];
    }, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">
                    ${item.price * quantities[item.id]}
                  </span>
                  <div className="cart-item-quantity">
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span>{quantities[item.id]}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-summary">
        <h2>Total Amount</h2>
        <p>${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default CartPage;
