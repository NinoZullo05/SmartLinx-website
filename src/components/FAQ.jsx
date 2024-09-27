import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { FaSearch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { faqText } from "../static/StaticText"; // Assicurati di avere il percorso corretto per l'importazione

/**
 * FAQ component that displays a frequently asked questions section with a heading, subheading,
 * description, and a search input. This component uses animations from AOS and smooth scrolling
 * from `react-scroll`.
 *
 * @component
 * @example
 * return (
 *   <FAQ />
 * )
 */
export default function FAQ() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      className="bg-bg_FAQ_light dark:bg-bg_FAQ_dark mx-6 lg:mx-16 xl:mx-16 pt-5 mb-2 py-7 bg-opacity-20 rounded-lg text-left lg:px-6 xl:px-8 flex flex-col justify-start items-center gap-8 sm:mx-4"
      id="faq"
      data-aos="fade-up"
    >
      <div className="h-auto w-full px-4 flex flex-col justify-start items-center gap-4">
        <div className="h-16 w-full flex flex-col justify-start items-center gap-3">
          <h1 className="text-text_bold_light dark:text-text_bold_dark text-xl font-semibold">
            {faqText.heading}
          </h1>
          <h2 className="text-text_bold_light dark:text-text_bold_dark text-3xl font-semibold">
            {faqText.subheading}
          </h2>
        </div>
      </div>
      <p className="w-full text-text_bold_light dark:text-text_bold_dark text-base font-normal text-center">
        {faqText.description}
      </p>
      <div className="h-9 w-1/4 flex justify-center items-center relative">
        <FaSearch className="absolute left-2 top-2 text-gray-600 dark:text-gray-300" />
        <input
          type="text"
          placeholder={faqText.searchPlaceholder}
          className="w-full lg:max-w-lg mx-auto lg:mx-0 px-2 py-1 pl-8 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow"
        />
        <Link to="faq" smooth={true} duration={500} className="cursor-pointer"></Link>
      </div>
    </div>
  );
}

// PropTypes per il componente FAQ
FAQ.propTypes = {
  /**
   * The text object containing the heading, subheading, description, and search placeholder for the FAQ.
   */
    /**
     * The main heading of the FAQ section.
     */
    heading: PropTypes.string.isRequired,

    /**
     * The subheading of the FAQ section.
     */
    subheading: PropTypes.string.isRequired,

    /**
     * A description for the FAQ section.
     */
    description: PropTypes.string.isRequired,

    /**
     * Placeholder text for the search input.
     */
    searchPlaceholder: PropTypes.string.isRequired,
};
