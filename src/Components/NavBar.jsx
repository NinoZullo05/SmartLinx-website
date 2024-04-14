import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Immagine from "../images/Logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    useEffect(() => {
        if (isMenuOpen) {
            const menuHeight = menuRef.current.offsetHeight;
            menuRef.current.style.marginBottom = `${menuHeight}px /2`;
        } else {
            menuRef.current.style.marginBottom = '0';
        }
    }, [isMenuOpen]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    return (
        <nav className="fixed w-full z-20 top-0 backdrop-filter backdrop-blur-lg bg-opacity-15">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Immagine} className="h-8" alt="SmartLinx Logo" />
                    <div className="flex-shrink-0">
                        <span className="font-bold text-3xl text-black">Smart</span>
                        <span className="font-bold text-3xl text-[#9E5CF6]">Linx</span>
                    </div>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Apri menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div ref={menuRef} className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                        {['home', 'servizi', 'feature', 'download', 'faq'].map(section => (
                            <li key={section}>
                                <Link
                                    to={section}
                                    smooth={true}
                                    activeClass="active"
                                    className={`block py-2 px-3 text-gray-700 dark:text-gray-700 rounded md:p-0 md:text-[#9E5CF6] cursor-pointer ${activeSection === section ? "bg-[#9E5CF6]" : ""}`}
                                    onSetActive={handleSetActive}
                                >
                                    {capitalizeFirstLetter(section)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
