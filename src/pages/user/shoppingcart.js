import React, { useContext } from "react";
import Navbar from "../../component/navbar";
import { StoreContext } from "../../component/addtocart";
import CartCard from "../../component/cartCard";

const ShoppingCart = () => {
  const { products, total } = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      <h3>Your Cart</h3>
      <p>Total: ${total}</p>
      <div className="grid grid-cols-2">
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;