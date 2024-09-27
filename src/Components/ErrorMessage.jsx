import React from "react";
import PropTypes from "prop-types";
import { errorMessageText } from "../static/StaticText";

/**
 * ErrorMessage component that displays an error message with a heading, description, and a link.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.heading - The heading text for the error message.
 * @param {string} props.description - The description text for the error message.
 * @param {string} props.buttonText - The text to display on the error message button.
 * @param {string} props.buttonLink - The link to navigate when the button is clicked.
 * @example
 * <ErrorMessage heading="Error" description="Something went wrong." buttonText="Go Home" buttonLink="/" />
 */
export default function ErrorMessage() {
    return (
        <div className="px-6 min-h-screen flex flex-grow items-center justify-center bg-bg_light dark:bg-bg_dark">
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-8 text-center shadow-xl">
                <h1 className="mb-4 text-4xl font-bold dark:text-white text-text_light">
                    {errorMessageText.heading}
                </h1>
                <p className="text-gray-600 dark:text-white">{errorMessageText.description}</p>
                <a href={errorMessageText.buttonLink} className="mt-4 inline-block rounded bg-button_light dark:bg-button_dark hover:bg-[#998EFE]/60 px-4 py-2 font-semibold text-white">
                    {errorMessageText.buttonText}
                </a>
            </div>
        </div>
    );
}

ErrorMessage.propTypes = {
    /** The heading text for the error message */
    heading: PropTypes.string.isRequired,
    /** The description text for the error message */
    description: PropTypes.string.isRequired,
    /** The text to display on the error message button */
    buttonText: PropTypes.string.isRequired,
    /** The link to navigate when the button is clicked */
    buttonLink: PropTypes.string.isRequired,
};
