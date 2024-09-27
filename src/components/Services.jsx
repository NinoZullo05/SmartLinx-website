import React, { useEffect } from "react";
import { AiOutlineDownload, AiOutlineSetting, AiOutlineReload } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { serviceText } from "../static/StaticText";

const iconMap = {
  AiOutlineDownload: AiOutlineDownload,
  AiOutlineSetting: AiOutlineSetting,
  AiOutlineReload: AiOutlineReload
};

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="text-center pb-10 pt-20" id="services">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-100 mb-5" data-aos="zoom-in-down">
          {serviceText.heading}
        </h1>
        <h2 className="text-base font-medium text-gray-600 dark:text-gray-300 mb-10" data-aos="zoom-in-down">
          {serviceText.subheading}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 px-4">
        {serviceText.services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <div
              key={index}
              className="w-full sm:w-80 h-96 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border border-transparent hover:border-purple-500 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col"
              data-aos="zoom-in-down"
            >
              <div className="flex-grow flex flex-col justify-center items-center gap-4">
                <IconComponent className="text-purple-500 w-16 h-16" />
                <h1 className="text-center text-gray-700 dark:text-gray-200 text-xl font-bold">
                  {service.title}
                </h1>
              </div>
              <div className="flex-grow">
                <p className="text-left text-gray-600 dark:text-gray-300 text-sm leading-6">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
