import { React, useEffect } from "react";
import {
  AiOutlineDownload,
  AiOutlineSetting,
  AiOutlineReload,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Service component for displaying the services provided by the application.
 * @returns {JSX.Element} - The JSX element for the Service component.
 */
const Servizi = () => {
  // Array containing service data
  const serviziData = [
    {
      Icon: <AiOutlineDownload className="text-purple-500 w-16 h-14 relative" />,
      Title: "Remote Installation and Configuration",
      Description:
        "We offer a comprehensive service for installing and configuring the app on your mobile device. Our team will be available to guide you through the process and ensure that the app is properly integrated with the Zigbee hub and your smart devices.",
    },
    {
      Icon: <AiOutlineSetting className="text-purple-500 w-16 h-14 relative" />,
      Title: "Personalized Technical Support",
      Description:
        "We provide dedicated technical support to address any issues or questions regarding the use of the app. Our team will be available to provide remote support and resolve any issues promptly and professionally.",
    },
    {
      Icon: <AiOutlineReload className="text-purple-500 w-16 h-14 relative" />,
      Title: "Continuous Updates and Improvements",
      Description:
        "We are committed to providing regular updates to the app to ensure that it is always up-to-date with the latest features and improvements. Our users will have access to new features and improvements to the user experience at no additional cost.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <div className="text-center mb-10 mt-10" id="services">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-100 mb-5" data-aos="zoom-in-down">
          Manage Your Smart Devices with a Click
        </h1>
        <h2 className="text-base font-medium text-gray-600 dark:text-gray-300" data-aos="zoom-in-down">
          The services we provide with our application
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {serviziData.map((service, index) => (
          <div
            key={index}
            className="w-80 h-auto px-8 py-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border border-purple-500 flex flex-col justify-start items-center gap-2"
            data-aos="zoom-in-down"
          >
            <div className="h-36 flex flex-col justify-start items-center gap-4">
              {service.Icon}
              <h1 className="self-stretch text-center text-gray-700 dark:text-gray-200 text-xl font-bold leading-9">
                {service.Title}
              </h1>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <span className="w-64 text-left text-gray-600 dark:text-gray-300 text-sm font-normal leading-tight">
                {service.Description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servizi;
