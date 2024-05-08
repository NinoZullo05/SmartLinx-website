import React from "react";
import DownloadImage from "../images/Download.png";
import ParallaxTilt from "react-parallax-tilt";
import "../stili/FontStyle.css";

const Download = () => (
  <div
    className="mb-32 mt-10 flex justify-center items-center bg-inherit"
    id="download"
  >
    <div className="w-auto mx-auto text-center flex flex-col md:flex-row mt-20">
      <div className="md:w-1/2 md:pr-4 md:pl-8 ml-3 mr-3 flex justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold dark:text-text_dark text-text_light] mb-5">
            <span className="font-SFProDisplayBlackItalic text-4xl text-gray-700 dark:text-gray-100">
              Scarica l&apos;applicazione ufficiale di{" "}
            </span>
            <span className="font-bold text-3xl text-black dark:text-white">
              Smart
            </span>
            <span className="font-bold text-3xl dark:text-text_primary_dark text-text_primary_light">Linx</span>
          </h1>
          <p className="text-lg mb-5 text-gray-700 dark:text-gray-300">
            Clicca qui per scaricare l'APK ufficiale:
          </p>
          <button className="text-white px-4 py-2 rounded-lg bg-button_light dark:bg-button_dark hover:bg-[#998EFE]/60 focus:outline-none focus:bg-[#998EFE]/50 mb-4">
            Scarica APK
          </button>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8 mt-5 mr-3 ml-3 flex justify-center items-center">
        <ParallaxTilt>
          <img
            src={DownloadImage}
            alt="Download"
            className="max-w-[250px] md:max-w-[450px] mx-auto"
          />
        </ParallaxTilt>
      </div>
    </div>
  </div>
);


export default Download;