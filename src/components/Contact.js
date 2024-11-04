import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_phone: '',
        user_email: '',
        subject: '',
        message: ''
    });

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
        <div className="relative min-h-screen w-full bg-gray-900">
            {/* Mandala Pattern Background */}
            <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/40">
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

            {/* Content Container */}
            <div className="container mx-auto py-16 px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Liên Hệ Với Chúng Tôi</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ trong thời gian sớm nhất</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
<div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/10">

                        <h2 className="text-3xl font-bold mb-8 text-white text-center">Thông Tin Liên Hệ</h2>

                        <div className="space-y-8">
                            <div className="flex items-center space-x-6">
                            <div className="bg-yellow-600/80 backdrop-blur-sm p-4 rounded-lg flex-shrink-0 hover:bg-yellow-500 transition duration-300">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-white mb-2">Địa Chỉ</h3>
                                    <p className="text-gray-300">Hữu Bộc - Hồng Thái - Kiến Xương - Thái Bình</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6">
                            <div className="bg-yellow-600/80 backdrop-blur-sm p-4 rounded-lg flex-shrink-0 hover:bg-yellow-500 transition duration-300">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-white mb-2">Điện Thoại</h3>
                                    <p className="text-gray-300">0906.110.450</p>
                                    <p className="text-gray-300">0348.266.829</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6">
                            <div className="bg-yellow-600/80 backdrop-blur-sm p-4 rounded-lg flex-shrink-0 hover:bg-yellow-500 transition duration-300">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-white mb-2">Email</h3>
                                    <p className="text-gray-300">dongmyngheviettrung@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6">
                            <div className="bg-yellow-600/80 backdrop-blur-sm p-4 rounded-lg flex-shrink-0 hover:bg-yellow-500 transition duration-300">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-white mb-2">Giờ Làm Việc</h3>
                                    <p className="text-gray-300">Thứ 2 - Chủ Nhật: 7:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-white/20">
                        <h2 className="text-3xl font-bold mb-8 text-white text-center">Gửi Tin Nhắn</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-300 mb-2">Họ và tên *</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-600 text-white placeholder-gray-400"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Số điện thoại *</label>
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        value={formData.user_phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-600 text-white placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-600 text-white placeholder-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Tiêu đề</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-600 text-white placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Nội dung *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg h-32 resize-none focus:outline-none focus:border-yellow-600 text-white placeholder-gray-400"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition duration-300 flex items-center justify-center backdrop-blur-sm"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-6 text-white text-center">Bản Đồ</h2>
                    <div className="w-full h-96 rounded-lg overflow-hidden p-2">
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
        </div>
    );
};

export default Contact;
