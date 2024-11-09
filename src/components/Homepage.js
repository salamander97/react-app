import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Images
import chuaBaiDinh from '../assets/images/congtrinhthicong/chuabaidinh.jpeg';
import mandalaTayThien from '../assets/images/congtrinhthicong/mandalaTayThien.jpg';
import chuaTamChuc from '../assets/images/congtrinhthicong/chuatamchuc.jpeg';
import chuaVangBac from '../assets/images/congtrinhthicong/chuavangchuabac.png';
import xuongducdong from '../assets/images/congtrinhthicong/20220523_150304.jpg';
import homeNghenhanngoilam from '../assets/images/congtrinhthicong/home-nghenhanngoilam.jpeg';
import chuyenKinhLuan from '../assets/images/congtrinhthicong/chuyenkinhluan1.jpg'
// Section Divider Component
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#B8860B] hover:bg-[#FFD700] transition-colors duration-300 group"
  >
    <ChevronLeft className="w-8 h-8 text-white group-hover:text-gray-800" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#B8860B] hover:bg-[#FFD700] transition-colors duration-300 group"
  >
    <ChevronRight className="w-8 h-8 text-white group-hover:text-gray-800" />
  </button>
);
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};
const HomePage = () => {
  const featuredProjects = [
    { id: 1, title: "Chùa Bái Đính", description: "Các công trình chùa Bái Đính", image: chuaBaiDinh },
    { id: 2, title: "Đại bảo tháp Mandala", description: "Các công trình đại bảo tháp", image: mandalaTayThien },
    { id: 3, title: "Chùa Tam Chúc", description: "Các công trình chùa Tam Chúc", image: chuaTamChuc },
    { id: 4, title: "Chùa vàng chùa bạc", description: "Chùa vàng chùa bạc Tràng An", image: chuaVangBac },
    { id: 5, title: "Chuyển kinh luân", description: "Chuyển kinh luân bằng đồng", image: chuyenKinhLuan },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#1a1a1a] ">
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
      <div className="relative z-10 pt-2">
        {/* Enhanced Hero Section */}
        <div className="text-center px-4 py-16 relative">
          {/* Decorative Frame with Buddhist Lotus */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main Frame Container */}
            <div className="absolute inset-4 border border-[#fadf9c]/30 rounded-3xl overflow-hidden">
              {/* Gradient Borders */}
              <div className="absolute inset-0">
                {/* Gradient borders */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#fadf9c] to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#fadf9c] to-transparent"></div>
                <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#fadf9c] to-transparent"></div>
                <div className="absolute right-0 inset-y-0 w-1 bg-gradient-to-b from-transparent via-[#fadf9c] to-transparent"></div>
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
                        stroke="#dec27d"
                        strokeWidth="1"
                        className="opacity-50"
                        transform={`translate(20, 20) rotate(${i * 45})`}
                      />
                    ))}
                    {/* Lotus Stem */}
                    <path
                      d="M0,40 C20,40 40,20 40,0"
                      fill="none"
                      stroke="#dec27d"
                      strokeWidth="1"
                      className="opacity-90"
                    />
                    {/* Lotus Leaves */}
                    <path
                      d="M10,35 Q25,25 40,35 Q25,45 10,35"
                      fill="#dec27d"
                      className="opacity-30"
                    />
                  </svg>
                </div>
              ))}

              {/* Side Lotus Decorations */}
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
                          fill="#f0e5c9"
                          className="opacity-50"
                        />
                      ))}
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <h1 className="font-philosopher text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative">
              <span className="relative inline-block px-12 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                Công Trình Phật Giáo
              </span>
              <span className="block w-8 h-px bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
              <span className="block w-8 h-px bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
            </h1>
            <h2 className="font-cormorant text-xl md:text-3xl text-[#B8860B] font-semibold mb-8 tracking-[0.2em] relative">
              <span className="relative inline-block px-12 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                CHUYỂN CHÚ MẬT TÔNG & NGHỆ THUẬT TÂM LINH
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent"></div>
            </h2>
            <p className="font-cormorant text-base md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 p-2">
              <strong>Chuyên tạo tác các công trình Phật giáo quy mô lớn, thúc tượng Phật, chế tác Mandala và các tác phẩm chuyển chú Mật tông</strong>
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Link to="/products">
                <button className="font-cormorant px-6 py-3 md:px-8 md:py-4 bg-[#B8860B] hover:bg-[#986D0A] text-white rounded-lg transition-all duration-300 text-lg tracking-widest uppercase font-semibold hover:scale-105">
                  Khám Phá Công Trình
                </button>
              </Link>
              <Link to="/contact">
                <button className="font-cormorant px-6 py-3 md:px-8 md:py-4 border-2 border-[#B8860B] hover:border-[#f9f9f9] text-white hover:text-yellow-400 rounded-lg transition-all duration-300 text-lg tracking-widest uppercase font-semibold hover:scale-105">
                  Tư Vấn Dự Án
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Content */}
      <div className="relative">
        {/* Stylized Hero Section */}


        {/* Về Chúng Tôi Section */}
        <section className="relative py-12 md:py-24 px-4 w-full">
          <div className="absolute inset-x-4 md:inset-x-40 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent"></div>
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <motion.div
                className="relative"
                variants={fadeInUp}
              >
                <motion.div
                  className="relative z-10 rounded-lg overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-[400px]">
                    <img
                      src={homeNghenhanngoilam}
                      alt="Nghệ nhân làm việc"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/20 to-black/40" />
                  </div>
                  <motion.div
                    className="absolute bottom-4 right-4 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden border-4 border-black/50 shadow-xl"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <img
                      src={xuongducdong}
                      alt="Xưởng thúc đồng"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#B8860B]/30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#B8860B]/30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                className="text-center md:text-left"
                variants={fadeInUp}
              >
                <motion.h2
                  className="font-philosopher text-4xl font-bold text-white mb-6"
                  variants={fadeInUp}
                >
                  <span className="relative inline-block px-12 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                    Về Chúng Tôi
                  </span>
                </motion.h2>
                <motion.div
                  className="space-y-6 text-gray-300"
                  variants={staggerContainer}
                >
                  <motion.p
                    className="font-quicksand text-base md:text-xl mb-12 max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300" variants={fadeInUp}
                  >
                    Với hơn 20 năm kinh nghiệm trong lĩnh vực thúc đồng mỹ nghệ, chúng tôi tự hào là đơn vị tiên phong trong việc sáng tạo và phát triển các công trình Phật giáo quy mô lớn tại Việt Nam.
                  </motion.p>
                  <motion.div
                    className="grid grid-cols-2 gap-6"
                    variants={staggerContainer}
                  >
                    <motion.div
                      className="p-6 border border-[#B8860B] rounded-lg bg-[#B8860B]/20"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="font-philosopher text-4xl font-bold text-[#B8860B] mb-2">20+</div>
                      <div className="font-philosopher text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300">Năm Kinh Nghiệm</div>
                    </motion.div>
                    <motion.div
                      className="p-6 border border-[#B8860B] rounded-lg bg-[#B8860B]/20"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="font-philosopher text-4xl font-bold text-[#B8860B] mb-2">100+</div>
                      <div className="font-philosopher text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300">Công Trình Hoàn Thành</div>
                    </motion.div>
                  </motion.div>
                  <Link to="/about">
                    <motion.button
                      className="font-philosopher text-xl font-extrabold mt-8 px-8 py-3 bg-[#B8860B] hover:bg-[#986D0A] text-white rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Tìm Hiểu Thêm
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Công trình tiêu biểu Section */}
        <section className="py-12 md:py-24 px-4 w-full">
          <div className="absolute inset-x-2 md:inset-x-40 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent"></div>
          <motion.div
            className="max-w-7xl mx-auto relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="font-philosopher text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center"
              variants={fadeInUp}
            >
              <span className="relative inline-block px-4 sm:px-2 md:px-12 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                Công Trình Tiêu Biểu
              </span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="w-full px-2"
            >
              <Slider {...settings}>
                {featuredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="px-2 md:px-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link to={`/products/${project.slug}`}>  {/* Thay project.id bằng project.slug */}
                      <div className="font-philosopher rounded-lg overflow-hidden shadow-lg 
                    border border-[#B8860B] hover:border-[#FFD700] 
                    bg-[#b8860b66] hover:bg-[#b8870bcd] 
                    transition-all duration-500">
                        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                          <p className="text-gray-100">{project.description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </Slider>
            </motion.div>
          </motion.div>
        </section>

        {/* Cam kết Section */}
        <section className="py-12 md:py-24 px-4 w-full">
          {/* Decorative Frame */}

          <motion.div
            className="py-12 md:py-24 px-4 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="font-playfair text-4xl font-bold text-center tracking-wider bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent mb-12"
              variants={fadeInUp}
            >
              Cam Kết Của Chúng Tôi
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mt-4">
                {/* Thêm lớp glow effect */}
                <div className="w-full h-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50 animate-pulse"></div>
              </div>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {[
                {
                  icon: "✓",
                  title: "Chất Lượng",
                  desc: "Sử dụng nguyên liệu cao cấp, quy trình sản xuất nghiêm ngặt"
                },
                {
                  icon: "♦",
                  title: "Thẩm Mỹ",
                  desc: "Thiết kế tinh xảo, kết hợp giữa truyền thống và hiện đại"
                },
                {
                  icon: "★",
                  title: "Uy Tín",
                  desc: "Đảm bảo tiến độ và cam kết chất lượng lâu dài"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={scaleIn}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-lg" />
                  <motion.div
                    className="relative p-8 border border-[#B8860B]/30 rounded-lg overflow-hidden flex flex-col items-center justify-center text-center"
                    whileHover={{
                      scale: 1.05,
                      borderColor: '#FFD700',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#B8860B]/30 rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#B8860B]/30 rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#B8860B]/30 rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#B8860B]/30 rounded-br-lg" />

                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-[#B8860B] to-[#986D0A] rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg relative z-10"
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                        backgroundImage: 'linear-gradient(to right, #FFD700, #B8860B)'
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="font-playfair text-3xl text-white">{item.icon}</span>
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      className="relative z-10 space-y-4 px-4"
                    >
                      <h3 className="font-playfair text-2xl font-bold text-[#FFD700] tracking-wide mb-6">
                        {item.title}
                        <div className="mt-2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto"></div>
                      </h3>
                      <p className="font-quicksand text-lg font-medium text-gray-200 leading-relaxed max-w-sm mx-auto">
                        {item.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;