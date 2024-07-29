import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import brand from "../../assets/branding.jpg";
import bran from "../../assets/brandtwo.jpg";
import plan from "../../assets/plan.avif";
import info from "../../assets/info.avif";

const products = [
  {
    id: 1,
    name: "Strategy Building",
    description: "The ultimate toolkit for boosting your brand's visibility.",
    image: brand,
  },
  {
    id: 2,
    name: "Brand Identity Kit",
    description: "An advanced toolkit for enhancing brand impact.",
    image: bran,
  },
  {
    id: 3,
    name: "Marketing Materials",
    description: "An essential toolkit for brand growth and visibility.",
    image: plan,
  },
  {
    id: 4,
    name: "Print Materials",
    description: "The comprehensive toolkit for maximum brand exposure.",
    image: info,
  },
];

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const itemsPerPage = 1; // Show one item per page

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container mx-auto my-8 p-6 bg-gradient-to-r from-blue-200 via-blue-900 to-blue-200 shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center mb-8 p-4 bg-white shadow-lg rounded-lg w-full md:w-3/4 mx-auto"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-lg border-4 border-blue-500"
            />
            <div className="mt-4 md:mt-0 md:ml-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 font-semibold mb-4">
                {product.description}
              </p>
              <button
                onClick={handleBuyNow}
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() =>
            handlePageChange((currentPage - 1 + totalPages) % totalPages)
          }
          className="bg-blue-900 text-white px-4 font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300 mr-4"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange((currentPage + 1) % totalPages)}
          className="bg-blue-300 text-black px-6 font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
