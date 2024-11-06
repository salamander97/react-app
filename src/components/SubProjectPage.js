import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { productData } from '../data/mediaConfig';

const SubProjectPage = () => {
    const { productId, subprojectId } = useParams();
    const navigate = useNavigate();
    
    console.log('URL Params:', { productId, subprojectId }); // Debug URL params
    console.log('Product Data:', productData); // Debug full data
    
    // Tìm product trong productData
    const product = productData[productId];
    console.log('Found Product:', product); // Debug product
  
    // Tìm subProject, chuyển đổi ID nếu cần
    const subProject = product?.subProjects?.find(
      p => String(p.id) === String(subprojectId)
    );
    console.log('Found SubProject:', subProject); // Debug subproject
  
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // const touchStartRef = useRef(null);
    // const touchEndRef = useRef(null);
  
    useEffect(() => {
      if (!product || !subProject) {
        console.log('No data found, navigating back...');
        navigate('/products');
        return;
      }
      setIsVisible(true);
      window.scrollTo(0, 0);
    }, [product, subProject, navigate]);
  
    // Return loading state while checking data
    if (!product || !subProject) {
      return (
        <div className="min-h-screen bg-black text-amber-500 flex items-center justify-center">
          Loading...
        </div>
      );
    }

  // Xử lý ảnh
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
      setSelectedImage(subProject.images[currentImageIndex - 1]);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < subProject.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
      setSelectedImage(subProject.images[currentImageIndex + 1]);
    }
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  // Touch handlers for mobile
//   const handleTouchStart = (e) => {
//     touchStartRef.current = {
//       x: e.touches[0].clientX,
//       y: e.touches[0].clientY
//     };
//   };

//   const handleTouchMove = (e) => {
//     touchEndRef.current = {
//       x: e.touches[0].clientX,
//       y: e.touches[0].clientY
//     };
//   };

//   const handleTouchEnd = () => {
//     if (!touchStartRef.current || !touchEndRef.current) return;

//     const deltaY = touchEndRef.current.y - touchStartRef.current.y;
//     const deltaX = touchEndRef.current.x - touchStartRef.current.x;

//     if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 100) {
//       handleCloseImage();
//     } else if (Math.abs(deltaX) > 100) {
//       if (deltaX > 0) {
//         handlePrevImage();
//       } else {
//         handleNextImage();
//       }
//     }

//     touchStartRef.current = null;
//     touchEndRef.current = null;
//   };

  return (
    <div className="min-h-screen bg-black text-amber-500">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate(`/products/${productId}`)}
          className="absolute top-4 right-4 text-amber-500 hover:text-amber-400 transform hover:rotate-90 
            transition-all duration-300"
        >
          <X size={32} />
        </button>

        <div className={`max-w-4xl mx-auto transform transition-all duration-700 delay-100
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="font-philosopher font-extrabold text-3xl text-amber-500 mb-6">
            {subProject.title}
          </h2>

          {/* Image Gallery with Fade In and Horizontal Scroll */}
          {subProject.images && subProject.images.length > 0 && (
            <div className="mb-8 overflow-x-auto">
              <div className="grid grid-flow-col auto-cols-max gap-4 pb-4">
                {subProject.images.map((image, idx) => (
                  <div
                    key={idx}
                    className={`w-80 aspect-video rounded-lg overflow-hidden transform transition-all duration-700 cursor-pointer
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${200 + idx * 100}ms` }}
                    onClick={() => handleImageClick(image, idx)}
                  >
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
            </div>
          )}

          {/* Image Modal with Touch Support */}
          {selectedImage && (


    <div
      className="relative w-full max-w-5xl mx-auto h-auto rounded-lg overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        className="absolute top-2 right-2 text-amber-500 hover:text-amber-400 z-50 
          bg-black/50 p-2 rounded-full transition-colors duration-200"
        onClick={handleCloseImage}
      >
        <X size={24} />
      </button>

      <div className="relative flex flex-col items-center">
        {/* Image container với tỷ lệ cố định */}
        <div className="relative w-full" style={{ maxHeight: '75vh' }}>
          <img
            src={selectedImage.url}
            alt={selectedImage.caption}
            className="w-full h-full object-contain"
          />

          {/* Navigation buttons */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
            {currentImageIndex > 0 && (
              <button
                className="text-amber-500 hover:text-amber-400 bg-black/50 p-2 rounded-full 
                  transform transition-transform hover:scale-110 hidden md:block"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
              >
                ←
              </button>
            )}
            {currentImageIndex < subProject.images.length - 1 && (
              <button
                className="text-amber-500 hover:text-amber-400 bg-black/50 p-2 rounded-full 
                  transform transition-transform hover:scale-110 hidden md:block"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
              >
                →
              </button>
            )}
          </div>
        </div>

        {/* Caption và mobile indicator */}
        <div className="w-full text-center space-y-2 mt-4">
          <p className="text-amber-200 text-sm bg-black/50 px-4 py-2 rounded-full inline-block">
            {selectedImage.caption}
          </p>
        </div>
      </div>
    </div>
)}

          {/* Videos */}
          {subProject.videos && subProject.videos.length > 0 && (
            <div className={`mb-8 transform transition-all duration-700 delay-500
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="font-quicksand font-extrabold text-xl text-amber-500 mb-4">Videos</h3>
              <div className="grid grid-cols-1 gap-4">
                {subProject.videos.map((video, idx) => (
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

          {/* Details */}
          {subProject.details && (
            <div className={`bg-amber-900/20 p-6 rounded-lg mb-8 backdrop-blur-sm border border-amber-500/30
              transform transition-all duration-700 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '600ms' }}>
              <h3 className="font-quicksand font-extrabold text-xl text-amber-500 mb-4">Chi tiết</h3>
              <div className="font-quicksand font-bold text-amber-200 whitespace-pre-line">
                {subProject.details}
              </div>
            </div>
          )}

          {/* Features */}
          {subProject.features && subProject.features.length > 0 && (
            <div className={`bg-amber-900/20 p-6 rounded-lg backdrop-blur-sm border border-amber-500/30
              transform transition-all duration-700 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '700ms' }}>
              <h3 className="font-quicksand font-extrabold text-xl text-amber-500 mb-4">Đặc điểm nổi bật</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subProject.features.map((feature, idx) => (
                  <li key={idx} className={`font-quicksand font-bold flex items-center space-x-2 text-amber-200 transform transition-all duration-500
                    hover:translate-x-2`}
                    style={{ transitionDelay: `${800 + idx * 100}ms` }}>
                    <span className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubProjectPage;