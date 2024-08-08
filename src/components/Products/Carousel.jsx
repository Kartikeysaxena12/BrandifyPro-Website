import React, { useState, useEffect } from "react";
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
  const itemsPerPage = 1;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000); // Transition every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [totalPages]);

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container mx-auto my-8 p-6 bg-gradient-to-r from-blue-200 via-blue-200 to-blue-500 shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col items-center">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center mb-8 pt-12 p-4 rounded-lg w-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-lg  "
            />
            <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 font-semibold mb-4">
                {product.description}
              </p>
              <button
                onClick={handleBuyNow}
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 hover:text-blue-900 hover:font-bold transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
