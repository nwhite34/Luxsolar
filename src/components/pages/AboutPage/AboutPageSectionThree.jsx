import React from "react";

function AboutPageSectionThree() {
  const backgroundImage =
    "https://images.unsplash.com/photo-1501746877-14782df58970?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"; // URL of the solar panels image from Unsplash

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex justify-end items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-xl p-8 text-white bg-opacity-50 bg-black m-8 rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h1>
        <hr className="border-t-2 border-blue-400 mb-4" />
        <p className="mb-4">
          We are quality-obsessed tradespeople who have taken responsibility for
          challenging the way people produce, store, and consume their own
          energy.
        </p>
        <p className="mb-4">
          As solar experts and electricians, you can rest assured that we do it
          right the first time – every time.
        </p>
        <p className="mb-4">
          We are Penrith proud, employing over 80 local Western Sydney
          residents. We believe in Penrith passion wherever the sun may shine.
        </p>
        <p className="font-bold mb-6">
          Are you ready to start your solar journey with Penrith Solar Centre?
        </p>
        <button className="px-4 py-2 border-2 border-blue-400 rounded-full text-blue-400 hover:bg-blue-400 hover:text-black">
          Chat to us
        </button>
      </div>
    </div>
  );
}

export default AboutPageSectionThree;
