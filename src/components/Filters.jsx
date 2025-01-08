import { useState } from "react";

const Filters = ({ filteredshoes, setfilteredshoes }) => {
  function handlecategorychange(selectedcategory) {
    console.log(selectedcategory);
    console.log(filteredshoes);
    const categorybasedshoes = filteredshoes.filter((shoe) => {
      return shoe.brand === selectedcategory;
    });
    debugger;
    setfilteredshoes(categorybasedshoes);
  }
  return (
    <>
      <div>
        <input
          type="checkbox"
          onChange={() => handlecategorychange("Adidas")}
        />
        Adidas
        <input type="checkbox" onChange={() => handlecategorychange("Puma")} />
        puma
        <input type="checkbox" onChange={() => handlecategorychange("Nike")} />
        nike
      </div>
      {/* <h1>{category}</h1> */}
    </>
  );
};

export default Filters;
