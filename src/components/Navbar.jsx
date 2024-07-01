import React, { useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LuxLogo from "../images/LuxLogo.jpg";
import PhoneIcon from "../images/icons8-phone-64.png"; // Adjust the path accordingly
import "./Navbar.css"; // Import the custom CSS for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = (section) => {
    setActiveSection(section);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  const handleLinkClick = (path) => {
    navigate(path);
    closeMenu();
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
            <Link to="/" className={`hover:text-gray-300 ${getActiveClass("/")}`}> HOME </Link>

            <div
              className={`relative group ${activeSection === "about-us" ? "overline" : ""}`}
              onMouseEnter={() => handleMouseEnter("about-us")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about-us" className={`hover:text-gray-300 flex items-center ${getActiveClass("/about-us")}`}>
                ABOUT US
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
            </div>

            <div
              className={`relative group ${activeSection === "services" ? "overline" : ""}`}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/services" className={`hover:text-gray-300 flex items-center ${getActiveClass("/services")}`}>
                SERVICES
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
            </div>

            <div
              className={`relative group ${activeSection === "products" ? "overline" : ""}`}
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/products" className={`hover:text-gray-300 flex items-center ${getActiveClass("/products")}`}>
                PRODUCTS
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
            </div>

            <Link to="/quote" className="lg:block hidden px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-400 bg-blue-500 text-white transition duration-300 ease-in-out">Get a Quote</Link>
          </div>

          {/* Right side - Quote Button and Phone Number */}
          <div className="hidden md:flex items-center space-x-4 md:ml-auto lg:ml-0 lg:flex-grow-0 md:flex-grow justify-center text-sm">
            <Link to="/quote" className="lg:hidden px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-400 bg-blue-500 text-white transition duration-300 ease-in-out">
              Get a Quote
            </Link>
            <div className="flex items-center bg-blue-500 px-4 py-2 rounded-full text-white">
              <img src={PhoneIcon} alt="Phone" className="h-4 w-4 mr-2" />
              <span className="text-sm md:text-base">1800 202 930</span>
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
                    <Link to="#about-us" className="block hover:text-blue-500">About Us</Link>
                    <Link to="#psc-difference" className="block hover:text-blue-500">The PSC Difference</Link>
                    <Link to="#careers" className="block hover:text-blue-500">Careers</Link>
                    <Link to="#showroom" className="block hover:text-blue-500">Showroom</Link>
                    <Link to="#testimonials" className="block hover:text-blue-500">Testimonials</Link>
                    <Link to="#faqs" className="block hover:text-blue-500">FAQs</Link>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">RESOURCES</h3>
                    <Link to="#learning-centre" className="block hover:text-blue-500">Learning Centre</Link>
                    <Link to="#buyers-guide" className="block hover:text-blue-500">Buyers Guide</Link>
                    <Link to="#solar-work" className="block hover:text-blue-500">How Does Solar Work?</Link>
                    <Link to="#solar-rebate" className="block hover:text-blue-500">How Does The Solar Rebate Work?</Link>
                    <Link to="#warranty-policy" className="block hover:text-blue-500">Warranty Policy</Link>
                    <Link to="#service-call" className="block hover:text-blue-500">Request A Service Call</Link>
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
                    <Link to="#commercial-solar-power" className="block hover:text-blue-500">Solar Power</Link>
                    <Link to="#commercial-battery-storage" className="block hover:text-blue-500">Battery Storage</Link>
                    <Link to="#commercial-ev-charging" className="block hover:text-blue-500">Electric Vehicle Charging</Link>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">RESIDENTIAL SOLAR</h3>
                    <Link to="#residential-solar-power" className="block hover:text-blue-500">Solar Power</Link>
                    <Link to="#residential-battery-storage" className="block hover:text-blue-500">Battery Storage</Link>
                    <Link to="#residential-ev-charging" className="block hover:text-blue-500">Electric Vehicle Charging</Link>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">BATTERY STORAGE</h3>
                    <Link to="#battery-storage-info" className="block hover:text-blue-500">Why Battery Storage?</Link>
                    <Link to="#battery-storage-brands" className="block hover:text-blue-500">Battery Brands</Link>
                    <Link to="#battery-storage-faqs" className="block hover:text-blue-500">Battery FAQs</Link>
                  </div>
                </>
              )}
              {activeSection === "products" && (
                <>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">SOLAR PANELS</h3>
                    <Link to="#solar-panels-brands" className="block hover:text-blue-500">Brands</Link>
                    <Link to="#solar-panels-info" className="block hover:text-blue-500">Why Solar Panels?</Link>
                    <Link to="#solar-panels-faqs" className="block hover:text-blue-500">FAQs</Link>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">INVERTERS</h3>
                    <Link to="#inverters-brands" className="block hover:text-blue-500">Brands</Link>
                    <Link to="#inverters-info" className="block hover:text-blue-500">Why Inverters?</Link>
                    <Link to="#inverters-faqs" className="block hover:text-blue-500">FAQs</Link>
                  </div>
                  <div className="text-left text-gray-300 p-4">
                    <h3 className="font-bold text-lg mb-2 text-blue-500">BATTERY STORAGE</h3>
                    <Link to="#battery-storage-brands" className="block hover:text-blue-500">Brands</Link>
                    <Link to="#battery-storage-info" className="block hover:text-blue-500">Why Battery Storage?</Link>
                    <Link to="#battery-storage-faqs" className="block hover:text-blue-500">FAQs</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          
          <div className="bg-black text-white h-screen pt-32 lg:hidden p-4 absolute top-0 left-0 right-0 z-40 flex flex-col space-y-4 text-left cursor-pointer">
            <div className={`menu-link w-full pb-2 border-b border-gray-700 flex justify-between items-center ${getActiveClass("/")}`} onClick={() => { closeMenu(); scrollToTop(); }}>
              <span className={`text-lg hover:text-blue-500 ${getActiveClass("/") ? 'text-blue-500 active-link' : ''}`}> HOME </span>
              <span className="text-lg">▼</span>
            </div>
            
            <div className={`menu-link w-full pb-2 border-b border-gray-700 flex justify-between items-center ${getActiveClass("/about-us")}`} onClick={() => handleLinkClick("/about-us")}>
              <span className={`text-lg hover:text-blue-500 ${getActiveClass("/about-us") ? 'text-blue-500 active-link' : ''}`}> ABOUT US </span>
              <span className="text-lg">▼</span>
            </div>
            <div className={`menu-link w-full pb-2 border-b border-gray-700 flex justify-between items-center ${getActiveClass("/services")}`} onClick={() => handleLinkClick("/services")}>
              <span className={`text-lg hover:text-blue-500 ${getActiveClass("/services") ? 'text-blue-500 active-link' : ''}`}> SERVICES </span>
              <span className="text-lg">▼</span>
            </div>
            <div className={`menu-link w-full pb-2 border-b border-gray-700 flex justify-between items-center ${getActiveClass("/products")}`} onClick={() => handleLinkClick("/products")}>
              <span className={`text-lg hover:text-blue-500 ${getActiveClass("/products") ? 'text-blue-500 active-link' : ''}`}> PRODUCTS </span>
              <span className="text-lg">▼</span>
            </div>
            
            <Link to="/quote" className={`menu-link w-full pb-2 border-b border-gray-700 hover:text-blue-500 ${getActiveClass("/quote") ? 'text-blue-500 active-link' : ''}`} onClick={closeMenu}> GET A QUOTE </Link>

            <div className="flex items-center mt-4 bg-blue-500 px-4 py-2 rounded-full text-white">
              <img src={PhoneIcon} alt="Phone" className="h-4 w-4 mr-2" />
              <span className="text-sm md:text-base">1800 202 930</span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
