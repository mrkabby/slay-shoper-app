import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const removeFromCart = (itemId) => {
    // Remove the item from the cart
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);

    // Update the cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

 

  return (
    <>
    <Navbar/>
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <img
                  src={item.image}
                  alt="product-image"
                  className="h-32 w-32"
                />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-full font-bold hover:bg-red-900"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-full font-bold hover:bg-red-900"
            onClick={()=>navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
    <Footer /> 
    </>
  );
};

export default CartPage;
