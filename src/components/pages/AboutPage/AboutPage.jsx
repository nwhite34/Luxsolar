import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

import AboutPageSectionOne from "./AboutPageSectionOne";
import AboutPageSectionTwo from "./AboutPageSectionTwo";
import AboutPageSectionThree from "./AboutPageSectionThree";
import AboutPageSectionFour from "./AboutPageSectionFour";
import AboutPageSectionFive from "./AboutPageSectionFive";
import AboutPageSectionSix from "./AboutPageSectionSix";
import AboutPageSectionSeven from "./AboutPageSectionSeven";
import AboutPageSectionEight from "./AboutPageSectionEight";


function AboutPage() {
  return (
    <>
        <Navbar />

     <div id="home-top" className="snap-y snap-mandatory h-screen overflow-scroll no-scrollbar">
      <div className="snap-start w-full h-screen">
        <AboutPageSectionOne />
      </div>

      <div className="snap-start w-full h-screen">
      <AboutPageSectionTwo />

      </div>
      <div className="snap-start w-full h-screen">
      <AboutPageSectionThree />

      </div>
      
      <div className="snap-start w-full h-screen">
      <AboutPageSectionFour />

      </div>
      <div className="snap-start w-full h-screen">
      <AboutPageSectionFive />

      
      </div>
      <div className="snap-start w-full h-screen">
      <AboutPageSectionSix />

      </div>
      <div className="snap-start w-full h-screen">
      <AboutPageSectionSeven />

      </div>
      <div className="snap-start w-full h-screen">
      <AboutPageSectionEight />

      </div>
      
      <div className="snap-start w-full h-screen">
        
        <Footer />
      </div>
    </div>
  </>
  );
}

export default AboutPage;
