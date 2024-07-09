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

const Servizi = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <div className="text-center pb-10 pt-20" id="services">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-100 mb-5" data-aos="zoom-in-down">
          {serviceText.heading}
        </h1>
        <h2 className="text-base font-medium text-gray-600 dark:text-gray-300" data-aos="zoom-in-down">
          {serviceText.subheading}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {serviceText.services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <div
              key={index}
              className="w-80 h-80 px-8 py-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border border-purple-500 flex flex-col justify-start items-center gap-2"
              data-aos="zoom-in-down"
            >
              <div className="h-36 flex flex-col justify-start items-center gap-4">
                <IconComponent className="text-purple-500 w-16 h-14 relative" />
                <h1 className="self-stretch text-center text-gray-700 dark:text-gray-200 text-xl font-bold leading-9">
                  {service.title}
                </h1>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <span className="w-64 text-left text-gray-600 dark:text-gray-300 text-sm font-normal leading-tight">
                  {service.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Servizi;
