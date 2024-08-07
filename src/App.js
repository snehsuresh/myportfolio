import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Work from './pages/Work'
// import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Work />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;