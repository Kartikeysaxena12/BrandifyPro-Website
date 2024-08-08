import React from "react";
import strat from "../assets/strategy.jpg";
import cont from "../assets/content.jpg";
import advis from "../assets/advisor.jpg";

const FeaturedServices = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-gradient-to-r from-blue-200 via-blue-200 to-blue-500 shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Featured Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Strategy Creation
          </h3>
          <img src={strat} className="w-3/5 h-3/5 mb-4" />
          <p className="text-gray-700 mb-4 text-center">
            Detailed description of Service Two. Highlighting its importance and
            usage. Detailed description of Service Two. Highlighting its
            importance and usage. Detailed description of Service Two.
            Highlighting its importance and usage.
          </p>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>

        <div className="bg-blue-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Content Creation
          </h3>
          <img src={cont} className="w-3/5 h-3/5 mb-4" />
          <p className="text-gray-700 mb-4 text-center">
            Detailed description of Service Two. Highlighting its importance and
            usage. Detailed description of Service Two. Highlighting its
            importance and usage. Detailed description of Service Two.
            Highlighting its importance and usage.
          </p>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="bg-blue-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Branding Advice
          </h3>
          <img src={advis} className="w-3/5 h-3/5 mb-4" />
          <p className="text-gray-700 mb-4 text-center">
            Detailed description of Service Two. Highlighting its importance and
            usage. Detailed description of Service Two. Highlighting its
            importance and usage. Detailed description of Service Two.
            Highlighting its importance and usage.
          </p>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
