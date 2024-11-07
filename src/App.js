import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import Products from './components/Products';
import SubProjectPage from './components/SubProjectPage';
import Contact from './components/Contact';
import MobileDevice from './components/MobileDevice';
import ScrollToTop from './components/ScrollToTop';
// import ContactButton from './components/ContactButton';

function App() {
  useEffect(() => {
    function setVH() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVH();

    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    document.body.addEventListener('touchmove', function(e) {
      if (this.scrollTop === 0) {
        this.scrollTop = 1;
      } else if (this.scrollHeight === this.scrollTop + this.offsetHeight) {
        this.scrollTop -= 1;
      }
    }, false);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  MobileDevice();

  return (
    <div style={{ position: 'relative' }}>
      <Router>
      <ScrollToTop />
        {/* <ContactButton /> */}
        <div className="flex flex-col min-h-screen bg-[#1a1a1a]">
          <Header />
          <ScrollToTop />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Products />} />
              <Route path="/products/:productId/subproject/:subprojectId" element={<SubProjectPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;