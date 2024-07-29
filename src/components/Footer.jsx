import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-8">
      <div className="flex justify-between items-center">
        <p>© 2024 BrandifyPro</p>
        <div>
          <a href="#" className="mr-4 text-white hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
