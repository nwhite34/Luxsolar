import React from "react";
import video from '../../videos/headervideo.mp4'; // Make sure the path is correct
import './HomePageSectionOne.css';

function HomePageSectionOne() {
    const navigate = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full h-screen bg-navy-blue">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={video}
                autoPlay
                loop
                muted
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-transparent to-transparent opacity-90"></div>
            <div className="absolute top-24 left-6 md:top-32 md:left-12 lg:top-40 lg:left-20">
                <a href="/" className="text-base md:text-lg lg:text-xl flex items-center text-gray-300 hover:text-white">
                    <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Commercial Solar Services
                </a>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-6 md:p-12 lg:p-20">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-shadow-lg text-center">Commercial Battery Storage</h1>
                <p className="text-2xl md:text-3xl lg:text-4xl mb-8 text-shadow-lg text-center">Clean energy to power your business around the clock</p>
                <div className="mt-4">
                    <button
                        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white flex items-center justify-center"
                        onClick={() => navigate('HomePageSectionTwo')}
                    >
                        <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePageSectionOne;
