import React from "react";

const ReturnPolicy = () => {
  return (
    <section className="my-60 p-6 bg-gradient-to-r from-blue-200 via-blue-200 to-blue-500 shadow-xl rounded-lg border border-gray-200">
      <h2 className="text-3xl text-blue-900 font-bold mb-6">Return Policy</h2>
      <p className="text-gray-800 font-semibold leading-relaxed text-[20px]">
        At BrandifyPro, we stand by the quality of our products. If you are not
        completely satisfied with your purchase, you can return it within 30
        days of receipt for a full refund. Please ensure that the product is in
        its original condition and packaging. For more details, please refer to
        our{" "}
        <a
          href="#more-info"
          className="text-blue-90 font-semibold hover:underline"
        >
          detailed return policy
        </a>
        .
      </p>
    </section>
  );
};

export default ReturnPolicy;
