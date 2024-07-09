import React from "react";
import { errorMessageText } from "../static/StaticText";

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
