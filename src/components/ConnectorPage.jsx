import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ConnectorPage() {
  useEffect(() => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div id="top" className="snap-y snap-mandatory h-screen overflow-scroll no-scrollbar">
        <div className="snap-start w-full h-screen">
          <HomePage />
        </div>
        <div className="snap-start w-full h-screen">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ConnectorPage;
