import React from "react";
import cert from "../assets/certificate.avif";
import priv from "../assets/dataprivacy.avif";
import sec from "../assets/security.avif";

const badges = [
  {
    src: cert,
    alt: "SSL Certificate",
    title: "SSL Certificate",
    description:
      "Ensures secure data transmission by encrypting information sent between the user and our server.",
  },
  {
    src: priv,
    alt: "Data Privacy",
    title: "Data Privacy",
    description:
      "Protects your personal data with robust privacy measures, ensuring your information remains confidential.",
  },
  {
    src: sec,
    alt: "Anti-Virus Protection",
    title: "Anti-Virus Protection",
    description:
      "Provides real-time protection against malware and viruses, keeping our platform safe and secure.",
  },
];

const SecurityBadges = () => {
  return (
    <section className="my-20 p-4 bg-gradient-to-r from-blue-200 via-blue-900 to-blue-200 shadow-lg rounded-lg flex-grow">
      <h2 className="text-2xl text-blue-100 font-bold mb-8 text-center">
        Our Security
      </h2>
      <div className="flex flex-wrap justify-around">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 mb-6 max-w-xs text-center"
          >
            <img
              src={badge.src}
              alt={badge.alt}
              className="w-32 h-32 object-contain mx-auto mb-4 border-4 border-gray-300 rounded-full"
            />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {badge.title}
            </h3>
            <p className="text-gray-700">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityBadges;
