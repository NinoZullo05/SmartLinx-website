import React from "react";
import {
  FaDownload,
  FaLock,
  FaWrench,
  FaAndroid,
  FaUserAlt,
  FaWifi,
} from "react-icons/fa";

/**
 * A functional component that renders a grid of frequently asked questions.
 * @returns {JSX.Element} - The JSX element representing the FAQ grid.
 */
export default function FAQGrid() {
  const questions = [
    {
      title: "Which Zigbee devices are compatible with the app?",
      text:
        "The SmartLinx app is designed to be compatible with a wide range of smart devices that use the Zigbee protocol. This includes smart light bulbs, thermostats, motion sensors, smart plugs, and more. For a complete list of compatible devices, please refer to the official documentation.",
      icon: FaWifi,
    },
    {
      title: "How can I install and configure the app on my mobile device?",
      text:
        "Installing and configuring the SmartLinx app is simple and intuitive. You can download the app for free from the Google Play Store (for Android devices), the App Store (for iOS devices), or from the provided link. Once downloaded, follow the on-screen instructions to complete the installation and configuration process.",
      icon: FaDownload,
    },
    {
      title: "What security measures are in place to protect my personal data?",
      text:
        "The security of your data is a top priority for us. The SmartLinx app uses advanced encryption protocols to protect all communications between the app and the Zigbee hub. Additionally, we strictly adhere to privacy regulations and do not share any personal data with third-party entities without your consent.",
      icon: FaLock,
    },
    {
      title: "Do you offer technical support for the installation and usage of the app?",
      text:
        "Yes, our technical support team is available to provide assistance and support in case of questions or issues related to the installation and usage of the SmartLinx app. You can contact our team via email, phone, or through our website, and we will be happy to help you.",
      icon: FaWrench,
    },
    {
      title: "What are the minimum system requirements to use the app?",
      text:
        "The SmartLinx app is designed to work on a variety of mobile devices, including smartphones and tablets. The minimum system requirements depend on the device's operating system, but generally, it is recommended to use devices with updated versions of Android or iOS for optimal performance.",
      icon: FaAndroid,
    },
    {
      title: "Can I control my Zigbee devices when I'm away from home?",
      text:
        "Yes, with the SmartLinx app, you can control your Zigbee devices from anywhere, as long as you have access to an internet connection. Whether you're at work, on vacation, or just outside your home, you can access the app and manage your devices remotely with ease and convenience.",
      icon: FaUserAlt,
    },
  ];

  return (
    <div className="mx-4 lg:mx-16 xl:mx-16 mt-5 mb-10 py-7 rounded-lg ">
      <h2 className="text-2xl font-semibold text-text_FAQ_title_light dark:text-text_FAQ_title_dark flex justify-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            title={question.title}
            text={question.text}
            icon={question.icon}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * A functional component that renders a single question card.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the question.
 * @param {string} props.text - The text of the question.
 * @param {React.ComponentType} props.icon - The icon component to display.
 * @returns {JSX.Element} - The JSX element representing the question card.
 */
function QuestionCard({ title, text, icon }) {
  const IconComponent = icon;

  return (
    <div className="p-6 flex items-start">
      <div className="rounded-full flex items-center justify-center mr-4">
        <IconComponent className="text-gray-400 text-3xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-text_bold_light dark:text-text_bold_dark">
          {title}
        </h3>
        <p className="text-text_light dark:text-text_dark">{text}</p>
      </div>
    </div>
  );
}

