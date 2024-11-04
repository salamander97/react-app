import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import chuaBaiDinh from '../assets/images/congtrinhthicong/chuabaidinh.jpeg';
import mandalaTayThien from '../assets/images/congtrinhthicong/mandalaTayThien.jpg';
import chuaTamChuc from '../assets/images/congtrinhthicong/chuatamchuc.jpeg';
import fansipan from '../assets/images/congtrinhthicong/tuongphatfansipan.jpg';
import { X } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, image, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-amber-500 hover:text-amber-400"
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
    description: "Các công trình chùa Bái Đính",
    image: chuaBaiDinh,
    details: "Chùa Bái Đính là một quần thể chùa lớn với nhiều công trình văn hóa tâm linh độc đáo, là điểm đến thu hút đông đảo phật tử và du khách thập phương.",
    features: ["Điện thờ chính", "Tượng Phật", "Cổng tam quan", "Hành lang La Hán"]
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

const Products = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = productData[productId];
  const [selectedImage, setSelectedImage] = useState(null);

  // Background Mandala Component
  const MandalaBackground = () => (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-black">
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#B8860B" floodOpacity="0.5" />
            </filter>
          </defs>
          {/* Single centered mandala */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 100 100)`}>
              <path 
                d="M100,60 Q120,80 100,100 Q80,80 100,60" 
                fill="none" 
                stroke="#B8860B" 
                strokeWidth="1" 
                filter="url(#shadow)" 
              />
              <path 
                d="M100,40 Q130,70 100,100 Q70,70 100,40" 
                fill="none" 
                stroke="#B8860B" 
                strokeWidth="1" 
                filter="url(#shadow)" 
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );

  // Product list view
// Product list view
if (!product) {
  return (
    <div className="min-h-screen bg-black text-amber-500">
      <MandalaBackground />
      <Header />
      <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-80px)] relative z-10"> {/* 80px là chiều cao của Header */}
        <h1 className="text-3xl font-bold text-center mb-12">Các Công Trình</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {Object.entries(productData).map(([productId, product]) => (
            <Link to={`/products/${productId}`} key={productId} className="group">
              <div className="bg-amber-900/20 rounded-lg overflow-hidden shadow-lg border border-amber-500/30 backdrop-blur-sm h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-amber-500">{product.title}</h3>
                  <p className="text-amber-200 mt-2">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

  // Product detail view
  return (
    <div className="min-h-screen bg-black">
      <MandalaBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-80px)] relative z-10">
        <div className="relative h-96 mb-12">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage({ src: product.image, title: product.title })}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-amber-500">
            {product.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-amber-900/20 p-6 rounded-lg border border-amber-500/30">
              <h2 className="text-2xl text-amber-500 mb-4">Chi tiết công trình</h2>
              <p className="text-amber-200 leading-relaxed">
                {product.details}
              </p>
            </div>

            <div className="backdrop-blur-sm bg-amber-900/20 p-6 rounded-lg border border-amber-500/30">
              <h2 className="text-2xl text-amber-500 mb-4">Đặc điểm nổi bật</h2>
              <ul className="text-amber-200 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-amber-900/20 p-6 rounded-lg border border-amber-500/30">
            <h2 className="text-2xl text-amber-500 mb-4">Hình ảnh công trình</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="aspect-square">
                  <img 
                    src={product.image} 
                    alt={`${product.title} ${num}`}
                    className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
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

        <div className="mt-16">
          <h2 className="text-2xl text-amber-500 mb-8">Các công trình liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(productData)
              .filter(([key, p]) => p.title !== product.title)
              .slice(0, 3)
              .map(([key, relatedProduct]) => (
                <Link 
                  key={key}
                  to={`/products/${relatedProduct.id}`}
                  className="backdrop-blur-sm bg-amber-900/20 rounded-lg overflow-hidden border border-amber-500/30"
                >
                  <img 
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  />
                  <div className="p-4">
                    <h3 className="text-lg text-amber-500">{relatedProduct.title}</h3>
                    <p className="text-amber-200 text-sm mt-2">{relatedProduct.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage?.src}
        title={selectedImage?.title}
      />
    </div>
  );
};

export default Products;