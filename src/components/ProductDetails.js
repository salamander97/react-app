// components/ProductDetails.js
import React, { useState, useEffect} from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { productData } from '../data/mediaConfig';
// Di chuyển các components modal vào đây
const ImageModal = ({ isOpen, onClose, image, title }) => {
    if (!isOpen) return null;

    return (
<div className="sticky top 1/2 inset-5 z-50 flex items-center justify-center p-8" >
    <div
        className="relative w-full max-w-4xl mx-auto 
                  bg-gradient-to-br from-stone-900/70 via-amber-900/30 to-zinc-800/60 
                  backdrop-blur-md rounded-xl 
                  border border-stone-400/20 
                  shadow-2xl shadow-black/20 
                  transition-all duration-300
                  hover:border-amber-400/30"
    >
        <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-stone-200 hover:text-amber-400 
                     transform hover:rotate-90 transition-all duration-300
                     drop-shadow-lg"
        >
            <X size={32} />
        </button>
        <div className="relative p-6">
            <img
                src={image}
                alt={title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg
                         ring-1 ring-stone-400/20 shadow-xl shadow-black/20"
            />
            <div className="mt-4 bg-gradient-to-r from-stone-900/60 via-amber-900/30 to-stone-900/60
                          backdrop-blur-sm rounded-lg p-4 
                          border-t border-stone-400/20
                          hover:border-amber-400/30 transition-all duration-300">
                <p className="text-stone-200 text-center text-lg font-medium tracking-wide
                          drop-shadow-lg">{title}</p>
            </div>
        </div>
    </div>
</div>
    );
};

const SubProjectCard = ({ project, productId }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Navigating to:', `/products/${productId}/subproject/${project.id}`);
        navigate(`/products/${productId}/subproject/${project.id}`);
    };

    return (
        <div
            onClick={handleClick}
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
};

const ProductDetails = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <main className="container mx-auto px-4 py-8 relative z-10 ">
                        <button
                onClick={() => navigate('/products')}
                className="group flex items-center gap-2 text-amber-500 hover:text-amber-400 
                         px-4 py-2 rounded-lg border border-amber-500/30 
                         hover:border-amber-500 transition-all duration-300
                         backdrop-blur-sm bg-amber-900/20
                         transform hover:translate-x-1
                         mb-8"
            >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span>Trở về danh sách công trình</span>
            </button>
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

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 transform transition-all duration-1000
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}

                style={{ transitionDelay: '400ms' }}>
                <div className="backdrop-blur-sm bg-amber-900/20 p-6 rounded-lg border border-amber-500/30
                hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300
                flex flex-col h-full">
                    <h2 className="font-quicksand font-extrabold text-2xl text-amber-500 mb-4">
                        Hình ảnh công trình
                    </h2>

                    {/* Thêm flex-1 để grid chiếm hết không gian còn lại */}
                    <div className="grid grid-cols-2 gap-4 flex-1">
                        {product.images.map((image, index) => (
                            <div key={index} className="aspect-square overflow-hidden rounded-lg group">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                                    onClick={() => setSelectedImage({
                                        src: image.src,
                                        title: image.title
                                    })}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-6 h-full flex flex-col">
                    <div className="backdrop-blur-sm bg-amber-900/20 p-6 rounded-lg border border-amber-500/30 
                  hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                        <h2 className="font-quicksand font-extrabold text-2xl text-amber-500 mb-4">Chi tiết công trình</h2>
                        <div className="text-amber-200 space-y-6">
                            {Object.entries(product.details).map(([title, content]) => (
                                <div key={title} className="space-y-2">
                                    <h3 className="font-quicksand font-bold text-xl text-amber-400">{title}</h3>
                                    <p className="leading-relaxed">{content.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {product.features && (
                        <div className="backdrop-blur-sm bg-amber-900/20 p-6 rounded-lg border border-amber-500/30
                    hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                            <h2 className="font-quicksand font-extrabold text-2xl text-amber-500 mb-4">Đặc điểm nổi bật</h2>
                            <div className="space-y-4">
                                {product.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="transform hover:translate-x-2 transition-transform duration-300"
                                    >
                                        <h3 className="font-quicksand font-bold text-amber-400 flex items-center space-x-2">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full" />
                                            <span>{feature.name}</span>
                                        </h3>
                                        <p className="text-amber-200 mt-1 ml-4">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
            {/* Sub Projects Section */}
            {product.subProjects && (
                <div className={`mt-16 transform transition-all duration-1000 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: '200ms' }}>
                    <h2 className="font-playfair font-extrabold text-2xl text-amber-500 mb-8">
                        Các hạng mục công trình
                    </h2>
                    <div className="font-quicksand font-extrabold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.subProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="transform transition-all duration-700"
                                style={{ transitionDelay: `${300 + index * 100}ms` }}
                            >
                                <SubProjectCard
                                    project={project}
                                    productId={product.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Details Section */}

            {/* Related Projects */}
            <div className={`mt-16 transform transition-all duration-1000 
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '600ms' }}>
                <h2 className="font-quicksand text-2xl font-extrabold text-amber-500 mb-8">Các công trình liên quan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(productData)
                        .filter(([key, p]) => p.id !== product.id)
                        .slice(0, 5)
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
            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                image={selectedImage?.src}
                title={selectedImage?.title}
            />

        </main>
    );
};



export default ProductDetails;