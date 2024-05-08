import React from "react";
import { Link } from "react-scroll";
import { FaSearch } from "react-icons/fa";

function FAQ() {
  return (
    <>
      <div
        className="bg-[#9E5CF6] mx-6 lg:mx-16 xl:mx-16 mt-5 mb-2 py-7 bg-opacity-20 rounded-lg text-left lg:px-6 xl:px-8 flex flex-col justify-start items-center gap-8 sm:mx-4"
        id="faq"
      >
        <div className="h-auto w-full px-4 flex flex-col justify-start items-center gap-4">
          <div className="h-16 w-full flex flex-col justify-start items-center gap-3">
            <h1 className="text-gray-700 dark:text-gray-300 text-xl font-semibold">
              FAQs
            </h1>
            <h2 className="text-black dark:text-gray-100 text-3xl font-semibold">
              Chiedici qualcosa!
            </h2>
          </div>
        </div>
        <p className="w-full text-gray-700 dark:text-gray-300 text-base font-normal text-center">
          Hai qualche domanda da farci? Siamo qui per risponderti!
        </p>

        <div className="h-9 w-1/4 flex justify-center items-center relative">
          <FaSearch className="absolute left-2 top-2 text-gray-600 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Cerca qui"
            className="w-full lg:max-w-lg mx-auto lg:mx-0 px-2 py-1 pl-8 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow"
          />

          <Link
            to="faq"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          ></Link>
        </div>
      </div>
    </>
  );
}

export default FAQ;
