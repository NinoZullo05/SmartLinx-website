import React from "react";
import { Link } from "react-scroll";
import "../stili/FontStyle.css";
import Feature1 from "../images/Feature1.png";
import Feature2 from "../images/Feature2.png";
import Feature3 from "../images/Feature3.png";

const Feature = () => {
  const featureItems = [
    { imageSrc: Feature1, title: "Compatibilità Multi-Platform" },
    { imageSrc: Feature2, title: "Interfaccia Intuitiva e User-Friendly" },
    { imageSrc: Feature3, title: "Sicurezza Avanzata dei Dati" },
  ];

  return (
    <>
      <div className="text-center mb-8 mt-52 dark:text-white" id="feature">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-100 mb-5">
          <Link to="feature" smooth={true} duration={500}>
            Scopri le nostre funzionalità principali
          </Link>
        </h1>
        <h2 className="text-base font-medium text-gray-600 dark:text-gray-300">
          Ecco perché dovresti scegliere la nostra applicazione
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {featureItems.map((feature, index) => (
          <div
            key={index}
            className="w-96 h-80 flex-col justify-start items-center inline-flex"
          >
            <img
              className="w-auto h-48"
              src={feature.imageSrc}
              alt={feature.title}
            />
            <div className="p-4  bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex-col justify-start items-center gap-4 flex">
              <div className="w-72 text-center text-gray-900 dark:text-gray-300 text-xl font-semibold leading-7">
                {feature.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16"></div>
    </>
  );
};

export default Feature;
