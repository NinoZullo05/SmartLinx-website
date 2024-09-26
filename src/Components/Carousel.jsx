import React, { useState, useEffect, useCallback } from "react";
import onBoarding1 from "../images/test1.webp";
import onBoarding2 from "../images/test2.webp";
import onBoarding3 from "../images/test3.webp";
import { carouselText } from "../static/StaticText";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import LazyImage from "./LazyImage";

/**
 * Carousel component for displaying a series of images with associated descriptions.
 * The component allows users to navigate through the images using next and previous buttons.
 *
 * @component
 * @example
 * @returns <Carousel />
 *
 *
 * @returns {JSX.Element} The rendered carousel component.
 */
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [onBoarding2, onBoarding1, onBoarding3];

  /**
   * Advances to the next slide in the carousel.
   * The current image index is updated after a fade transition.
   * 
   * @function
   * @returns {void}
   */
  const nextSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 300);
  }, [images.length]);

  /**
   * Goes back to the previous slide in the carousel.
   * The current image index is updated after a fade transition.
   * 
   * @function
   * @returns {void}
   */
  const prevSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setFade(true);
    }, 300);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div
      className="pb-36 pt-20 flex justify-center items-center container mx-auto overflow-x-hidden relative custom-scrollbar"
      id="home"
    >
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="text-3xl font-bold text-gray-700 dark:text-gray-300"
        >
          <AiOutlineLeft />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="text-3xl font-bold text-gray-700 dark:text-gray-300"
        >
          <AiOutlineRight />
        </button>
      </div>
      <div
        className={`w-full md:w-auto mx-auto text-center flex flex-col md:flex-row mt-20 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:w-1/2 md:pr-4 md:pl-8 ml-5 mr-3">
          <LazyImage
            src={images[currentImageIndex]}
            alt={`${currentImageIndex + 1}`}
            width="450"
            height="300"
            className="max-w-[450px] w-full h-auto mx-auto"
          />
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

export default Carousel;
