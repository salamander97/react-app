import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';

const HomePage = () => {
  // Dữ liệu cho các công trình nổi bật
  const featuredProjects = [
    {
      id: 1,
      title: "Đồ thờ Chùa Linh Ứng",
      description: "Bộ đồ thờ hoàn chỉnh cho chánh điện",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Tượng Phật chùa Thiên Mụ",
      description: "Tượng đồng cao 2.5m",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Đồ thờ gia tiên",
      description: "Bộ đồ thờ cho phòng thờ gia đình",
      image: "/api/placeholder/600/400"
    },

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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <div className="App" style={{ paddingBottom: '100px' }}>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-screen">
          <img
            src="/api/placeholder/1920/1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">Đồ Thờ Truyền Thống</h1>
              <p className="text-xl mb-8">Tạo tác những công trình đồ thờ mang đậm bản sắc văn hóa</p>
              <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition duration-300">
                Xem công trình
              </button>
            </div>
          </div>
        </div>

        {/* Giới thiệu ngắn */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Về Chúng Tôi</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Với hơn 20 năm kinh nghiệm trong lĩnh vực thúc đồng mỹ nghệ,
              chúng tôi tự hào mang đến những sản phẩm đồ thờ chất lượng cao,
              góp phần gìn giữ và phát huy các giá trị văn hóa truyền thống.
            </p>
          </div>
        </section>

        {/* Công trình tiêu biểu */}
        <section className="py-16 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Công Trình Tiêu Biểu</h2>
            <Slider {...settings}>
              {featuredProjects.map((project) => (
                <div key={project.id} className="p-4">
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Cam kết */}
        <section className="py-0 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Cam Kết Của Chúng Tôi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-2">
                <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Chất Lượng</h3>
                <p className="text-gray-600">Sử dụng nguyên liệu cao cấp, quy trình sản xuất nghiêm ngặt</p>
              </div>
              <div className="text-center p-2">
                <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-2xl">♦</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Thẩm Mỹ</h3>
                <p className="text-gray-600">Thiết kế tinh xảo, kết hợp giữa truyền thống và hiện đại</p>
              </div>
              <div className="text-center p-2">
                <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-2xl">★</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Uy Tín</h3>
                <p className="text-gray-600">Đảm bảo tiến độ và cam kết chất lượng lâu dài</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
