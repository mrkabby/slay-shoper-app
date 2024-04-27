import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductClick = (product) => {
    // Retrieve existing cart items from localStorage
    const storedCartItems = localStorage.getItem("cartItems");
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    // Add the clicked product to the cart
    cartItems.push(product);

    // Update the cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
 

  return (
    <>
      <Navbar />
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-white mb-8">
            Introducing Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="relative overflow-hidden">
                  <img
                    className="object-cover w-full h-44"
                    src={product.image}
                    alt="Product"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"
                      onClick={()=>navigate(`/productdetails/${product.id}`)}
                    >
                      View Product
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  {product.title}
                </h3>
                {/* <p className="text-gray-500 text-sm mt-2">{product.description}</p> */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">
                    ${product.price}
                  </span>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-full font-bold hover:bg-red-900"
                    onClick={() => handleProductClick(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;