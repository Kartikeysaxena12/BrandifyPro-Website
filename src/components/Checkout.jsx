import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <div className="container bg-gradient-to-r from-blue-200 via-blue-200 to-blue-500 mx-auto my-8 p-8 shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h2>
      <form className="space-y-6">
        <div>
          <label
            className="block text-gray-700 mb-2 font-semibold"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="pt-8 flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-blue-900 hover:font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-blue-900 hover:font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
