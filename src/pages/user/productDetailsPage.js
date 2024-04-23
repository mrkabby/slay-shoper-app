import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const {id}=useParams();

  const fetchData = () => {
    fetch( `https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg ">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt="" className="rounded-lg" />
          
        </div>
        <div className="md:w-1/2 md:pl-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Home - Products - ProductDetails </p>
              <h2 className="text-2xl font-bold"> {product.title} </h2>
            </div>
            <Link to = "/store" >
            <button className="text-zinc-600 hover:text-zinc-800 dark:hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            </Link>
          </div>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
           {product.description}
          </p>
          <h3 className="mt-4 font-semibold">Category:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>{product.category} </li>
            
          </ul>
          
          <div className="flex items-center mt-6">
            <button
              className="px-8 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-900 focus:outline-none focus:bg-zinc-800"
            >
              Add to cart
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
