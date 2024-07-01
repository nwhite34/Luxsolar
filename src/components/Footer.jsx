import React from "react";

function Footer() {
  return (
    <div className="bg-blue-500 text-white h-screen flex flex-col justify-between py-16">
      <div className="container mx-auto px-4 flex-grow flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find out how much you can save with a Solar Energy System from Penrith Solar Centre
          </h2>
          <button className="bg-transparent border border-white text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-blue-900 transition">
            Talk to us today
          </button>
        </div>
        <div className="border-t border-white pt-8 flex flex-col md:flex-row justify-around text-sm text-left md:text-center">
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul>
              <li className="hover:underline">Residential Solar</li>
              <li className="hover:underline">Commercial Solar</li>
              <li className="hover:underline">Solar Servicing</li>
              <li className="hover:underline">Products</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold mb-4">About PSC</h3>
            <ul>
              <li className="hover:underline">About Us</li>
              <li className="hover:underline">The PSC Difference</li>
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">PSC Academy</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold mb-4">Contact</h3>
            <p>130A Batt Street, Jamisontown NSW 2750</p>
            <p>Ph: 1800 202 930</p>
            <p>Email: <span className="hover:underline">support@penrithsolar.com.au</span></p>
            <div className="flex justify-center space-x-4 mt-4">
              <i className="fab fa-twitter text-xl hover:text-gray-400"></i>
              <i className="fab fa-facebook text-xl hover:text-gray-400"></i>
              <i className="fab fa-instagram text-xl hover:text-gray-400"></i>
              <i className="fab fa-youtube text-xl hover:text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <span className="hover:underline">Privacy Policy</span>
            <span className="hover:underline">Terms of Use</span>
          </div>
          <p className="mb-4 md:mb-0">&copy; 2024 Penrith Solar Centre. All rights reserved.</p>
          <p>Website by NickTraiSolutions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
