import React from 'react';

function SectionEight() {
  return (
    <div className="bg-gray-900 text-white h-screen py-10 px-4 md:px-20 lg:px-32 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-10 w-full">
        {/* Form Section */}
        <div className="flex-1 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Are you ready to produce, store, and consume your own energy?
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
            />
            <input
              type="text"
              placeholder="Mobile"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street Address"
                className="p-3 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="p-3 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Post Code"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
            />
            <textarea
              placeholder="How can we help you?"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Contact Information Section */}
        <div className="flex-1 bg-gray-800 p-8 rounded-lg">
          <div className="flex justify-center mb-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold">
              Speak To Us Now
            </button>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/194/194931.png"
              alt="Award 1"
              className="w-16 h-16"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3068/3068268.png"
              alt="Award 2"
              className="w-16 h-16"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/194/194930.png"
              alt="Award 3"
              className="w-16 h-16"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1040/1040255.png"
              alt="Award 4"
              className="w-16 h-16"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3068/3068250.png"
              alt="Award 5"
              className="w-16 h-16"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Penrith Solar Centre</h3>
            <p>130A Batt Street, Jamisontown NSW 2750</p>
            <p>Ph: 1800 202 930</p>
            <p>E: support@penrithsolar.com.au</p>
            <p className="mt-4">
              You're in safe hands with Australia's number one rated solar installer.
            </p>
            <p className="mt-2">
              If you're interested in learning more about solar, contact us today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionEight;
