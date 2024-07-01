import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ProductsPageSectionOne from "./ProductsPageSectionOne";

function ProductsPage() {
  return (
    <>
      <Navbar />
      <div id="home-top" className="snap-y snap-mandatory h-screen overflow-scroll no-scrollbar">
        <div className="snap-start w-full h-screen">
          <ProductsPageSectionOne />
        </div>
        <div className="snap-start w-full h-screen">
          {/* Other content or sections can go here */}
        </div>
        <div className="snap-start w-full h-screen">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
