import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
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

        // Cấu hình dữ liệu cho EmailJS
        emailjs.send(
            'service_u4u00ft', // Thay thế bằng Service ID của bạn
            'template_mlbw7bm', // Thay thế bằng Template ID của bạn
            formData,           // Gửi dữ liệu từ formData
            'OhoWm3Gtb9Rqs-o29'      // Thay thế bằng User ID của bạn
        )
            .then((result) => {
                console.log('Email gửi thành công:', result.text);
                alert('Tin nhắn của bạn đã được gửi thành công!');
            }, (error) => {
                console.error('Gửi email thất bại:', error.text);
                alert('Đã xảy ra lỗi, vui lòng thử lại.');
            });

        // Xóa trắng form sau khi gửi
        setFormData({
            user_name: '',
            user_phone: '',
            user_email: '',
            subject: '',
            message: ''
        });
    };


    return (
        <div className="App">
            <Header />

            {/* Banner section */}

            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Thông tin liên hệ */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold mb-6">Thông Tin Liên Hệ</h2>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-yellow-600 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Địa Chỉ</h3>
                                    <p className="text-gray-600">Hữu Bộc - Hồng Thái - Kiến Xương - Thái Bình</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-yellow-600 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Điện Thoại</h3>
                                    <p className="text-gray-600">0906.110.450</p>
                                    <p className="text-gray-600">0348.266.829</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-yellow-600 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-gray-600">dongmyngheviettrung@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-yellow-600 p-3 rounded-lg">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Giờ Làm Việc</h3>
                                    <p className="text-gray-600">Thứ 2 - Chủ Nhật: 7:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form liên hệ */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-6">Gửi Tin Nhắn</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Họ và tên *</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Số điện thoại *</label>
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        value={formData.user_phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-600"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-600"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Tiêu đề</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-600"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Nội dung *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:border-yellow-600"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition duration-300 flex items-center justify-center"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bản đồ */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-6">Bản Đồ</h2>
                    <div className="w-full h-96 bg-gray-200 rounded-lg">
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

            <Footer />
        </div>
    );
};

export default Contact;