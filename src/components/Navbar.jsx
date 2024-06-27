import React, { useState } from "react";
import LuxLogo from "../images/LuxLogo.jpg";
import PhoneIcon from "../images/icons8-phone-64.png"; // Import the phone icon
import "./Navbar.css"; // Import the custom CSS for hamburger menu
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    navigate('/');
    setTimeout(() => {
      const homeTop = document.getElementById('home-top');
      if (homeTop) {
        homeTop.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (section) => {
    setActiveSection(section);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <nav className="bg-black text-white font-sans fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Left side - Logo */}
          <div className="flex items-center cursor-pointer">
            <Link to="/" onClick={scrollToTop}>
              <img src={LuxLogo} alt="Logo" className="h-8 mr-4" />
            </Link>
          </div>
          {/* Center - Navigation Links (hidden if width < 1000px) */}
          <div className="hidden lg:flex space-x-6 items-center text-sm">
            <Link to="/" className="hover:text-gray-300"> HOME </Link>

            <div
              className={`relative group ${activeSection === "about-us" && (isHovering || activeSection === "about-us") ? "overline" : ""}`}
              onMouseEnter={() => handleMouseEnter("about-us")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about-us" className="hover:text-gray-300 flex items-center">
                ABOUT US
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
            </div>

            <div
              className={`relative group ${activeSection === "services" && (isHovering || activeSection === "services") ? "overline" : ""}`}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#services" className="hover:text-gray-300 flex items-center">
                SERVICES
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>

            <div
              className={`relative group ${activeSection === "products" && (isHovering || activeSection === "products") ? "overline" : ""}`}
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#products" className="hover:text-gray-300 flex items-center">
                PRODUCTS
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>

            <a href="#quote" className="lg:block hidden px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-400 bg-blue-500 text-white transition duration-300 ease-in-out">Get a Quote</a>
          </div>

          {/* Right side - Quote Button and Phone Number */}
          <div className="hidden md:flex items-center space-x-4 md:ml-auto lg:ml-0 lg:flex-grow-0 md:flex-grow justify-center text-sm">
            <a href="#quote" className="lg:hidden px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-400 bg-blue-500 text-white transition duration-300 ease-in-out">Get a Quote</a>
            <div className="flex items-center">
              <img src={PhoneIcon} alt="Phone" className="h-6 mr-2" />
              <span className="text-xl">1800 202 930</span>
            </div>
          </div>

          {/* Hamburger Menu for Mobile (visible if width < 795px) */}
          <div className="lg:hidden flex items-center z-50">
            <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button>
          </div>
        </div>

        {/* Display section under the navbar */}
        {(activeSection && (isHovering || activeSection)) && (
          <div
            className="bg-black text-white p-4 w-full absolute z-40"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              handleMouseLeave();
              setActiveSection(null);
            }}
          >
            <div className="container mx-auto flex justify-around">
              {activeSection === "about-us" && (
                <>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">ABOUT PENRITH SOLAR CENTRE</h3>
                    <a href="#about-us" className="block hover:text-blue-500">About Us</a>
                    <a href="#psc-difference" className="block hover:text-blue-500">The PSC Difference</a>
                    <a href="#careers" className="block hover:text-blue-500">Careers</a>
                    <a href="#showroom" className="block hover:text-blue-500">Showroom</a>
                    <a href="#testimonials" className="block hover:text-blue-500">Testimonials</a>
                    <a href="#faqs" className="block hover:text-blue-500">FAQs</a>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">RESOURCES</h3>
                    <a href="#learning-centre" className="block hover:text-blue-500">Learning Centre</a>
                    <a href="#buyers-guide" className="block hover:text-blue-500">Buyers Guide</a>
                    <a href="#solar-work" className="block hover:text-blue-500">How Does Solar Work?</a>
                    <a href="#solar-rebate" className="block hover:text-blue-500">How Does The Solar Rebate Work?</a>
                    <a href="#warranty-policy" className="block hover:text-blue-500">Warranty Policy</a>
                    <a href="#service-call" className="block hover:text-blue-500">Request A Service Call</a>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">OUR TEAM</h3>
                    <img src="/path/to/team-image.jpg" alt="Team" className="w-full" />
                  </div>
                </>
              )}
              {activeSection === "services" && (
                <>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">COMMERCIAL SOLAR</h3>
                    <a href="#commercial-solar-power" className="block hover:text-blue-500">Solar Power</a>
                    <a href="#commercial-battery-storage" className="block hover:text-blue-500">Battery Storage</a>
                    <a href="#commercial-ev-charging" className="block hover:text-blue-500">Electric Vehicle Charging</a>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">RESIDENTIAL SOLAR</h3>
                    <a href="#residential-solar-power" className="block hover:text-blue-500">Solar Power</a>
                    <a href="#residential-battery-storage" className="block hover:text-blue-500">Battery Storage</a>
                    <a href="#residential-ev-charging" className="block hover:text-blue-500">Electric Vehicle Charging</a>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">BATTERY STORAGE</h3>
                    <a href="#battery-storage-info" className="block hover:text-blue-500">Why Battery Storage?</a>
                    <a href="#battery-storage-brands" className="block hover:text-blue-500">Battery Brands</a>
                    <a href="#battery-storage-faqs" className="block hover:text-blue-500">Battery FAQs</a>
                  </div>
                </>
              )}
              {activeSection === "products" && (
                <>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">SOLAR PANELS</h3>
                    <a href="#solar-panels-brands" className="block hover:text-blue-500">Brands</a>
                    <a href="#solar-panels-info" className="block hover:text-blue-500">Why Solar Panels?</a>
                    <a href="#solar-panels-faqs" className="block hover:text-blue-500">FAQs</a>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">INVERTERS</h3>
                    <a href="#inverters-brands" className="block hover:text-blue-500">Brands</a>
                    <a href="#inverters-info" className="block hover:text-blue-500">Why Inverters?</a>
                    <a href="#inverters-faqs" className="block hover:text-blue-500">FAQs</a>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">BATTERY STORAGE</h3>
                    <a href="#battery-storage-brands" className="block hover:text-blue-500">Brands</a>
                    <a href="#battery-storage-info" className="block hover:text-blue-500">Why Battery Storage?</a>
                    <a href="#battery-storage-faqs" className="block hover:text-blue-500">FAQs</a>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-black text-white lg:hidden p-4 absolute top-0 left-0 right-0 z-40 flex flex-col items-center space-y-4 text-center">
            <Link to="/" onClick={scrollToTop} className="text-lg"> HOME </Link>
            <Link to="/about-us" className="text-lg"> ABOUT US </Link>
            <a href="#services" className="text-lg"> SERVICES </a>
            <a href="#products" className="text-lg"> PRODUCTS </a>
            <a href="#quote" className="px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-400 bg-blue-500 text-white transition duration-300 ease-in-out">Get a Quote</a>
            <div className="flex items-center">
              <img src={PhoneIcon} alt="Phone" className="h-6 mr-2" />
              <span className="text-xl">1800 202 930</span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;