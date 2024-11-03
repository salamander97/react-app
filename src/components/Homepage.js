import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';

const HomePage = () => {
  const featuredProjects = [
    { id: 1, title: "Chùa Bái Đính", description: "Các công trình chùa Bái Đính", image: "/api/placeholder/600/400" },
    { id: 2, title: "Đại bảo tháp Mandala", description: "Các công trình đại bảo tháp Mandala", image: "/api/placeholder/600/400" },
    { id: 3, title: "Chùa Tam Chúc", description: "Các công trình chùa Tam Chúc", image: "/api/placeholder/600/400" },
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
      <div className="relative h-[50vh] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/60 z-10">
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
            <pattern id="mandala-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25,0 C35,15 40,20 50,25 C40,30 35,35 25,50 C15,35 10,30 0,25 C10,20 15,15 25,0"
                fill="currentColor" className="text-yellow-200" />
              <circle cx="25" cy="25" r="3" fill="currentColor" className="text-yellow-200" />
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#mandala-pattern)" />
          </svg>
        </div>

        <img src="/api/placeholder/1920/1080" alt="Temple background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-20" />

        <div className="relative z-30 h-full flex flex-col items-center justify-center text-center w-full">
          <div className="w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide">
              Công Trình Phật Giáo
            </h1>
            <h2 className="text-2xl md:text-3xl text-yellow-500 font-medium mb-8 tracking-wider">
              CHUYỂN CHÚ MẬT TÔNG & NGHỆ THUẬT TÂM LINH
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Chuyên tạo tác các công trình Phật giáo quy mô lớn, đúc tượng Phật, chế tác Mạn-đà-la và các tác phẩm chuyển chú Mật tông
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors duration-300 text-lg tracking-wide">
                Khám Phá Công Trình
              </button>
              <button className="px-8 py-4 border-2 border-white/30 hover:border-yellow-600 text-white rounded-lg transition-colors duration-300 text-lg tracking-wide">
                Tư Vấn Dự Án
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Giới thiệu ngắn */}
{/* Về Chúng Tôi Section */}
<section className="relative py-24">
  {/* Content Container */}
  <div className="relative max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Column - Image */}
      <div className="relative">
        {/* Main Image */}
        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/api/placeholder/800/600"
            alt="Về chúng tôi"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-black/40" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-yellow-500/30" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-yellow-500/30" />
      </div>

      {/* Right Column - Content */}
      <div className="text-center md:text-left">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-4xl font-normal text-yellow-50 mb-4">Về Chúng Tôi</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
            <svg className="w-5 h-5 text-yellow-600/50" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed">
            Với hơn 20 năm kinh nghiệm trong lĩnh vực thúc đồng mỹ nghệ, chúng tôi tự hào là đơn vị tiên phong trong việc
            sáng tạo và phát triển các công trình Phật giáo quy mô lớn tại Việt Nam.
          </p>
          
          <div className="grid grid-cols-2 gap-6 my-8">
            <div className="text-center p-4 border border-yellow-600/20 rounded-lg bg-yellow-600/5">
              <div className="text-3xl font-bold text-yellow-500 mb-2">20+</div>
              <div className="text-sm text-gray-400">Năm Kinh Nghiệm</div>
            </div>
            <div className="text-center p-4 border border-yellow-600/20 rounded-lg bg-yellow-600/5">
              <div className="text-3xl font-bold text-yellow-500 mb-2">100+</div>
              <div className="text-sm text-gray-400">Công Trình Hoàn Thành</div>
            </div>
          </div>

          <p className="leading-relaxed">
            Chúng tôi không ngừng nghiên cứu và phát triển để mang đến những công trình độc đáo,
            kết hợp hài hòa giữa nghệ thuật truyền thống và hiện đại, góp phần bảo tồn và phát huy
            các giá trị văn hóa Phật giáo.
          </p>

          {/* CTA Button */}
          <button className="mt-8 px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors duration-300">
            Tìm Hiểu Thêm
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Border Bottom */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent" />
</section>


{/* Công trình tiêu biểu */}
<section className="py-16 w-full text-white">
  <div className="w-full">
    <h2 className="text-3xl font-bold mb-12 text-center">Công Trình Tiêu Biểu</h2>
    <Slider {...settings}>
      {featuredProjects.map((project) => (
        <div key={project.id} className="p-4">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
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
