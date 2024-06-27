import React, { useEffect } from "react";
import HomePageSectionOne from "./HomePageSectionOne";
import HomePageSectionTwo from "./HomePageSectionTwo";
import HomePageSectionThree from "./HomePageSectionThree";
import Footer from "../Footer";

function HomePage() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        document.documentElement.style.scrollSnapType = 'none';
      } else {
        document.documentElement.style.scrollSnapType = 'y mandatory';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="home-top" className="snap-y snap-mandatory h-screen overflow-scroll no-scrollbar">
      <div className="snap-start w-full h-screen">
        <HomePageSectionOne />
      </div>
      <div className="snap-start w-full h-screen">
        <HomePageSectionTwo />
      </div>
      <div className="snap-start w-full h-screen">
        <HomePageSectionThree />
      </div>
      <div className="snap-start w-full h-screen">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;