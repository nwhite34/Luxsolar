import React from "react";

function AboutPageSectionFour() {
  const profileImage = "https://your-image-url.com/image.jpg"; // Replace this URL with the actual URL of the image you want to use

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={profileImage}
            alt="Jake Warner"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Meet <span className="text-blue-400">Jake Warner</span>
          </h2>
          <h3 className="text-xl font-semibold mb-4">
            Hi, I'm Jake Warner, the Director of Penrith Solar Centre.
          </h3>
          <p className="text-gray-700 mb-4">
            Born and raised in Penrith, my journey into the electrical world
            began at the age of 16 when I became one of the youngest employees
            at Integral Energy (now Endeavour Energy). There, I completed my
            electrical apprenticeship and gained a profound understanding of
            our distribution network.
          </p>
          <p className="text-blue-400 hover:underline cursor-pointer">
            Read More ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPageSectionFour;
