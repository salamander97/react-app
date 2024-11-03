import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[15rem] overflow-hidden bg-gray-900"> {/* Đã điều chỉnh chiều cao từ 32rem thành 20rem */}
      {/* Lotus Pattern Background */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
        <pattern id="lotus-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M10,0 C12,5 15,8 20,10 C15,12 12,15 10,20 C8,15 5,12 0,10 C5,8 8,5 10,0" 
                fill="currentColor" className="text-yellow-100" />
        </pattern>
        <rect x="0" y="0" width="100" height="100" fill="url(#lotus-pattern)" />
      </svg>

      {/* Main background image */}
      <img
        src="/api/placeholder/1920/800"
        alt="B"
        className="w-full h-full object-cover object-center opacity-40"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent" />

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Top decorative element */}
        <svg className="w-24 h-24 mb-4 text-yellow-600/40" viewBox="0 0 100 100">
          <path d="M50,0 C60,30 70,40 100,50 C70,60 60,70 50,100 C40,70 30,60 0,50 C30,40 40,30 50,0" 
                fill="currentColor" />
        </svg>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-yellow-50 mb-4 tracking-wide">
            Về Chúng Tôi
          </h1>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
            <svg className="w-5 h-5 text-yellow-600/50" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
          </div>
          
          <p className="text-lg md:text-xl text-yellow-50/80 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Nơi hội tụ tinh hoa nghệ thuật Phật giáo & đồng mỹ nghệ truyền thống
          </p>
        </div>

        {/* Bottom decorative clouds */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-yellow-600/10" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M0,100 C100,20 200,60 400,100 L400,100 L0,100" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-20 h-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-600/30">
          <path d="M0,0 C30,10 40,30 50,100 C60,30 90,10 100,0" 
                fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-20 transform rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-600/30">
          <path d="M0,0 C30,10 40,30 50,100 C60,30 90,10 100,0" 
                fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
