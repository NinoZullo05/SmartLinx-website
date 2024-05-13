import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Feature1 from "../images/Feature1.png";
import Feature2 from "../images/Feature2.png";
import Feature3 from "../images/Feature3.png";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Feature component for displaying application features.
 * @returns {JSX.Element} - The JSX element for the Feature component.
 */

export default function Feature() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const featureItems = [
    { imageSrc: Feature1, title: "Multi-Platform Compatibility" },
    { imageSrc: Feature2, title: "Intuitive and User-Friendly Interface" },
    { imageSrc: Feature3, title: "Advanced Data Security" },
  ];

  return (
    <div className="overflow-hidden">
      <div className="text-center pb-8 pt-20" id="feature">
        <h1 className="text-4xl font-bold text-text_bold_light dark:text-text_bold_dark mb-5" data-aos="zoom-in-down">
          <Link to="feature" smooth={true} duration={500}>
            Discover our main features
          </Link>
        </h1>
        <h2 className="text-base font-medium text-text_bold_light dark:text-text_bold_dark" data-aos="zoom-in-left">
          Here's why you should choose our application
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {featureItems.map((feature, index) => (
          <div
            key={index}
            className="w-96 h-80 flex-col container justify-start items-center inline-flex" data-aos="zoom-out-up">
            <img
              className="w-auto h-48"
              src={feature.imageSrc}
              alt={feature.title}
            />
            <div className="p-4  bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex-col justify-start items-center gap-4 flex">
              <div className="w-72 text-center text-text_light dark:text-text_bold_dark text-xl font-semibold leading-7">
                {feature.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
