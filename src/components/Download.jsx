import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LazyImage from "./LazyImage";
import downloadImage from "../images/Download.webp";
import { downloadText } from "../static/StaticText";
import PropTypes from "prop-types";

/**
 * Download component that displays an application download section.
 *
 * This component utilizes the AOS (Animate on Scroll) library for scroll animations
 * and a lazy-loaded image to enhance performance. It provides a button that
 * redirects users to download the application.
 *
 * @component
 * @example
 * <Download />
 */
export default function Download() {
  /**
   * Handles the download action by redirecting to the specified file link.
   */
  const handleDownload = () => {
    window.location.href = downloadText.fileLink;
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      className="mb-32 mt-10 flex justify-center items-center bg-inherit"
      id="download"
    >
      <div className="w-auto mx-auto text-center flex flex-col md:flex-row mt-20">
        <div className="md:w-1/2 md:pr-4 md:pl-8 ml-3 mr-3 flex justify-center items-center">
          <div>
            <h1 className="text-4xl font-bold mb-5" data-aos="zoom-in-down">
              <span className="text-4xl text-text_bold_light dark:text-text_bold_dark">
                Download the official application of{" "}
              </span>
              <span className="font-bold text-3xl text-text_bold_light dark:text-text_bold_dark">
                Smart
              </span>
              <span className="font-bold text-3xl dark:text-text_primary_dark text-text_primary_light">
                Linx
              </span>
            </h1>
            <p
              className="text-lg mb-5 text-text_light dark:text-text_dark"
              data-aos="zoom-in-up"
            >
              {downloadText.description}
            </p>
            <button
              className="text-white dark:text-text_bold_dark px-4 py-2 rounded-lg bg-button_light dark:bg-button_dark hover:bg-[#998EFE]/60 focus:outline-none focus:bg-[#998EFE]/50 mb-4"
              data-aos="zoom-out-up"
              onClick={handleDownload}
            >
              {downloadText.buttonText}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-5 mr-3 ml-3 flex justify-center items-center">
          <LazyImage
            src={downloadImage}
            alt="Download"
            width="450"
            height="300"
            className="max-w-[250px] md:max-w-[450px] mx-auto"
            data-aos="zoom-in-left"
          />
        </div>
      </div>
    </div>
  );
}

// PropTypes per il componente Download
Download.propTypes = {
  /** URL or path for the download image. */
  downloadImage: PropTypes.string.isRequired, // The image for the download section.

  /** Description text for the download section. */
  description: PropTypes.string.isRequired, // The descriptive text displayed above the button.

  /** URL for the file to be downloaded. */
  fileLink: PropTypes.string.isRequired, // The link to the downloadable file.

  /** Text for the download button. */
  buttonText: PropTypes.string.isRequired, // The text displayed on the download button.
};
