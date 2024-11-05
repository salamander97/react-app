import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_phone: '',
        user_email: '',
        subject: '',
        message: ''
    });
    const [isVisible, setIsVisible] = useState({});

    // Scroll animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_u4u00ft',
            'template_mlbw7bm',
            formData,
            'OhoWm3Gtb9Rqs-o29'
        )
            .then((result) => {
                console.log('Email gửi thành công:', result.text);
                alert('Tin nhắn của bạn đã được gửi thành công!');
            }, (error) => {
                console.error('Gửi email thất bại:', error.text);
                alert('Đã xảy ra lỗi, vui lòng thử lại.');
            });

        setFormData({
            user_name: '',
            user_phone: '',
            user_email: '',
            subject: '',
            message: ''
        });
    };

    // Background Mandala Component
    return (
        <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
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

            {/* Content Container */}
            <div className="relative z-10 pt-8">
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


                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-4xl mx-auto"
                    >
                        <h1 className="font-philosopher text-4xl md:text-6xl font-bold mb-6 relative tracking-wider">
                            <span className="relative inline-block px-12 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                                Liên Hệ Với Chúng Tôi
                                <div className="absolute -left-8 -right-8 top-1/2 transform -translate-y-1/2 flex justify-between">
                                    <span className="block w-8 h-px bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
                                    <span className="block w-8 h-px bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
                                </div>
                            </span>
                        </h1>
                        <p className="font-quicksand text-xl text-[#FFD700] max-w-3xl mx-auto font-medium leading-relaxed tracking-wide">
                            Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ trong thời gian sớm nhất
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto py-5 px-3 relative z-10">
                {/* Section Title */}


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div id="contact-info"
                        className={`bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/10 animate-on-scroll transition-all duration-1000 transform hover:shadow-2xl hover:shadow-yellow-600/20 ${isVisible['contact-info'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                            }`}>
                        <h2 className="font-quicksand text-3xl font-bold mb-8 text-white text-center">Thông Tin Liên Hệ</h2>

                        <div className="space-y-8">
                            {[
                                { Icon: MapPin, title: "Địa Chỉ", content: "Hữu Bộc - Hồng Thái - Kiến Xương - Thái Bình" },
                                { Icon: Phone, title: "Điện Thoại", content: ["0906.110.450", "0348.266.829"] },
                                { Icon: Mail, title: "Email", content: "dongmyngheviettrung@gmail.com" },
                                { Icon: Clock, title: "Giờ Làm Việc", content: "Thứ 2 - Chủ Nhật: 7:00 - 17:00" }
                            ].map((item, index) => (
                                <div key={index}
                                    className="group flex items-center space-x-6 hover:transform hover:translate-x-2 transition-all duration-300">
                                    <div className="bg-yellow-600/80 backdrop-blur-sm p-4 rounded-lg flex-shrink-0 group-hover:bg-yellow-500 group-hover:shadow-lg group-hover:shadow-yellow-500/50 transition duration-300">
                                        <item.Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
                                        {Array.isArray(item.content) ? (
                                            item.content.map((line, i) => (
                                                <p key={i} className="text-gray-300 group-hover:text-white transition-colors duration-300">{line}</p>
                                            ))
                                        ) : (
                                            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item.content}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div id="contact-form"
                        className={`bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-white/20 animate-on-scroll transition-all duration-1000 transform hover:shadow-2xl hover:shadow-yellow-600/20 ${isVisible['contact-form'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                            }`}>
                        <h2 className="font-quicksand text-3xl font-bold mb-8 text-white text-center">Gửi Tin Nhắn</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { name: "user_name", label: "Họ và tên", type: "text" },
                                    { name: "user_phone", label: "Số điện thoại", type: "tel" }
                                ].map((field) => (
                                    <div key={field.name} className="group">
                                        <label className="font-quicksand block text-gray-50 mb-2">{field.label} *</label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-600 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-yellow-400"
                                            required
                                        />
                                    </div>
                                ))}
                            </div>

                            {[
                                { name: "user_email", label: "Email", type: "email" },
                                { name: "subject", label: "Tiêu đề", type: "text", required: false }
                            ].map((field) => (
                                <div key={field.name} className="group">
                                    <label className="font-quicksand block text-gray-50 mb-2">
                                        {field.label} {field.required !== false && '*'}
                                    </label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-600 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-yellow-400"
                                        required={field.required !== false}
                                    />
                                </div>
                            ))}

                            <div className="group">
                                <label className="font-quicksand block text-gray-50 mb-2">Nội dung *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg h-32 resize-none focus:outline-none focus:border-yellow-600 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-yellow-400"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-600/50 transform hover:-translate-y-1 group"
                            >
                                <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div id="map"
                    className={`mt-16 animate-on-scroll transition-all duration-1000 transform ${isVisible.map ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                    <h2 className="font-philosopher text-3xl font-bold mb-6 text-white text-center">
                        <span className="relative z-10 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                            Bản Đồ
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-400 transform origin-left scale-x-100 transition-transform duration-500"></div>
                        </span>
                    </h2>
                    <div className="w-full h-96 rounded-lg overflow-hidden p-2 hover:shadow-2xl hover:shadow-yellow-600/20 transition-all duration-500 border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.082036375036!2d106.4589138770256!3d20.461823481049308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135f9f3b1aae917%3A0xfe8620c67e9ab993!2zxJDhu5NuZyBt4bu5IG5naOG7hyBWaeG7h3QgVHJ1bmc!5e0!3m2!1sja!2sjp!4v1730612744858!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style >{`
                    @keyframes float {
                        0% { transform: translateY(0) translateX(0); }
                        50% { transform: translateY(-20px) translateX(10px); }
                        100% { transform: translateY(0) translateX(0); }
                    }
                    
                    @keyframes pulse-slow {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 0.6; }
                    }
        
                    @keyframes spin-slow {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
        
                    .animate-pulse-slow {
                        animation: pulse-slow 3s ease-in-out infinite;
                    }
        
                    .animate-spin-slow {
                        animation: spin-slow 30s linear infinite;
                    }
                `}</style>
        </div>
    );
};

export default Contact;
