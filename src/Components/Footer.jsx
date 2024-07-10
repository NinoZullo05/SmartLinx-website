import React, { useState } from "react";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { FaRegCopyright, FaGithub } from "react-icons/fa";
import { footerText } from "../static/StaticText";

export default function Footer() {
    const [showDetails, setShowDetails] = useState({
        Anes: false,
        Edoardo: false,
        Francesco: false,
        Nino: false,
    });

    const toggleDetails = (name) => {
        setShowDetails((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    const renderUsers = () => {
        return footerText.users.map((user) => (
            <div className="mb-4" key={user.name}>
                <button
                    className="text-neutral-600 dark:text-neutral-200"
                    onClick={() => toggleDetails(user.name)}
                >
                    {user.name}{" "}
                    {showDetails[user.name] ? (
                        <SlArrowDown className="inline" />
                    ) : (
                        <SlArrowRight className="inline" />
                    )}
                </button>
                {showDetails[user.name] && <p>{user.email}</p>}
            </div>
        ));
    };

    return (
        <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
            <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                <div className="mr-12 hidden lg:block">
                    <span>{footerText.contact}</span>
                </div>
                <button
                    className="mr-6 text-neutral-600 dark:text-neutral-200"
                    onClick={() => window.open("https://github.com/SmartLinx-Project")}
                >
                    <FaGithub />
                </button>
            </div>
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start">
                            <FaRegCopyright className="mr-2" />
                            <div className="flex-shrink-0" translate="no">
                                <span className="font-bold text-2xl text-black dark:text-white">Smart</span>
                                <span className="font-bold text-2xl text-[#9E5CF6]">Linx</span>
                            </div>
                        </h6>
                        <p>{footerText.aboutUs}</p>
                    </div>
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            About Us
                        </h6>
                        {renderUsers()}
                    </div>
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Useful Links
                        </h6>
                        {footerText.usefulLinks.map((link, index) => (
                            <p className="mb-4" key={index}>
                                <a
                                    href={link.link}
                                    className="text-neutral-600 dark:text-neutral-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.text}
                                </a>
                            </p>
                        ))}
                    </div>
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5"
                            >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            {footerText.address}
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5"
                            >
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            {footerText.email}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
