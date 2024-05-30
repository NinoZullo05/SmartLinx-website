import React from 'react';


export default function ErrorMessage() {

    return (
        <>
            <div class="px-6  min-h-screen flex flex-grow items-center justify-center bg-bg_light dark:bg-bg_dark">
                <div class="rounded-lg bg-gray-100 dark:bg-gray-800 p-8 text-center shadow-xl">
                    <h1 class="mb-4 text-4xl font-bold dark:text-white text-text_light">404</h1>
                    <p class="text-gray-600 dark:text-white">Oops! The page you are looking for could not be found.</p>
                    <a href="/" class="mt-4 inline-block rounded  bg-button_light dark:bg-button_dark hover:bg-[#998EFE]/60 px-4 py-2 font-semibold text-white "> Go back to Home </a>
                </div>
            </div>

        </>
    );

}