import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import chuaBaiDinh from '../assets/images/congtrinhthicong/chuabaidinh.jpeg';
import mandalaTayThien from '../assets/images/congtrinhthicong/mandalaTayThien.jpg';
import chuaTamChuc from '../assets/images/congtrinhthicong/chuatamchuc.jpeg';
import fansipan from '../assets/images/congtrinhthicong/tuongphatfansipan.jpg';
import xuongducdong from '../assets/images/congtrinhthicong/xuongthucdong.webp';
import homeNghenhanngoilam from '../assets/images/congtrinhthicong/home-nghenhanngoilam.jpeg';

const HomePage = () => {
  const featuredProjects = [
    { id: 1, title: "Chùa Bái Đính", description: "Các công trình chùa Bái Đính", image: chuaBaiDinh },
    { id: 2, title: "Đại bảo tháp Mandala", description: "Các công trình đại bảo tháp", image: mandalaTayThien },
    { id: 3, title: "Chùa Tam Chúc", description: "Các công trình chùa Tam Chúc", image: chuaTamChuc },
    { id: 4, title: "Tượng Phật đỉnh Fansipan", description: "Tượng Phật trên đỉnh Fansipan", image: fansipan },
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
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="App w-full overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-gray-900 pt-20">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-black/40 z-10"> {/* Giảm độ mờ từ 60% xuống 40% */}
          {/* First pattern layer - Large mandala */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200"> {/* Tăng opacity của hoạ tiết */}
            <defs>
              <pattern id="large-mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <defs>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FFA500" floodOpacity="0.5" />
                  </filter>
                </defs>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <g key={angle} transform={`rotate(${angle} 100 100)`}>
                    <path d="M100,60 Q120,80 100,100 Q80,80 100,60" fill="none" stroke="#FFA500" strokeWidth="1" filter="url(#shadow)" />
                    <path d="M100,40 Q130,70 100,100 Q70,70 100,40" fill="none" stroke="#FFA500" strokeWidth="1" filter="url(#shadow)" />
                  </g>
                ))}
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#large-mandala)" />
          </svg>

          {/* Second pattern layer - Small repeated elements */}
        </div>

        {/* Background image */}
        <img src="/api/placeholder/1920/1080" alt="Temple background" className="absolute inset-0 w-full h-full object-cover" />

        {/* Removed gradient overlay */}

        {/* Content */}
        <div className="relative z-30 h-full flex flex-col items-center justify-center text-center w-full px-4">
          <div className="w-full">
            {/* Decorative border */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide">
              Công Trình Phật Giáo
            </h1>
            <h2 className="text-xl md:text-3xl text-yellow-500 font-medium mb-8 tracking-wider">
              CHUYỂN CHÚ MẬT TÔNG & NGHỆ THUẬT TÂM LINH
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Chuyên tạo tác các công trình Phật giáo quy mô lớn, thúc tượng Phật, chế tác Mandala và các tác phẩm chuyển chú Mật tông
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link to="/products">
                <button className="px-6 py-3 md:px-8 md:py-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors duration-300 text-lg tracking-wide">
                  Khám Phá Công Trình
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/30 hover:border-yellow-600 text-white rounded-lg transition-colors duration-300 text-lg tracking-wide">
                  Tư Vấn Dự Án
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Về Chúng Tôi Section */}
      <section className="relative py-12 md:py-24"> {/* Adjusted padding */}
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"> {/* Adjusted gap */}

            {/* Left Column - Image */}
            <div className="relative w-full max-w-xs mx-auto md:max-w-full"> {/* Responsive adjustments */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                {/* Main Image */}
                <div className="relative h-[400px]">
                  <img
                    src={xuongducdong}
                    alt="Xưởng thúc đồng"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-black/40" />
                </div>

                {/* Overlay Small Image */}
                <div className="absolute bottom-4 right-4 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden border-4 border-black/50 shadow-xl">
                  <img
                    src={homeNghenhanngoilam}
                    alt="Nghệ nhân làm việc"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 border-l-2 border-t-2 border-yellow-500/30" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-r-2 border-b-2 border-yellow-500/30" />
            </div>

            {/* Right Column - Content */}
            <div className="text-center md:text-left">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-normal text-yellow-50 mb-4">Về Chúng Tôi</h2> {/* Adjusted font size */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
                  <svg className="w-5 h-5 text-yellow-600/50" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                  </svg>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
                </div>
              </div>

              {/* Content Blocks */}
              <div className="space-y-4 md:space-y-6 text-gray-300"> {/* Adjusted space */}
                <p className="leading-relaxed text-base md:text-lg">
                  Với hơn 20 năm kinh nghiệm trong lĩnh vực thúc đồng mỹ nghệ, chúng tôi tự hào là đơn vị tiên phong trong việc sáng tạo và phát triển các công trình Phật giáo quy mô lớn tại Việt Nam.
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-6 my-4 md:my-8">
                  <div className="text-center p-2 md:p-4 border border-yellow-600/20 rounded-lg bg-yellow-600/5">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2">20+</div>
                    <div className="text-xs md:text-sm text-gray-400">Năm Kinh Nghiệm</div>
                  </div>
                  <div className="text-center p-2 md:p-4 border border-yellow-600/20 rounded-lg bg-yellow-600/5">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2">100+</div>
                    <div className="text-xs md:text-sm text-gray-400">Công Trình Hoàn Thành</div>
                  </div>
                </div>

                <p className="leading-relaxed text-base md:text-lg">
                  Chúng tôi không ngừng nghiên cứu và phát triển để mang đến những công trình độc đáo, kết hợp hài hòa giữa nghệ thuật truyền thống và hiện đại, góp phần bảo tồn và phát huy các giá trị văn hóa Phật giáo.
                </p>

                <Link to="/about">
                  <button className="mt-4 md:mt-8 px-6 py-3 md:px-8 md:py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors duration-300">
                    Tìm Hiểu Thêm
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Công trình tiêu biểu */}
      <section className="py-16 w-full text-white">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-12 text-center">Công Trình Tiêu Biểu</h2>
          <Slider {...settings}>
            {featuredProjects.map((project) => (
              <div key={project.id} className="p-4">
                <Link to={`/products/${project.id}`}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>


      {/* Cam kết */}
      <section className="py-24 relative text-white w-full">
        {/* Background chung đã áp dụng sẵn */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">Cam Kết Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-2">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Chất Lượng</h3>
              <p className="text-gray-300">Sử dụng nguyên liệu cao cấp, quy trình sản xuất nghiêm ngặt</p>
            </div>
            <div className="text-center p-2">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-2xl">♦</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Thẩm Mỹ</h3>
              <p className="text-gray-300">Thiết kế tinh xảo, kết hợp giữa truyền thống và hiện đại</p>
            </div>
            <div className="text-center p-2">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Uy Tín</h3>
              <p className="text-gray-300">Đảm bảo tiến độ và cam kết chất lượng lâu dài</p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default HomePage;
