import { shoes } from "./../shoes";
import Filters from "./../components/Filters";
import { useState } from "react";
import "./MainPage.css"; // Import a CSS file for styling

// eslint-disable-next-line react/prop-types
const MainPage = ({ addToCart, addedItems }) => {
  const [filteredshoes, setfilteredshoes] = useState(shoes);
  return (
    <div className="main-page">
      <h1 className="page-title">Filters</h1>
      <Filters
        filteredshoes={filteredshoes}
        setfilteredshoes={setfilteredshoes}
      />
      <div className="shoe-grid">
        {filteredshoes.map((shoe) => (
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
