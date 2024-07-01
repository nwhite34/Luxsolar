import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage/AboutPage';
import HomePage from './components/pages/HomePage/HomePage';
import ServicesPage from './components/pages/ServicesPage/ServicesPage';
import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import QuotePage from './components/pages/QuotePage/QuotePage';


import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/quote" element={<QuotePage />} />
            
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;