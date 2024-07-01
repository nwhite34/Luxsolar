import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

import ServicesPageSectionOne from "./ServicesPageSectionOne";

function ProductsPage() {
  return (
    <>
        <Navbar />

     <div id="home-top" className="snap-y snap-mandatory h-screen overflow-scroll no-scrollbar">
      <div className="snap-start w-full h-screen">
        <ServicesPageSectionOne />
      </div>

      <div className="snap-start w-full h-screen">
       
      </div>
      
      <div className="snap-start w-full h-screen">
        <Footer />
      </div>
    </div>
  </>
  );
}

export default ProductsPage;
