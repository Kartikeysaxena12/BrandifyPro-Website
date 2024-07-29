import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">BrandifyPro</h1>
        <nav className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="mr-4 p-2 rounded font-semibold bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link
            to="/"
            className="relative mr-4 px-3 py-2 text-white font-medium transition-all duration-300 hover:text-gray-300 hover:bg-gray-700 rounded before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Product
          </Link>
          <ScrollLink
            to="testimonials"
            smooth={true}
            duration={500}
            className="relative mr-4 px-3 py-2 text-white font-medium transition-all duration-300 hover:text-gray-300 hover:bg-gray-700 rounded before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Testimonials
          </ScrollLink>
          <Link
            to="/security"
            className="relative mr-4 px-3 py-2 text-white font-medium transition-all duration-300 hover:text-gray-300 hover:bg-gray-700 rounded before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Security
          </Link>
          <Link
            to="/return-policy"
            className="relative mr-4 px-3 py-2 text-white font-medium transition-all duration-300 hover:text-gray-300 hover:bg-gray-700 rounded before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Return Policy
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
