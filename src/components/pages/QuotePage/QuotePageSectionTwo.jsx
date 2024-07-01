import React from "react";

function QuotePageSectionTwo() {
  return (
    <div className="relative w-full h-screen bg-navy-blue flex justify-center items-center bg-red-300">
      <div className="w-full max-w-6xl p-6 bg-black bg-opacity-75 rounded-md text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8 text-center">
          Are you ready to start your solar journey?
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">First Name *</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone/Mobile *</label>
            <input
              type="tel"
              placeholder="Phone / Mobile Number"
              className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Address Line 1</label>
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Address Line 2</label>
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">City *</label>
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Postcode *</label>
            <input
              type="text"
              placeholder="Postcode"
              className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-xs mb-4">
              We request your postcode and town/city as this info helps us create a personalised solar design quote for your place.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Average quarterly energy bill? *</label>
            <select className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700">
              <option>Please select an option ...</option>
              <option>$0-$250</option>
              <option>$250-$500</option>
              <option>$500-$750</option>
              <option>$750+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">How did you hear about us? *</label>
            <select className="w-full p-2 bg-transparent border-b border-blue-500 focus:outline-none focus:border-blue-700">
              <option>Please select an option ...</option>
              <option>Google</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Referral</option>
              <option>Other</option>
            </select>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuotePageSectionTwo;
