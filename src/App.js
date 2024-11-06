import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ContactButton from './components/ContactButton'
function App() {
  useEffect(() => {
    // Fix 100vh cho iOS
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
  
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', () => {
      setTimeout(setVH, 100);
    });
  
    // Prevent elastic scrolling on iOS
    document.body.addEventListener('touchmove', function(e) {
      if (e.target === document.body) {
        e.preventDefault();
      }
    }, { passive: false });
  
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  // MobileDevice();

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#1a1a1a]">
        <Header />
        <ContactButton /> 
        <ScrollToTop />
        <main className="flex-1 relative">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;