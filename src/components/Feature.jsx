import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { featureText } from "../static/StaticText";
import PropTypes from "prop-types";

/**
 * Feature component displays a section of features with images and titles.
 * It uses AOS for animations and react-scroll for smooth scrolling.
 * 
 * @component
 * @example

 */
export default function Feature() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="text-center pb-8 pt-20" id="features">
        <h1 className="text-4xl font-bold text-text_bold_light dark:text-text_bold_dark mb-5" data-aos="zoom-in-down">
          <Link to="feature" smooth={true} duration={500}>
            {featureText.heading}
          </Link>
        </h1>
        <h2 className="text-base font-medium text-text_bold_light dark:text-text_bold_dark" data-aos="zoom-in-left">
          {featureText.subheading}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {featureText.features.map((feature, index) => (
          <div key={index} className="w-96 h-80 flex-col container justify-start items-center inline-flex" data-aos="zoom-out-up">
            <img className="w-auto h-48" src={require(`../images/${feature.imageSrc}`)} alt={feature.title} />
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex-col justify-start items-center gap-4 flex">
              <div className="w-72 text-center text-text_light dark:text-text_bold_dark text-xl font-semibold leading-7">
                {feature.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * PropTypes definitions for the Feature component.
 * 
 * @typedef {Object} FeatureProps
 * @property {string} heading - Heading text displayed at the top of the feature section.
 * @property {string} subheading - Subheading text displayed below the heading.
 * @property {string} imageSrc - Image source for each feature, expected to be a string (file path).
 * @property {string} title - Title for each feature card.
 */

Feature.propTypes = {
  /** Heading text displayed at the top of the feature section */
  heading: PropTypes.string.isRequired,

  /** Subheading text displayed below the heading */
  subheading: PropTypes.string.isRequired,

  /** Image source for each feature, expected to be a string (file path) */
  imageSrc: PropTypes.string.isRequired,

  /** Title for each feature card */
  title: PropTypes.string.isRequired,
};
