import React, { useState } from "react";

function AboutPageSectionFive() {
  // Array of review objects, each containing a review text and author
  const reviews = [
    {
      text: "I have never seen or experienced such a hard working, clean and thorough bunch of tradies, and cannot thank them enough for the great job installing my Enphase solar and battery system.",
      author: "Phillip Russo",
    },
    {
      text: "Penrith Solar Centre did an amazing job with my solar installation. The team was professional and efficient, and the system works flawlessly.",
      author: "Jane Smith",
    },
    {
      text: "Excellent service from start to finish. The team was knowledgeable and helped me choose the best system for my needs. Highly recommend Penrith Solar Centre.",
      author: "John Doe",
    },
    {
      text: "The installation process was smooth and hassle-free. The team at Penrith Solar Centre was very professional and ensured everything was perfect.",
      author: "Emily Johnson",
    },
  ];

  // State to keep track of the currently displayed review index
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Function to handle clicking the previous button
  const handlePrevClick = () => {
    // Update the index to the previous review, looping to the last review if at the beginning
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Function to handle clicking the next button
  const handleNextClick = () => {
    // Update the index to the next review, looping to the first review if at the end
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    // Main container with a gradient background, full height, and centered content
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      {/* Section heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
        Here's what our customers are saying
      </h2>

      {/* Container for the review and navigation buttons */}
      <div className="flex items-center space-x-4">
        {/* Previous button */}
        <button onClick={handlePrevClick} className="text-2xl p-2 rounded-full bg-white shadow-md">
          &#8249;
        </button>

        {/* Review display */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
          {/* Star rating */}
          <div className="text-blue-500 text-2xl mb-4">
            &#9733; &#9733; &#9733; &#9733; &#9733;
          </div>
          {/* Review text */}
          <p className="text-gray-800 italic mb-4">"{reviews[currentReviewIndex].text}"</p>
          {/* Review author */}
          <p className="text-gray-600 font-semibold">{reviews[currentReviewIndex].author}</p>
        </div>

        {/* Next button */}
        <button onClick={handleNextClick} className="text-2xl p-2 rounded-full bg-white shadow-md">
          &#8250;
        </button>
      </div>

      {/* Button for viewing more testimonials */}
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        More testimonials
      </button>
    </div>
  );
}

export default AboutPageSectionFive;
