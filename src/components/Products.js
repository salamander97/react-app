import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'; // Thêm useLocation
import { X } from 'lucide-react';
import chuaBaiDinh from '../assets/images/congtrinhthicong/chuabaidinh.jpeg';
import mandalaTayThien from '../assets/images/congtrinhthicong/mandalaTayThien.jpg';
import chuaTamChuc from '../assets/images/congtrinhthicong/chuatamchuc.jpeg';
import fansipan from '../assets/images/congtrinhthicong/tuongphatfansipan.jpg';
import { motion } from 'framer-motion';

// import video và hình ảnh

const ImageModal = ({ isOpen, onClose, image, title }) => {
  if (!isOpen) return null;

  return (
    <div className="sticky inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-amber-500 hover:text-amber-400 transform hover:rotate-90 transition-all duration-300"
        >
          <X size={32} />
        </button>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <p className="text-amber-500 text-center mt-4 text-lg">{title}</p>
        </div>
      </div>
    </div>
  );
};
const productData = {
  1: {
    id: 1,
    title: "Chùa Bái Đính",
    description: "Các công trình tâm linh tại chùa Bái Đính",
    image: chuaBaiDinh,
    details: "Chùa Bái Đính là một quần thể chùa lớn với nhiều công trình văn hóa tâm linh độc đáo, là điểm đến thu hút đông đảo phật tử và du khách thập phương.",
    subProjects: [
      {
        id: 'bd-1',
        title: 'Trống đồng',
        description: 'Trống đồng được chế tác thủ công với kỹ thuật đúc đồng truyền thống',
        shortDesc: 'Trống đồng nghi lễ với hoa văn tinh xảo',
        images: [
          {
            url: 'trongdong1.jpg',
            caption: 'Trống đồng hoàn thiện'
          },
          {
            url: 'trongdong2.jpg',
            caption: 'Chi tiết hoa văn trống đồng'
          }
        ],
        videos: [
          {
            url: 'video-trong-dong.mp4',
            caption: 'Quá trình chế tác trống đồng'
          }
        ],
        details: `Trống đồng được chế tác bằng phương pháp đúc đồng truyền thống, với các họa tiết được chạm khắc tinh xảo:
        - Đường kính: 1.2m
        - Chiều cao: 0.8m
        - Chất liệu: Đồng nguyên chất
        - Kỹ thuật: Đúc đồng thủ công
        - Hoa văn: Các họa tiết truyền thống`,
        features: [
          'Đúc đồng thủ công truyền thống',
          'Hoa văn chạm khắc tinh xảo',
          'Âm vang chuẩn theo nghi lễ',
          'Độ bền cao'
        ]
      },
      {
        id: 'bd-2',
        title: 'Câu đối - Đại tự',
        description: 'Bộ câu đối và đại tự được chế tác bằng đồng nguyên chất',
        shortDesc: 'Câu đối và đại tự bằng đồng với nét chữ thanh thoát',
        images: [
          {
            url: 'caudoi1.jpg',
            caption: 'Bộ câu đối hoàn thiện'
          },
          {
            url: 'caudoi2.jpg',
            caption: 'Chi tiết chữ đồng'
          }
        ],
        videos: [
          {
            url: 'video-caudoi.mp4',
            caption: 'Quá trình chế tác đồng'
          }
        ],
        details: `Bộ câu đối và đại tự được chế tác công phu với chất liệu đồng nguyên chất:
        - Kích thước: Tùy theo yêu cầu
        - Chất liệu: Đồng đỏ nguyên chất
        - Kỹ thuật: Đúc đồng và chạm khắc thủ công
        - Phong cách: Chữ Hán truyền thống`,
        features: [
          'Thiết kế theo yêu cầu',
          'Chất liệu đồng nguyên chất',
          'Nét chữ sắc sảo',
          'Độ bền cao'
        ]
      },
      {
        id: 'bd-3',
        title: 'Lá đề',
        description: 'Lá đề bằng đồng với hoa văn truyền thống',
        shortDesc: 'Lá đề đồng trang trí kiến trúc',
        images: [
          {
            url: 'lade1.jpg',
            caption: 'Lá đề lắp đặt hoàn thiện'
          },
          {
            url: 'lade2.jpg',
            caption: 'Chi tiết hoa văn lá đề'
          }
        ],
        details: `Lá đề được chế tác tinh xảo từ đồng nguyên chất:
        - Kích thước: Theo thiết kế kiến trúc
        - Chất liệu: Đồng nguyên chất
        - Kỹ thuật: Đúc và chạm khắc thủ công
        - Họa tiết: Theo phong cách truyền thống`,
        features: [
          'Thiết kế phù hợp kiến trúc',
          'Hoa văn tinh xảo',
          'Chống chịu thời tiết tốt',
          'Dễ dàng lắp đặt'
        ]
      },
      {
        id: 'bd-4',
        title: 'Trần bằng đồng',
        description: 'Trần đồng với họa tiết trang trí độc đáo',
        shortDesc: 'Trần đồng nghệ thuật cao cấp',
        images: [
          {
            url: 'trandong1.jpg',
            caption: 'Trần đồng hoàn thiện'
          },
          {
            url: 'trandong2.jpg',
            caption: 'Chi tiết họa tiết trần đồng'
          }
        ],
        videos: [
          {
            url: 'video-tran-dong.mp4',
            caption: 'Quá trình lắp đặt trần đồng'
          }
        ],
        details: `Trần đồng được thiết kế và thi công với kỹ thuật cao:
        - Diện tích: Theo không gian kiến trúc
        - Chất liệu: Đồng nguyên chất
        - Kỹ thuật: Đúc, dập nổi, và lắp đặt thủ công
        - Họa tiết: Kết hợp truyền thống và hiện đại`,
        features: [
          'Thiết kế theo không gian',
          'Họa tiết độc đáo',
          'Lắp đặt chuyên nghiệp',
          'Bảo hành dài hạn'
        ]
      }
    ]
  },
  2: {
    id: 2,
    title: "Đại bảo tháp Mandala",
    description: "Các công trình đại bảo tháp",
    image: mandalaTayThien,
    details: "Đại bảo tháp Mandala là công trình tâm linh độc đáo mang đậm dấu ấn văn hóa Phật giáo Tây Tạng.",
    features: ["Kiến trúc Mandala", "Phù điêu nghệ thuật", "Không gian thiền định", "Bảo tháp trung tâm"]
  },
  3: {
    id: 3,
    title: "Chùa Tam Chúc",
    description: "Các công trình chùa Tam Chúc",
    image: chuaTamChuc,
    details: "Chùa Tam Chúc là quần thể chùa lớn nhất thế giới với kiến trúc độc đáo và không gian tâm linh thanh tịnh.",
    features: ["Điện thờ", "Vườn cảnh quan", "Hồ Tam Chúc", "Tượng Phật"]
  },
  4: {
    id: 4,
    title: "Tượng Phật đỉnh Fansipan",
    description: "Tượng Phật trên đỉnh Fansipan",
    image: fansipan,
    details: "Tượng Phật uy nghi trên đỉnh Fansipan là biểu tượng tâm linh của vùng Tây Bắc.",
    features: ["Tượng Phật", "Bệ đá", "Không gian chiêm bái", "Cảnh quan núi rừng"]
  },
};



const SubProjectCard = ({ project, onClick }) => (
  <div
    onClick={onClick}
    className="group cursor-pointer bg-amber-900/20 rounded-lg overflow-hidden border border-amber-500/30 
    hover:border-amber-500 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/20
    transform hover:-translate-y-1 backdrop-blur-sm"
  >
    <div className="aspect-video relative overflow-hidden">
      <img
        src={project.images[0].url}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative corner effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-500 to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100"></div>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-amber-500 to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-amber-500 to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-200"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300"></div>
          <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-amber-500 to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-300"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-amber-500 to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-400"></div>
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-amber-500 to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-400"></div>
        </div>
      </div>
    </div>
    <div className="p-4 relative overflow-hidden">
      <h3 className="text-xl font-bold text-amber-500 mb-2 transform group-hover:translate-x-2 transition-transform duration-500">
        {project.title}
      </h3>
      <p className="text-amber-200 text-sm transform group-hover:translate-x-2 transition-transform duration-500 delay-100">
        {project.shortDesc}
      </p>
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500/10 to-transparent 
          transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
      </div>
    </div>
  </div>
);

const SubProjectDetail = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`sticky inset-0 bg-black/95 z-50 overflow-y-auto transition-opacity duration-500 
      ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-500 hover:text-amber-400 transform hover:rotate-90 
          transition-all duration-300"
        >
          <X size={32} />
        </button>

        <div className={`max-w-4xl mx-auto transform transition-all duration-700 delay-100
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="font-philosopher font-extrabold text-3xl text-amber-500 mb-6">{project.title}</h2>

          {/* Image Gallery with Fade In */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {project.images.map((image, idx) => (
              <div key={idx} className={`aspect-video rounded-lg overflow-hidden transform transition-all duration-700
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}>
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <p className="text-amber-200 text-sm mt-2 transform hover:translate-x-2 transition-transform duration-300">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>

          {/* Videos with Fade In */}
          {project.videos && (
            <div className={`mb-8 transform transition-all duration-700 delay-500
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="font-quicksand font-extrabold text-xl text-amber-500 mb-4">Videos</h3>
              <div className="grid grid-cols-1 gap-4">
                {project.videos.map((video, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden hover:shadow-lg hover:shadow-amber-500/20 
                    transition-shadow duration-300">
                    <video
                      controls
                      className="w-full rounded-lg"
                      src={video.url}
                    />
                    <p className="font-quicksand font-extrabold text-amber-200 text-sm mt-2">{video.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Details with Fade In */}
          <div className={`bg-amber-900/20 p-6 rounded-lg mb-8 backdrop-blur-sm border border-amber-500/30
            transform transition-all duration-700 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '600ms' }}>
            <h3 className="font-quicksand font-extrabold text-xl text-amber-500 mb-4">Chi tiết</h3>
            <div className="font-quicksand font-bold text-amber-200 whitespace-pre-line">
              {project.details}
            </div>
          </div>

          {/* Features with Fade In */}
          <div className={`bg-amber-900/20 p-6 rounded-lg backdrop-blur-sm border border-amber-500/30
            transform transition-all duration-700 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '700ms' }}>
            <h3 className="font-quicksand font-extrabold text-xl text-amber-500 mb-4">Đặc điểm nổi bật</h3>
            <ul className="grid grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <li key={idx} className={`font-quicksand font-bold flex items-center space-x-2 text-amber-200 transform transition-all duration-500
                  hover:translate-x-2`}
                  style={{ transitionDelay: `${800 + idx * 100}ms` }}>
                  <span className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; const ProductList = () => {
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
        <div className="font-mono grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- pb-8">

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

const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Add this

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [location.pathname]); // Add location.pathname as dependencyCác

  return (
      <main className="contsainer mx-auto px-4 py-8 relative z-10"> {/* Bỏ min-h-[calc(100vh-80px)] */}
        {/* Hero Section */}
        <div className={`relative h-96 mb-12 overflow-hidden rounded-lg transform transition-all duration-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute inset-0 transform hover:scale-110 transition-transform duration-1000">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage({ src: product.image, title: product.title })}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 group">
            <h1 className="font-philosopher font-extrabold text-4xl text-amber-500 transform hover:translate-x-2 transition-all duration-500 relative">
              {product.title}
              {/* Underline decoration */}
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent" />
              {/* Optional: Side accent line */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 h-full w-1 bg-gradient-to-b from-amber-500 to-transparent" />
            </h1>
          </div>
        </div>

        {/* Sub Projects Section */}
        {product.subProjects && (
          <div className={`mt-16 transform transition-all duration-1000 
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}>
            <h2 className="font-playfair font-extrabold text-2xl text-amber-500 mb-8">Các hạng mục công trình</h2>
            <div className="font-quicksand font-extrabold  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.subProjects.map((project, index) => (
                <div key={project.id}
                  className="transform transition-all duration-700"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}>
                  <SubProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Details Section */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 transform transition-all duration-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '400ms' }}>
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-amber-900/20 p-6 rounded-lg border border-amber-500/30 
              hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
              <h2 className="font-quicksand font-extrabold text-2xl text-amber-500 mb-4">Chi tiết công trình</h2>
              <p className="text-amber-200 leading-relaxed">
                {product.details}
              </p>
            </div>

            {product.features && (
              <div className="backdrop-blur-sm bg-amber-900/20 p-6 rounded-lg border border-amber-500/30
                hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                <h2 className="font-quicksand font-extrabold text-2xl text-amber-500 mb-4">Đặc điểm nổi bật</h2>
                <ul className="font-quicksand font-extrabold text-amber-200 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 transform hover:translate-x-2 transition-transform duration-300">
                      <span className="w-2 h-2 bg-amber-500 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="backdrop-blur-sm bg-amber-900/20 p-6 rounded-lg border border-amber-500/30
            hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
            <h2 className="font-quicksand font-extrabold text-2xl text-amber-500 mb-4">Hình ảnh công trình</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="aspect-square overflow-hidden rounded-lg group">
                  <img
                    src={product.image}
                    alt={`${product.title} ${num}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage({
                      src: product.image,
                      title: `${product.title} - Hình ${num}`
                    })}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className={`mt-16 transform transition-all duration-1000 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '600ms' }}>
          <h2 className="font-quicksand text-2xl font-extrabold text-amber-500 mb-8">Các công trình liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(productData)
              .filter(([key, p]) => p.id !== product.id)
              .slice(0, 3)
              .map(([key, relatedProduct], index) => (
                <Link
                  key={key}
                  to={`/products/${relatedProduct.id}`}
                  className={`font-quicksand font-extrabold backdrop-blur-sm bg-amber-900/20 rounded-lg overflow-hidden border border-amber-500/30
                    hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg text-amber-500 hover:translate-x-2 transition-transform duration-300">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-amber-200 text-sm mt-2">{relatedProduct.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        {/* Modals */}
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage?.src}
          title={selectedImage?.title}
        />
  
        {selectedProject && (
          <SubProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </main>


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

  if (!currentProduct) {
    return <ProductList />;
  }

  return <ProductDetail product={currentProduct} />;
};

export default Products;