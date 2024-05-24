import React, { useState, useEffect } from "react";
import onBoarding1 from "../images/onBoarding1.png";
import onBoarding2 from "../images/onBoarding2.png";
import onBoarding3 from "../images/onBoarding3.png";

const images = [onBoarding1, onBoarding2, onBoarding3];
const texts = [
  "Check your devices",
  "Sync with your account",
  "Automation",
];

/**
 * Home component for the application.
 * Displays an onboarding carousel with images and text.
 * The carousel automatically changes the displayed image and text every 8 seconds.
 *
 * @returns {JSX.Element} - The Home component.
 */

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % images.length
      );
    }, 8000); // To change the time interval edit this number!!!

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-36 pt-20 flex justify-center items-center container mx-auto overflow-x-hidden" id="home">
      <div className="w-full md:w-auto mx-auto text-center flex flex-col md:flex-row mt-20">
        <div className="md:w-1/2 md:pr-4 md:pl-8 ml-5 mr-3">
          <img
            src={images[currentImageIndex]}
            alt={`${currentImageIndex + 1}`}
            className="max-w-[450px] w-full h-auto mx-auto fade-in"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-3 mr-3 ml-3">
          <h1 className="text-gray-900 dark:text-gray-100 md:text-5xl sm:text-5xl text-2xl font-bold md:py-4 mb-5 mt-5 ml-5 mr-5">
            {texts[currentImageIndex]}
          </h1>
          <p className="md:text-lg text-base font-bold text-gray-700 dark:text-gray-300 ml-5 mr-5 mt-3">
            {currentImageIndex === 0
              ? "Take control of your devices directly in your hands. Thanks to our app."
              : currentImageIndex === 1
                ? "Connect your devices to your profile for instant access to all your preferences and settings."
                : currentImageIndex === 2
                  ? "Our app allows you to automate daily actions of your devices. Easily configure custom scenarios."
                  : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

