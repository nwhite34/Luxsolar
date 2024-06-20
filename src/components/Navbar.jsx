import React, { useState } from "react";
import LuxLogo from "../images/LuxLogo.jpg";
import PhoneIcon from "../images/icons8-phone-64.png"; // Import the phone icon
import "./Navbar.css"; // Import the custom CSS for hamburger menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

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
      <nav className="bg-black text-white font-sans">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <img src={LuxLogo} alt="Logo" className="h-8 mr-4" />
          </div>

          {/* Center - Navigation Links (hidden if width < 1000px) */}
          <div className="hidden lg:flex space-x-6 items-center text-sm">
            <a href="#home" className="hover:text-gray-300">HOME</a>

            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("about-us")}
            >
              <a href="#about-us" className="hover:text-gray-300 flex items-center">
                ABOUT US
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("services")}
            >
              <a href="#services" className="hover:text-gray-300 flex items-center">
                SERVICES
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("products")}
            >
              <a href="#products" className="hover:text-gray-300 flex items-center">
                PRODUCTS
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>

            <a href="#quote" className="lg:block hidden px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Get a Quote</a>
          </div>

          {/* Right side - Quote Button and Phone Number */}
          <div className="hidden md:flex items-center space-x-4 md:ml-auto lg:ml-0 lg:flex-grow-0 md:flex-grow justify-center text-sm">
            <a href="#quote" className="lg:hidden px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Get a Quote</a>
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
        {(activeSection && isHovering) && (
          <div
            className="bg-black text-white p-4 w-full absolute z-40"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
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
                    <h3 className="font-bold text-lg mb-2 text-blue-500">SOLAR SERVICING</h3>
                    <a href="#solar-panel-cleaning" className="block hover:text-blue-500">Solar Panel Cleaning</a>
                    <a href="#solar-bird-proofing" className="block hover:text-blue-500">Solar Panel Bird Proofing</a>
                    <a href="#solar-inverter-repair" className="block hover:text-blue-500">Solar Inverter Repair</a>
                    <a href="#all-services" className="block hover:text-blue-500">All Services</a>
                  </div>
                </>
              )}
              {activeSection === "products" && (
                <>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">SOLAR PRODUCTS</h3>
                    <a href="#solar-panels" className="block hover:text-blue-500">Solar Panels</a>
                    <a href="#solar-batteries" className="block hover:text-blue-500">Solar Batteries</a>
                    <a href="#solar-inverters" className="block hover:text-blue-500">Solar Inverters</a>
                    <a href="#solar-accessories" className="block hover:text-blue-500">Solar Accessories</a>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">ENERGY PRODUCTS</h3>
                    <a href="#energy-storage" className="block hover:text-blue-500">Energy Storage</a>
                    <a href="#energy-management" className="block hover:text-blue-500">Energy Management</a>
                    <a href="#ev-charging" className="block hover:text-blue-500">EV Charging</a>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">ACCESSORIES</h3>
                    <a href="#solar-mounting" className="block hover:text-blue-500">Solar Mounting</a>
                    <a href="#monitoring-systems" className="block hover:text-blue-500">Monitoring Systems</a>
                    <a href="#solar-cables" className="block hover:text-blue-500">Solar Cables</a>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Side Navigation Bar */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black text-white transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 p-6 z-40`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white z-50"></button>
        <nav className="mt-8 text-left">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-700 text-sm">HOME</a>
          <a href="#about-us" className="block px-4 py-2 hover:bg-gray-700 text-sm">ABOUT US</a>
          <a href="#services" className="block px-4 py-2 hover:bg-gray-700 text-sm">SERVICES</a>
          <a href="#products" className="block px-4 py-2 hover:bg-gray-700 text-sm">PRODUCTS</a>
          <a href="#learning-centre" className="block px-4 py-2 hover:bg-gray-700 text-sm">LEARNING CENTRE</a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
