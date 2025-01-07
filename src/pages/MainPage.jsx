import { shoes } from "./../shoes";
import { useState } from "react";
import "./MainPage.css"; // Import a CSS file for styling

const MainPage = ({ addToCart, addedItems }) => {
  return (
    <div className="main-page">
      <h1 className="page-title">Shoe Collection</h1>
      <div className="shoe-grid">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <h4 className="shoe-brand">{shoe.brand}</h4>
            <p className="shoe-description">{shoe.description}</p>
            <p className="shoe-price">Price: ${shoe.price}</p>
            <button
              onClick={() => addToCart(shoe)}
              disabled={addedItems[shoe.id]} // Use addedItems prop to disable the button
            >
              {addedItems[shoe.id] ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
