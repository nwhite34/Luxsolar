import React from "react";

function ProductsPageSectionOne() {
  const backgroundImage =
    "https://images.unsplash.com/photo-1501746877-14782df58970?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"; // URL of the solar panels image from Unsplash

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Quote</h1>
        <p className="text-lg md:text-xl">
          Get in touch to start your solar journey today with a local team of
          service-obsessed experts
        </p>
      </div>
    </div>
  );
}

export default ProductsPageSectionOne;
