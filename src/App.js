import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import MobileDevice from './components/MobileDevice';

function App() {
  MobileDevice();
  return (
    <Router>
      <Header />
      <div className="main-content" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;