import React, { useState, useEffect, useCallback } from "react";
import onBoarding1 from "../images/test1.webp";
import onBoarding2 from "../images/test2.webp";
import onBoarding3 from "../images/test3.webp";
import { carouselText } from "../static/StaticText";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import PropTypes from "prop-types";

/**
 * A carousel component that cycles through images with descriptions.
 * 
 * Includes navigation buttons for manual control and auto-slide functionality.
 * Images are lazy-loaded for performance optimization.
 * 
 * @component
 * @example
 * return (     < Carousel />
 * )
 */
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [onBoarding2, onBoarding1, onBoarding3];

  /**
   * Changes the slide in the carousel based on step value.
   * 
   * @param {number} step - The value to increment (or decrement) the current image index.
   */
  const changeSlide = useCallback(
    (step) => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + step + images.length) % images.length);
        setFade(true);
      }, 300);
    },
    [images.length]
  );

  /**
   * Advances to the next slide.
   */
  const nextSlide = useCallback(() => changeSlide(1), [changeSlide]);

  /**
   * Goes back to the previous slide.
   */
  const prevSlide = useCallback(() => changeSlide(-1), [changeSlide]);

  // Auto-slide functionality every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div
      className="pb-36 pt-20 flex justify-center items-center container mx-auto overflow-x-hidden relative custom-scrollbar"
      id="home"
    >
      {/* Previous Slide Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-gray-700 dark:text-gray-300"
      >
        <AiOutlineLeft />
      </button>

      {/* Next Slide Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-gray-700 dark:text-gray-300"
      >
        <AiOutlineRight />
      </button>

      {/* Image and Text */}
      <div
        className={`w-full md:w-auto mx-auto text-center flex flex-col md:flex-row mt-20 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:w-1/2 md:pr-4 md:pl-8 ml-5 mr-3">
          {/* LazyImage component integrated directly */}
          <LazyLoad height={300} offset={100}>
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              width="450"
              height="300"
              loading="lazy"
              className="max-w-[450px] w-full h-auto mx-auto"
            />
          </LazyLoad>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-3 mr-3 ml-3">
          <h1 className="text-gray-900 dark:text-gray-100 md:text-5xl sm:text-5xl text-2xl font-bold md:py-4 mb-5 mt-5 ml-5 mr-5">
            {carouselText[currentImageIndex].heading}
          </h1>
          <p className="md:text-lg text-base font-bold text-gray-700 dark:text-gray-300 ml-5 mr-5 mt-3">
            {carouselText[currentImageIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  /** Array of image URLs or image components. */
  images: PropTypes.arrayOf(PropTypes.string),
  /** Descriptive text for each slide. */
  carouselText: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default Carousel;
