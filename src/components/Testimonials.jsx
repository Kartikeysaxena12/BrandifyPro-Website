import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="pt-10">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-gray-300 hover:bg-zinc-200 focus:outline-none"
      ></button>
    ),
  };

  const testimonials = [
    {
      text: "The BrandBoost Toolkit is a game-changer for our marketing efforts!",
      author: "Alex Johnson, Marketing Manager",
    },
    {
      text: "Excellent resources and easy to use. Highly recommended.",
      author: "Maria Smith, Brand Strategist",
    },
    {
      text: "This toolkit has significantly improved our branding strategy.",
      author: "James Wilson, Creative Director",
    },
    {
      text: "A must-have for any business looking to enhance their brand.",
      author: "Patricia Brown, Entrepreneur",
    },
    {
      text: "Fantastic toolkit with comprehensive resources. Loved it!",
      author: "John Doe, Startup Founder",
    },
  ];

  return (
    <section className="my-8 py-8 p-4 bg-gradient-to-r from-blue-200 via-blue-200 to-blue-500 shadow-lg rounded-lg">
      <h2 className="text-2xl text-blue-900 font-bold mb-4">
        Customer Testimonials
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-700 ml-10 font-semibold text-[20px]">
                "{testimonial.text}"
              </p>
              <p className="text-gray-500 ml-10 font-semibold mt-2">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2 right-2 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-white hover:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 14.707a1 1 0 010-1.414L9.586 9l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2 left-2 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-white hover:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M14.707 5.293a1 1 0 010 1.414L10.414 9l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Testimonials;
