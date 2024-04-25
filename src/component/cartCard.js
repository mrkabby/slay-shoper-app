import React, { useContext } from "react";
import { useState } from "react";
import { StoreContext } from "../component/addtocart";

const CartCard = ({ product }) => {
  const { removeFromCart, updateCartQuantity } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    updateCartQuantity(product, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity < 1) {
      removeFromCart(product);
    } else if (quantity >= 1) {
      setQuantity(quantity - 1);
      updateCartQuantity(product, quantity - 1);
    }
  };

  const handleDelete = () => {
    removeFromCart(product);
  };

  return (
    <div className="flex items-center justify-between mx-5">
      <img src={product.image} className="h-16 w-16" alt={product.name} />
      <div className="flex items-center">
        <button
          className="bg-black text-white p-2 rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value);
            setQuantity(newQuantity);
            updateCartQuantity(product, newQuantity);
          }}
          className="mx-2 w-12 text-center"
        />
        <button
          className="bg-black text-white p-2 rounded"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="bg-black text-white p-2 rounded"
          onClick={handleDelete}
        >
          Del
        </button>
      </div>

      <p className="text-xl">{product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Subtotal: ${product.price * quantity}</p>
    </div>
  );
};

export default CartCard;