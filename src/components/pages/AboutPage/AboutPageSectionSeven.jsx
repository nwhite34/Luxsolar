import React from "react";

function AboutPageSectionSeven() {
  // Array of award images from Flaticon
  const awards = [
    { src: "https://cdn-icons-png.flaticon.com/512/194/194931.png", alt: "Award 1" },
    { src: "https://cdn-icons-png.flaticon.com/512/3068/3068268.png", alt: "Award 2" },
    { src: "https://cdn-icons-png.flaticon.com/512/194/194930.png", alt: "Award 3" },
    { src: "https://cdn-icons-png.flaticon.com/512/1040/1040255.png", alt: "Award 4" },
    { src: "https://cdn-icons-png.flaticon.com/512/3068/3068250.png", alt: "Award 5" },
    { src: "https://cdn-icons-png.flaticon.com/512/3068/3068251.png", alt: "Award 6" },
  ];

  return (
    // Main container with gradient background, full height, and centered content
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      {/* Section heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-32 sm:mb-10">
        Recognised for <br className="md:hidden" /> Superior Solar Service
      </h2>

      {/* Container for awards using CSS Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6 w-full px-10">
        {awards.map((award, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={award.src}
              alt={award.alt}
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>
        ))}
      </div>

    
    </div>
  );
}

export default AboutPageSectionSeven;
