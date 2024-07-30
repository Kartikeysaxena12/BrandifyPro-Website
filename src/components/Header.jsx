import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">BrandifyPro</h1>
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="mr-4 p-2 rounded font-semibold bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link
            to="/"
            className="relative mr-4 px-3 py-2 text-white font-medium transition-all font-semibold duration-300 hover:text-gray-300 hover:bg-gray-700 rounded before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Product
          </Link>
          <ScrollLink
            to="testimonials"
            smooth={true}
            duration={500}
            className="relative mr-4 px-3 py-2 text-white font-medium transition-all font-semibold duration-300 hover:text-gray-300 hover:bg-gray-700 rounded before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Testimonials
          </ScrollLink>
          <Link
            to="/security"
            className="relative mr-4 px-3 py-2 text-white font-medium transition-all font-semibold duration-300 hover:text-gray-300 hover:bg-gray-700 rounded before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Security
          </Link>
          <Link
            to="/return-policy"
            className="relative mr-4 px-3 py-2 text-white font-medium transition-all font-semibold duration-300 hover:text-gray-300 hover:bg-gray-700 rounded before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
          >
            Return Policy
          </Link>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="mb-4 p-2 w-full rounded font-semibold bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link
            to="/"
            className="block mb-4 text-white font-medium hover:text-gray-300 hover:bg-gray-700 rounded px-3 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </Link>
          <ScrollLink
            to="testimonials"
            smooth={true}
            duration={500}
            className="block mb-4 text-white font-medium hover:text-gray-300 hover:bg-gray-700 rounded px-3 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </ScrollLink>
          <Link
            to="/security"
            className="block mb-4 text-white font-medium hover:text-gray-300 hover:bg-gray-700 rounded px-3 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Security
          </Link>
          <Link
            to="/return-policy"
            className="block mb-4 text-white font-medium hover:text-gray-300 hover:bg-gray-700 rounded px-3 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Return Policy
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
