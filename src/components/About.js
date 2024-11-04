import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronRight } from 'lucide-react';
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('introduce');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    };
    const timelineData = [
        {
            header: "THÀNH LẬP",
            items: [
                { year: "2000", content: "Doanh nghiệp Đồng mỹ nghệ Việt Trung được thành lập..." }
            ]
        },
        {
            header: "PHÁT TRIỂN",
            items: [
                { year: "2005", content: "Mở rộng quy mô sản xuất, cho ra đời nhiều sản phẩm..." },
                { year: "2010", content: "Phát triển dòng sản phẩm Highline Cẩm Thạch và Mã Não..." },
                { year: "2015", content: "Đầu tư công nghệ hiện đại, nâng cao chất lượng..." },
                { year: "2020", content: "Trở thành đơn vị hàng đầu trong lĩnh vực..." }
            ]
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#1a1a1a]">
            {/* Single Mandala Pattern Background */}
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

            <Header />

            <div className="relative z-10 pt-20">
                {/* Enhanced Hero Section */}
                <div className="text-center px-4 py-16 relative">
                    {/* Decorative Frame */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Top Left Corner */}
                        <div className="absolute top-0 left-0 w-24 h-24">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#B8860B] to-transparent"></div>
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#B8860B] to-transparent"></div>
                        </div>

                        {/* Top Right Corner */}
                        <div className="absolute top-0 right-0 w-24 h-24">
                            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-l from-[#B8860B] to-transparent"></div>
                            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#B8860B] to-transparent"></div>
                        </div>

                        {/* Bottom Left Corner */}
                        <div className="absolute bottom-0 left-0 w-24 h-24">
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#B8860B] to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-full bg-gradient-to-t from-[#B8860B] to-transparent"></div>
                        </div>

                        {/* Bottom Right Corner */}
                        <div className="absolute bottom-0 right-0 w-24 h-24">
                            <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-[#B8860B] to-transparent"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-full bg-gradient-to-t from-[#B8860B] to-transparent"></div>
                        </div>

                        {/* Decorative Lines */}
                        <div className="absolute inset-x-32 top-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent"></div>
                        <div className="absolute inset-x-32 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent"></div>
                        <div className="absolute inset-y-32 left-0 w-px bg-gradient-to-b from-transparent via-[#B8860B]/50 to-transparent"></div>
                        <div className="absolute inset-y-32 right-0 w-px bg-gradient-to-b from-transparent via-[#B8860B]/50 to-transparent"></div>

                        {/* Corner Ornaments */}
                        {[0, 90, 180, 270].map((rotate) => (
                            <div
                                key={rotate}
                                className="absolute w-12 h-12"
                                style={{
                                    top: rotate < 180 ? '0' : 'auto',
                                    bottom: rotate >= 180 ? '0' : 'auto',
                                    left: rotate === 90 || rotate === 180 ? '0' : 'auto',
                                    right: rotate === 0 || rotate === 270 ? '0' : 'auto',
                                    transform: `rotate(${rotate}deg)`
                                }}
                            >
                                <svg viewBox="0 0 50 50" className="w-full h-full">
                                    <path
                                        d="M50,0 Q25,0 25,25 Q25,50 0,50"
                                        fill="none"
                                        stroke="#B8860B"
                                        strokeWidth="2"
                                        className="opacity-50"
                                    />
                                </svg>
                            </div>
                        ))}
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
                                Về Chúng Tôi
                                <div className="absolute -left-8 -right-8 top-1/2 transform -translate-y-1/2 flex justify-between">
                                    <span className="block w-8 h-px bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
                                    <span className="block w-8 h-px bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
                                </div>
                            </span>
                        </h1>
                        <p className="font-quicksand text-xl text-[#FFD700] max-w-3xl mx-auto font-medium leading-relaxed tracking-wide">
                            Chuyên tạo tác các công trình Phật giáo quy mô lớn, thúc tượng Phật,
                            chế tác Mandala và các tác phẩm chuyển chú Mật tông
                        </p>
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Mục lục */}
                        <div className="md:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="sticky top-24 backdrop-blur-sm bg-black/30 rounded-lg p-6 border border-[#D4AF37]/30">
                                <h3 className="font-philosopher text-xl font-bold mb-6 text-[#D4AF37] flex items-center">
                                    <span className="mr-2">Mục Lục</span>
                                    <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
                                </h3>
                                <div className="space-y-4">
                                    {['introduce', 'history', 'vision'].map((tab) => (
                                        <motion.button
                                            key={tab}
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setActiveTab(tab)}
                                            className={`w-full text-left py-2 px-4 rounded-md transition-all duration-300 flex items-center group font-quicksand font-medium ${activeTab === tab
                                                ? 'bg-[#D4AF37] text-white'
                                                : 'text-gray-300 hover:bg-[#D4AF37]/20'
                                                }`}
                                        >
                                            <ChevronRight className={`w-4 h-4 mr-2 transition-transform duration-300 ${activeTab === tab ? 'rotate-90' : 'group-hover:translate-x-1'
                                                }`} />
                                            <span>
                                                {tab === 'introduce' && 'Giới Thiệu'}
                                                {tab === 'history' && 'Lịch Sử'}
                                                {tab === 'vision' && 'Mục Tiêu'}
                                            </span>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Enhanced Content Area */}
                        <div className="md:col-span-3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={containerVariants}
                                    className="backdrop-blur-sm bg-black/30 rounded-lg p-8 border border-[#D4AF37]/30"
                                >
                                    {/* Giới Thiệu */}
                                    {activeTab === 'introduce' && (
                                        <motion.div
                                            variants={containerVariants}
                                            className="px-4 md:px-6 lg:px-8"
                                        >
                                            <motion.h2
                                                variants={itemVariants}
                                                className="font-philosopher text-3xl font-bold mb-12 text-[#D4AF37] relative inline-block"
                                            >
                                                Giới Thiệu
                                                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                                            </motion.h2>

                                            <div className="font-philosopher leading-relaxed space-y-8 text-white">
                                                <motion.div variants={itemVariants}>
                                                    <p className="text-lg">
                                                        Là một trong năm làng nghề chạm bạc cổ và nổi tiếng nhất Việt Nam, <strong style={{ color: '#B8860B' }}>Đồng mỹ nghệ VIỆT TRUNG</strong>
                                                        tự hào không chỉ với bề dày lịch sử mà còn với kỹ thuật thúc đồng mỹ nghệ tinh xảo, đạt đến trình độ cao. Chúng tôi đã không ngừng cống
                                                        hiến và nỗ lực, từ những ngày đầu thành lập với xưởng nhỏ đến nay đã trở thành một thương hiệu nổi bật, chuyên sâu vào các sản phẩm
                                                        đồ thờ cúng, đồ phong thủy, và đặc biệt là các công trình <strong style={{ color: '#B8860B' }}>nghệ thuật mật tông</strong>.
                                                    </p>
                                                </motion.div>

                                                <motion.div variants={itemVariants}>
                                                    <p className="text-lg">
                                                        Để đạt được vị thế như hiện tại, <strong style={{ color: '#B8860B' }}>Đồng mỹ nghệ VIỆT TRUNG</strong> luôn đặt yếu tố chất lượng và
                                                        giá trị văn hóa truyền thống lên hàng đầu, phục vụ cho tâm linh của cộng đồng Phật tử và những ai có niềm tin vào đạo Phật.
                                                        Một trong những điểm nhấn quan trọng mà chúng tôi luôn tự hào là khả năng thực hiện các công trình <strong style={{ color: '#B8860B' }}>
                                                            chuyển chú, mandala </strong> – một lĩnh vực phức tạp đòi hỏi cả tay nghề cao và sự tôn kính, hiểu biết sâu sắc về tôn giáo.
                                                    </p>
                                                </motion.div>

                                                <motion.div variants={itemVariants}>
                                                    <p className="text-lg">
                                                        Chúng tôi đã mạnh dạn đầu tư vào công nghệ hiện đại, đào tạo đội ngũ thợ lành nghề và chuyên viên để đảm bảo mỗi công trình không chỉ
                                                        là một sản phẩm mà còn là một tác phẩm nghệ thuật đầy tâm huyết. Những sản phẩm như <strong style={{ color: '#B8860B' }}>bảo tháp
                                                            mandala Tây Thiên</strong> và các tác phẩm chuyển chú tinh xảo của chúng tôi là minh chứng cho những nỗ lực không ngừng nhằm
                                                        bảo tồn và phát triển văn hóa tâm linh Mật tông được du nhập vào Việt Nam.
                                                    </p>
                                                </motion.div>

                                                <motion.div variants={itemVariants}>
                                                    <p className="text-lg">
                                                        Bên cạnh các công trình mật tông, <strong style={{ color: '#B8860B' }}>Đồng mỹ nghệ VIỆT TRUNG</strong> cũng đặc biệt quan tâm và
                                                        đẩy mạnh việc chế tác các sản phẩm phục vụ cho <stron style={{ color: '#B8860B' }}>đạo Mẫu</stron>,
                                                        <strong style={{ color: '#B8860B' }}>đạo Thánh</strong> và <strong style={{ color: '#B8860B' }}>Phật giáo Đại thừa</strong>.
                                                        Với tâm niệm mỗi sản phẩm đều phải mang đậm dấu ấn văn hóa truyền thống, chúng tôi luôn tập trung vào việc bảo tồn các yếu tố tâm linh
                                                        dân tộc trong từng tác phẩm.
                                                    </p>
                                                </motion.div>

                                                <motion.div variants={itemVariants}>
                                                    <p className="text-lg">
                                                        Chúng tôi luôn tâm niệm rằng, mỗi tác phẩm không chỉ là một sản phẩm mà còn là một hiện thân của tâm linh và văn hóa dân tộc.
                                                        Với mỗi sản phẩm, từ những chi tiết nhỏ nhất đến tổng thể, đều chứa đựng sự tâm huyết và kỹ thuật tỉ mỉ của đội ngũ thợ lành nghề.
                                                        Đây không chỉ là những vật phẩm mà còn là cầu nối tâm linh, là cách chúng tôi góp phần bảo tồn và phát huy văn hóa Việt Nam trong
                                                        đời sống đương đại.
                                                    </p>
                                                </motion.div>

                                                <motion.div variants={itemVariants}>
                                                    <p className="text-lg">
                                                        Với tâm nguyện đóng góp nhiều hơn nữa cho sự phát triển của nghệ thuật tâm linh Việt Nam, chúng tôi kính mong nhận được sự ủng hộ
                                                        và tin tưởng từ quý thầy, quý nhà chùa và toàn thể Phật tử. Sự tin tưởng của quý vị là nguồn động lực lớn giúp chúng tôi tiếp tục
                                                        sứ mệnh bảo tồn và phát huy giá trị văn hóa tâm linh dân tộc, góp phần tạo nên những công trình tâm linh ý nghĩa trên khắp đất nước.
                                                    </p>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'history' && (
                                        <motion.div variants={containerVariants}>
                                            <motion.h2
                                                variants={itemVariants}
                                                className="font-philosopher text-3xl font-bold mb-8 text-[#D4AF37] relative inline-block"
                                            >
                                                Lịch Sử Phát Triển
                                                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                                            </motion.h2>
                                            <div className="space-y-12">
                                                {timelineData.map((period, index) => (
                                                    <motion.div
                                                        key={index}
                                                        variants={itemVariants}
                                                        className="relative"
                                                    >
                                                        <h3 className="font-philosopher text-xl font-bold mb-6 text-[#D4AF37]"
                                                            style={{ fontFamily: "'Philosopher', sans-serif" }}> {/* Backup inline style */}
                                                            {period.header}
                                                        </h3>
                                                        <div className="space-y-8">
                                                            {period.items.map((item, itemIndex) => (
                                                                <motion.div
                                                                    key={itemIndex}
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: itemIndex * 0.2 }}
                                                                    className="relative pl-8 border-l-2 border-[#D4AF37] group"
                                                                >
                                                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#D4AF37] rounded-full group-hover:scale-125 transition-transform"></div>
                                                                    <div className="mb-2">
                                                                        <span className="font-philosopher text-lg font-bold text-[#D4AF37]"
                                                                            style={{ fontFamily: "'Philosopher', sans-serif" }}> {/* Backup inline style */}
                                                                            {item.year}
                                                                        </span>
                                                                    </div>
                                                                    <p className="font-quicksand text-gray-300"
                                                                        style={{ fontFamily: "'Quicksand', sans-serif" }}> {/* Backup inline style */}
                                                                        {item.content}
                                                                    </p>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Mục Tiêu */}
                                    {activeTab === 'vision' && (
                                        <motion.div variants={containerVariants} className="px-4 md:px-6 lg:px-8">
                                            <motion.h2
                                                variants={itemVariants}
                                                className="font-philosopher text-3xl font-bold mb-12 text-[#D4AF37] relative inline-block"
                                            >
                                                Mục Tiêu Phật Giáo
                                                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                                            </motion.h2>

                                            <div className="font-quicksand text-gray-300 space-y-12">
                                                {/* Sản phẩm & Dịch vụ */}
                                                <motion.div variants={itemVariants} className="bg-black/10 backdrop-blur-sm rounded-lg p-8 border border-[#D4AF37]/20">
                                                    <h3 className="text-[#D4AF37] text-2xl font-semibold mb-6 font-philosopher">Triết Lý Sản Phẩm</h3>
                                                    <div className="space-y-4 leading-relaxed">
                                                        <p className="text-lg">Chúng tôi cam kết phát triển và cung cấp các sản phẩm thúc đồng mỹ nghệ phục vụ cho các nhu cầu tâm linh và lễ nghi Phật giáo:</p>
                                                        <ul className="list-none pl-6 space-y-3">
                                                            <li className="text-lg relative before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-[#D4AF37] before:rounded-full before:-left-4 before:top-2.5">Tượng Phật trang nghiêm</li>
                                                            <li className="text-lg relative before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-[#D4AF37] before:rounded-full before:-left-4 before:top-2.5">Bàn thờ trang nhã</li>
                                                            <li className="text-lg relative before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-[#D4AF37] before:rounded-full before:-left-4 before:top-2.5">Pháp khí mật tông</li>
                                                        </ul>
                                                    </div>
                                                </motion.div>

                                                {/* Mục tiêu & Cam kết */}
                                                <motion.div variants={itemVariants} className="bg-black/10 backdrop-blur-sm rounded-lg p-8 border border-[#D4AF37]/20">
                                                    <h3 className="text-[#D4AF37] text-2xl font-semibold mb-6 font-philosopher">Tầm Nhìn Tâm Linh</h3>
                                                    <div className="space-y-4 leading-relaxed">
                                                        <p className="text-lg">Mục tiêu của chúng tôi là tạo ra những sản phẩm không chỉ về mặt thẩm mỹ cao mà còn mang ý nghĩa sâu sắc về mặt tâm linh, góp phần vào việc tu tập và thực hành Phật pháp của tín đồ và các tự viện.</p>
                                                    </div>
                                                </motion.div>

                                                {/* Hợp tác */}
                                                <motion.div variants={itemVariants} className="bg-black/10 backdrop-blur-sm rounded-lg p-8 border border-[#D4AF37]/20">
                                                    <h3 className="text-[#D4AF37] text-2xl font-semibold mb-6 font-philosopher">Hợp Tác Phát Triển</h3>
                                                    <div className="space-y-4 leading-relaxed">
                                                        <p className="text-lg">Chúng tôi cũng dự định mở rộng hợp tác với các chùa và tự viện trong và ngoài nước để phát triển các sản phẩm theo yêu cầu đặc biệt, qua đó đảm bảo rằng các nhu cầu đa dạng của cộng đồng Phật tử được đáp ứng một cách chính xác và tôn kính nhất.</p>
                                                    </div>
                                                </motion.div>

                                                {/* Nghiên cứu & Phát triển */}
                                                <motion.div variants={itemVariants} className="bg-black/10 backdrop-blur-sm rounded-lg p-8 border border-[#D4AF37]/20">
                                                    <h3 className="text-[#D4AF37] text-2xl font-semibold mb-6 font-philosopher">Nghiên Cứu & Phát Triển</h3>
                                                    <div className="space-y-4 leading-relaxed">
                                                        <p className="text-lg">Bên cạnh đó, chúng tôi sẽ tiếp tục nghiên cứu và học hỏi từ các quý thầy, nhà chùa, những người hoan hỷ gieo duyên chỉ dạy, để tích hợp kiến thức đó vào trong quá trình thiết kế và sản xuất, nhằm đảm bảo rằng mỗi sản phẩm không chỉ là một tác phẩm nghệ thuật mà còn là một biểu tượng của sự tôn kính và hiểu biết sâu sắc về Phật giáo.</p>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )}

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-[#B8860B] text-white p-3 rounded-full shadow-lg hover:bg-[#986D0A] transition-colors duration-300 z-50"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

export default AboutPage;