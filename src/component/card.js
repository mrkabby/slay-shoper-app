import React, { useContext, useState } from "react";
import { StoreContext } from "../component/addtocart";

const Card = ({ item }) => {
  const { addToCart } = useContext(StoreContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true); // Set added state to true when item is added to cart
  };

  return (
    <div className="flex flex-col items-center">
      <img src={item.image} className="h-56 w-56" />
      <p className="text-xl">{item.name}</p>
      <p>{item.price}</p>
      <button
        className={`bg-black text-white p-2 rounded font-bold ${
          added ? "opacity-50 cursor-not-allowed bg-yellow-500 text-black" : ""
        }`}
        onClick={handleAdd}
        disabled={added} 
      >
        {added ? "Added" : "Add to cart"}
      </button>
    </div>
  );
};

export default Card;