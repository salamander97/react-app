import React from 'react';
import { motion } from 'framer-motion';

function ContactButton() {
  return (
    <div 
      className="fixed left-4 top-1/2 -translate-y-1/2 z-[9999]" 
      style={{ 
        position: 'fixed',
        transform: 'translateY(-50%)',
        zIndex: 9999,
      }}
    >
      <div className="flex flex-col gap-2">
        <motion.a
          href="tel:0348266829"
          className="contact-button bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </motion.a>

        <motion.a
          href="mailto:dongmyngheviettrung@gmail.com"
          className="contact-button bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}

export default ContactButton;