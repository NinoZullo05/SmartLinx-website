import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faqGridText } from "../static/StaticText";
import { FaWifi, FaDownload, FaLock, FaWrench, FaAndroid, FaUserAlt } from "react-icons/fa";

const iconMap = {
  FaWifi: FaWifi,
  FaDownload: FaDownload,
  FaLock: FaLock,
  FaWrench: FaWrench,
  FaAndroid: FaAndroid,
  FaUserAlt: FaUserAlt
};

export default function FAQGrid() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="md:max-w-full px-4 lg:px-16 xl:px-16 mt-5 mb-10 py-7 rounded-lg overflow-hidden">
      <h2 className="text-2xl font-semibold text-text_FAQ_title_light dark:text-text_FAQ_title_dark flex justify-center mb-5" data-aos="zoom-out-up">
        {faqGridText.heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {faqGridText.questions.map((question, index) => {
          const IconComponent = iconMap[question.icon];
          return (
            <div className="p-6 flex items-start" data-aos="fade-up" key={index}>
              <div className="rounded-full flex items-center justify-center mr-4">
                <IconComponent className="text-gray-400 text-3xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-text_bold_light dark:text-text_bold_dark">
                  {question.title}
                </h3>
                <p className="text-text_light dark:text-text_dark">{question.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
