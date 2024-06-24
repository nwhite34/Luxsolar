import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConnectorPage from './components/ConnectorPage';
import AboutPage from './components/pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ConnectorPage />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
