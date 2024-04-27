import Footer from "../../component/footer";
import Navbar from "../../component/navbar";

export default function Checkoutpage() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center">
        <div className="w-full mt-8 flex flex-col items-center">
             {/* Order Summary */}
          <aside className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 bg-gray-100 p-4 rounded shadow-md mt-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {/* Items list */}
            <ul>
              <li className="flex justify-between mb-2">
                <span>Mens Casual Premium Slim Fit T-Shirts
</span>
                <span>$22.3</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span>
                <span>$109.95</span>
              </li>
            </ul>
            <hr className="my-4" />
            {/* Total */}
            <div className="flex justify-between">
              <span>Total:</span>
              <span>$132.25</span>
            </div>
          </aside>
          {/* Checkout form */}
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            {/* Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            {/* Address */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                placeholder="Enter your address"
              ></textarea>
            </div>
            {/* Payment */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Payment Method
              </label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>PayPal</option>
                <option>Credit Card</option>
              </select>
            </div>
            {/* Checkout button */}
            <div className="flex items-center justify-center">
              <button
                className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Checkout
              </button>
            </div>
          </form>
         
        </div>
      </div>
      <Footer />
    </>
  );
}
