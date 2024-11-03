import React from 'react';

const MandalaBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80 z-10">
    <svg className="absolute inset-0 z-10 w-full h-full opacity-5" viewBox="0 0 100 100">
      <pattern id="mandala-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M25,0 C35,15 40,20 50,25 C40,30 35,35 25,50 C15,35 10,30 0,25 C10,20 15,15 25,0"
          fill="currentColor" className="text-yellow-100" />
        <circle cx="25" cy="25" r="3" fill="currentColor" className="text-yellow-100" />
      </pattern>
      <rect x="0" y="0" width="100" height="100" fill="url(#mandala-pattern)" />
    </svg>
  </div>
);

export default MandalaBackground;
