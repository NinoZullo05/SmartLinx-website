import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import updateImage from "../images/update.webp";
import fetchAppVersion from "../scripts/fetchVersion";

const PopupAlert = () => {
    const [visible, setVisible] = useState(true);
    const [data, setData] = useState({ title: '', note: '', version: '' });

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await fetchAppVersion();
            if (fetchedData) {
                setData(fetchedData);
            }
        };

        getData();

        const timer = setTimeout(() => {
            setVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    const handleUpdateClick = () => {
        document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
        setVisible(false);
    };

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-purple-500">
                <img src={updateImage} alt="Update" className=" xs:hidden w-12 h-12 sm:w-16 sm:h-16 mr-0 sm:mr-4 mb-4 sm:mb-0" />
                <div className="flex-1">
                    <div className="flex justify-between items-start sm:items-center">
                        <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200">{data.title}</h2>
                        <button onClick={() => setVisible(false)} className="text-gray-700 dark:text-gray-200">
                            <AiOutlineClose className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {data.note}
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                        Version: {data.version}
                    </p>
                    <button
                        onClick={handleUpdateClick}
                        className="mt-4 w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition duration-300"
                    >
                        Go to Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupAlert;
