import React, { useEffect, useState } from 'react';

/**
 * 
 * This component displays a video of the application. It includes a title 
 * and a loading state that shows a placeholder until the video is ready to be played.
 * If the URL hash is set to '#video', it will automatically scroll to this section.
 * 
 */

export default function Video() {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        if (window.location.hash === '#video') {
            const element = document.getElementById('video');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const handleVideoLoad = () => {
        setLoading(false);
    };

    return (
        <div id="video" className="pt-16">
            <div className="flex flex-col items-center mx-4 sm:mx-12">
                <h1 className="text-gray-900 dark:text-gray-100 text-3xl font-bold mb-10 mt-5 mx-5 text-center truncate">
                    Video of our application
                </h1>
                {loading && (
                    <div className="rounded-lg m-auto w-full h-72 sm:w-2/3 md:w-1/2 lg:w-1/2 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                )}
                <iframe
                    src="https://drive.google.com/file/d/1H-Vn528IyPkFmQ2VyvTRhJt44sczlv6A/preview"
                    allow="autoplay"
                    allowFullScreen
                    className={`rounded-lg m-auto w-full h-auto sm:w-2/3 md:w-1/2 lg:w-1/2 ${loading ? 'hidden' : ''}`}
                    style={{ aspectRatio: '16/9' }}
                    title="Video of our application"
                    onLoad={handleVideoLoad}
                ></iframe>
            </div>
        </div>
    );
}

Video.propTypes = {};

