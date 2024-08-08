import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Product from "./components/Products/Product";
import Testimonials from "./components/Testimonials";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import SecurityBadges from "./components/SecurityBadges";
import ReturnPolicy from "./components/ReturnPolicy";
import FeaturedServices from "./components/FeaturedServices"; // Import FeaturedServices component
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
        <Header />
        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="product">
                    <Product />
                  </section>
                  <section id="featured-services">
                    <FeaturedServices /> {/* Add FeaturedServices component */}
                  </section>
                  <Element name="testimonials">
                    <section id="testimonials">
                      <Testimonials />
                    </section>
                  </Element>
                </>
              }
            />
            <Route path="/security" element={<SecurityBadges />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
