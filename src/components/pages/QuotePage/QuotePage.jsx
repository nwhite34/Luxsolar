import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

import QuotePageSectionOne from "./QuotePageSectionOne";
import QuotePageSectionTwo from "./QuotePageSectionTwo";



function QuotePage() {
  return (
    <>
        <Navbar />

     <div id="home-top" className="snap-y snap-mandatory h-screen overflow-scroll no-scrollbar">
      <div className="snap-start w-full h-screen">
        <QuotePageSectionOne />
      </div>

      <div className="snap-start w-full h-screen">
        <QuotePageSectionTwo />
      </div>
      
      <div className="snap-start w-full h-screen">
        <Footer />
      </div>
    </div>
  </>
  )};


export default QuotePage;
