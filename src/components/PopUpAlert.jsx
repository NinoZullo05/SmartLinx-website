import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import updateImage from "../images/update.webp";

/**
 * 
 * This component displays a popup alert to inform users about an available update for the app.
 * The alert is visible for 10 seconds and can also be dismissed manually by the user.
 * It includes an image, a title, a description, and a button to scroll to the download section.
 * 
 */

const PopupAlert = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
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
            <div className="flex items-start sm:items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-purple-500">
                <img src={updateImage} alt="Update" className="w-12 h-12 sm:w-16 sm:h-16 mr-4" />
                <div className="flex-1">
                    <div className="flex justify-between items-start sm:items-center">
                        <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200">Update Available</h2>
                        <button onClick={() => setVisible(false)} className="text-gray-700 dark:text-gray-200">
                            <AiOutlineClose className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                        A new version of the app is available. Please update to the latest version for the best experience.
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

PopupAlert.propTypes = {};

export default PopupAlert;
