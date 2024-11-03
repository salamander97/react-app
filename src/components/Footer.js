import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#B8860B] w-full py-9 flex items-center justify-center">
      <div className="container mx-auto text-center text-white">
        <p className="footer-text text-2xl font-bold" style={{ fontFamily: 'UTM Bienvenue' }}>
          &copy; 2024 ĐỒNG MỸ NGHỆ VIỆT TRUNG. All rights reserved.
        </p>
      </div>
      <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
        {/* Nút gọi điện thoại */}
        <a href="tel:0348266829" className="w-12 h-12 rounded-full bg-[#B8860B] text-white flex items-center justify-center hover:bg-[#916D0A] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Nút email */}
        <a href="mailto:dongmyngheviettrung@gmail.com" className="w-12 h-12 rounded-full bg-[#B8860B] text-white flex items-center justify-center hover:bg-[#916D0A] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
