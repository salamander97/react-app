import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'; // Thêm useLocation
import { motion } from 'framer-motion';
import { productData } from '../data/mediaConfig';
import ProductDetails from './ProductDetails'; // Import ProductDetails
const ProductList = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-black text-amber-500">
      <main className="container mx-auto px-4 py-2 relative z-10">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Light Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-500/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}

          {/* Enhanced Mandala Pattern */}
          <div className="absolute inset-0 bg-black/40">
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="golden-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B8860B" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
              </defs>

              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <g key={angle} transform={`rotate(${angle} 100 100)`}>
                  <path
                    d="M100,60 Q120,80 100,100 Q80,80 100,60"
                    fill="none"
                    stroke="url(#golden-gradient)"
                    strokeWidth="1"
                    filter="url(#glow)"
                    className="animate-pulse-slow"
                  />
                  <path
                    d="M100,40 Q130,70 100,100 Q70,70 100,40"
                    fill="none"
                    stroke="url(#golden-gradient)"
                    strokeWidth="1"
                    filter="url(#glow)"
                    className="animate-pulse-slow"
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Phần liên hệ Head */}
        <div className="relative z-10">
          {/* Enhanced Hero Section */}
          <div className="text-center px-4 py-16 relative">
            {/* Decorative Frame with Buddhist Lotus */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main Frame Container */}
              <div className="absolute inset-4 border border-[#B8860B]/30 rounded-3xl overflow-hidden">
                {/* Gradient Borders */}
                <div className="absolute inset-0">
                  {/* Gradient borders */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent"></div>
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent"></div>
                  <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#B8860B] to-transparent"></div>
                  <div className="absolute right-0 inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#B8860B] to-transparent"></div>
                </div>

                {/* Large Centered Lotus */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Center Circle */}
                    <circle cx="100" cy="100" r="15" fill="#B8860B" className="opacity-30" />

                    {/* Inner Lotus Petals */}
                    {[...Array(8)].map((_, i) => (
                      <path
                        key={`inner-${i}`}
                        d={`M100,100 Q${100 + Math.cos(i * Math.PI / 4) * 30},${100 + Math.sin(i * Math.PI / 4) * 30} 
                               ${100 + Math.cos((i * Math.PI / 4) + Math.PI / 8) * 40},${100 + Math.sin((i * Math.PI / 4) + Math.PI / 8) * 40} 
                               Q${100 + Math.cos((i * Math.PI / 4) + Math.PI / 4) * 30},${100 + Math.sin((i * Math.PI / 4) + Math.PI / 4) * 30} 100,100`}
                        fill="#B8860B"
                        className="opacity-40"
                      />
                    ))}

                    {/* Outer Lotus Petals */}
                    {[...Array(8)].map((_, i) => (
                      <path
                        key={`outer-${i}`}
                        d={`M100,100 Q${100 + Math.cos(i * Math.PI / 4) * 50},${100 + Math.sin(i * Math.PI / 4) * 50} 
                               ${100 + Math.cos((i * Math.PI / 4) + Math.PI / 8) * 70},${100 + Math.sin((i * Math.PI / 4) + Math.PI / 8) * 70} 
                               Q${100 + Math.cos((i * Math.PI / 4) + Math.PI / 4) * 50},${100 + Math.sin((i * Math.PI / 4) + Math.PI / 4) * 50} 100,100`}
                        fill="#B8860B"
                        className="opacity-90"
                      />
                    ))}
                  </svg>
                </div>

                {/* Corner Lotus Decorations */}
                {[
                  { position: 'top-0 left-0', rotate: '0' },
                  { position: 'top-0 right-0', rotate: '90' },
                  { position: 'bottom-0 right-0', rotate: '180' },
                  { position: 'bottom-0 left-0', rotate: '270' }
                ].map((corner, index) => (
                  <div
                    key={index}
                    className={`absolute ${corner.position} w-32 h-32`}
                    style={{ transform: `rotate(${corner.rotate}deg)` }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Corner Lotus */}
                      {[...Array(5)].map((_, i) => (
                        <path
                          key={`petal-${i}`}
                          d={`M0,0 Q20,20 40,0 Q20,-20 0,0`}
                          fill="none"
                          stroke="#B8860B"
                          strokeWidth="1"
                          className="opacity-50"
                          transform={`translate(20, 20) rotate(${i * 45})`}
                        />
                      ))}
                      {/* Lotus Stem */}
                      <path
                        d="M0,40 C20,40 40,20 40,0"
                        fill="none"
                        stroke="#B8860B"
                        strokeWidth="1"
                        className="opacity-70"
                      />
                      {/* Lotus Leaves */}
                      <path
                        d="M10,35 Q25,25 40,35 Q25,45 10,35"
                        fill="#B8860B"
                        className="opacity-30"
                      />
                    </svg>
                  </div>
                ))}

                {/* Side Lotus Decorations */}
                {[...Array(1)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      top: i < 2 ? '50%' : (i === 2 ? '0' : '100%'),
                      left: i % 2 === 0 ? '50%' : (i === 1 ? '0' : '100%'),
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <svg viewBox="0 0 60 60" className="w-16 h-16">
                      {/* Small Lotus Flower */}
                      {[...Array(16)].map((_, j) => (
                        <path
                          key={j}
                          d={`M30,30 Q${30 + Math.cos(j * Math.PI / 4) * 15},${30 + Math.sin(j * Math.PI / 4) * 15} 
                                   ${30 + Math.cos((j * Math.PI / 4) + Math.PI / 8) * 20},${30 + Math.sin((j * Math.PI / 4) + Math.PI / 8) * 20} 
                                   Q${30 + Math.cos((j * Math.PI / 4) + Math.PI / 4) * 15},${30 + Math.sin((j * Math.PI / 4) + Math.PI / 4) * 15} 30,30`}
                          fill="#B8860B"
                          className="opacity-20"
                        />
                      ))}
                    </svg>
                  </div>
                ))}

                {/* Connecting Patterns */}
                <div className="absolute inset-0">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        top: i < 2 ? '0' : 'auto',
                        bottom: i >= 2 ? '0' : 'auto',
                        left: i % 2 === 0 ? '0' : 'auto',
                        right: i % 2 === 1 ? '0' : 'auto',
                        width: '40%',
                        height: '40%'
                      }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Small decorative dots */}
                        {[...Array(20)].map((_, j) => (
                          <circle
                            key={j}
                            cx={i % 2 === 0 ? j * 25 : 100 - j * 10}
                            cy={i < 2 ? j * 25 : 100 - j * 25}
                            r="1"
                            fill="#B8860B"
                            className="opacity-50"
                          />
                        ))}
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Các công trình */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-4xl mx-auto"
            >
              <h1 className="font-philosopher text-xl md:text-6xl font-bold mb-6 relative tracking-wider">
                <span className="relative inline-block px-12 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Các công trình đã & đang thi công
                  <div className="absolute -left-8 -right-8 top-1/2 transform -translate-y-1/2 flex justify-between">
                    <span className="block w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]"></span> {/* Increased width */}
                    <span className="block w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]"></span> {/* Increased width */}
                  </div>
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="font-mono grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">

          {Object.entries(productData).map(([productId, product], index) => (
            <Link
              to={`/products/${productId}`}
              key={productId}
              className={`group transform hover:-translate-y-1 transition-all duration-300
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="bg-amber-900/20 rounded-lg overflow-hidden shadow-lg border border-amber-500/30 
                backdrop-blur-sm h-full hover:shadow-amber-500/20 hover:border-amber-500 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-4 relative">
                  <h3 className="text-xl font-bold text-amber-500 transform group-hover:translate-x-2 transition-transform duration-500">
                    {product.title}
                  </h3>
                  <p className="text-amber-200 mt-2 transform group-hover:translate-x-2 transition-transform duration-500 delay-100">
                    {product.description}
                  </p>
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500/10 to-transparent 
                      transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};
const Products = () => {
  const { id } = useParams();
  const location = useLocation();
  const productId = parseInt(id, 10);
  const currentProduct = productData[productId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Nếu không có id hoặc không tìm thấy sản phẩm, hiển thị danh sách
  if (!currentProduct) {
    return <ProductList />; // Giữ nguyên component ProductList như cũ
  }

  // Nếu có id và tìm thấy sản phẩm, hiển thị chi tiết
  return (
      <ProductDetails product={currentProduct} />
  );
};

export default Products;
