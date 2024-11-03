import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
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

    const timelineData = [
        {
            header: "THÀNH LẬP",
            items: [
                {
                    year: "2000",
                    content: "Doanh nghiệp Đồng mỹ nghệ Việt Trung được thành lập..."
                }
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
        <div className="App">
            <Header />
            <div className="min-h-screen bg-gray-50 mt-16">
                {/* Banner */}
                {Banner()}
                {/* Content */}

                <div className="container mx-auto py-8 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Sidebar Navigation */}
                        <div className="md:col-span-1">
                            <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-bold mb-6 text-gray-800">Mục Lục</h3>
                                <div className="space-y-4">
                                    {['introduce', 'history', 'vision'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`w-full text-left py-2 px-4 rounded-md transition-colors ${activeTab === tab
                                                    ? 'bg-yellow-600 text-white'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            {tab === 'introduce' && 'Giới Thiệu'}
                                            {tab === 'history' && 'Lịch Sử'}
                                            {tab === 'vision' && 'Sứ Mệnh & Mục Tiêu'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-3">
                            <div className="bg-white rounded-lg shadow-md p-8">
                                {/* Giới Thiệu */}
                                {activeTab === 'introduce' && (
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Giới Thiệu</h2>
                                        <div className="content text-gray-600 leading-relaxed">
                                            <p className="mb-4">
                                                Là một trong năm làng nghề nổi tiếng nhất Việt Nam, <strong>Đồng mỹ nghệ VIỆT TRUNG</strong> tự hào không chỉ với bề dày lịch sử mà còn với kỹ thuật thúc đồng mỹ nghệ tinh xảo, đạt đến trình độ cao. Chúng tôi đã không ngừng cống hiến và nỗ lực, từ những ngày đầu thành lập với xưởng nhỏ đến nay đã trở thành một thương hiệu nổi bật, chuyên sâu vào các sản phẩm đồ thờ cúng, đồ phong thủy, và đặc biệt là các công trình <strong>nghệ thuật mật tông</strong>.
                                            </p>
                                            <p className="mb-4">
                                                Để đạt được vị thế như hiện tại, <strong>Đồng mỹ nghệ VIỆT TRUNG</strong> luôn đặt yếu tố chất lượng và giá trị văn hóa truyền thống lên hàng đầu, phục vụ cho tâm linh của cộng đồng Phật tử và những ai có niềm tin vào đạo Phật. Một trong những điểm nhấn quan trọng mà chúng tôi luôn tự hào là khả năng thực hiện các công trình <strong>chuyển chú mật tông</strong> – một lĩnh vực phức tạp đòi hỏi cả tay nghề cao và sự tôn kính, hiểu biết sâu sắc về tôn giáo.
                                            </p>
                                            <p className="mb-4">
                                                Chúng tôi đã mạnh dạn đầu tư vào công nghệ hiện đại, đào tạo đội ngũ thợ lành nghề và chuyên viên để đảm bảo mỗi công trình không chỉ là một sản phẩm mà còn là một tác phẩm nghệ thuật đầy tâm huyết. Những sản phẩm như <strong>bảo tháp mandala Tây Thiên</strong> và các tác phẩm chuyển chú tinh xảo của chúng tôi là minh chứng cho những nỗ lực không ngừng nhằm bảo tồn và phát triển văn hóa tâm linh dân tộc.
                                            </p>
                                            <p className="mb-4">
                                                Bên cạnh các công trình mật tông, <strong>Đồng mỹ nghệ VIỆT TRUNG</strong> cũng đặc biệt quan tâm và đẩy mạnh việc chế tác các sản phẩm phục vụ cho <strong>đạo Mẫu</strong>, <strong>đạo Thánh</strong> và <strong>Phật giáo Đại thừa</strong>. Với tâm niệm mỗi sản phẩm đều phải mang đậm dấu ấn văn hóa truyền thống, chúng tôi luôn tập trung vào việc bảo tồn các yếu tố tâm linh dân tộc trong từng tác phẩm.
                                            </p>
                                            <p className="mb-4">
                                                Chúng tôi luôn tâm niệm rằng, mỗi tác phẩm không chỉ là một sản phẩm mà còn là một hiện thân của tâm linh và văn hóa dân tộc. Với mỗi sản phẩm, từ những chi tiết nhỏ nhất đến tổng thể, đều chứa đựng sự tâm huyết và kỹ thuật tỉ mỉ của đội ngũ thợ lành nghề. Đây không chỉ là những vật phẩm mà còn là cầu nối tâm linh, là cách chúng tôi góp phần bảo tồn và phát huy văn hóa Việt Nam trong đời sống đương đại.
                                            </p>
                                            <p className="mb-4">
                                                Chúng tôi không ngừng học hỏi, nghiên cứu để đảm bảo rằng mỗi sản phẩm đều mang đậm giá trị truyền thống và ý nghĩa tâm linh sâu sắc. Chúng tôi luôn tin tưởng rằng những sản phẩm của mình sẽ giúp khách hàng cảm nhận được sự kết nối và tinh thần văn hóa, mang lại sự bình an và thanh tịnh cho không gian sống của họ.
                                            </p>
                                            <p>
                                                Với tâm nguyện đóng góp nhiều hơn nữa cho sự phát triển của nghệ thuật tâm linh Việt Nam, chúng tôi kính mong nhận được sự ủng hộ và tin tưởng từ quý thầy, quý nhà chùa và toàn thể Phật tử. Sự tin tưởng của quý vị là nguồn động lực lớn giúp chúng tôi tiếp tục sứ mệnh bảo tồn và phát huy giá trị văn hóa tâm linh dân tộc, góp phần tạo nên những công trình tâm linh ý nghĩa trên khắp đất nước.
                                            </p>
                                        </div>

                                    </div>
                                )}

                                {/* Lịch Sử */}
                                {activeTab === 'history' && (
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Lịch Sử Phát Triển</h2>
                                        <div className="space-y-12">
                                            {timelineData.map((period, index) => (
                                                <div key={index} className="relative">
                                                    <h3 className="text-xl font-bold mb-6 text-yellow-600">{period.header}</h3>
                                                    <div className="space-y-8">
                                                        {period.items.map((item, itemIndex) => (
                                                            <div key={itemIndex} className="relative pl-8 border-l-2 border-yellow-600">
                                                                <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-600 rounded-full"></div>
                                                                <div className="mb-2">
                                                                    <span className="text-lg font-bold text-yellow-600">{item.year}</span>
                                                                </div>
                                                                <p className="text-gray-600">{item.content}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Sứ Mệnh & Mục Tiêu */}
                                {activeTab === 'vision' && (
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Sứ Mệnh & Mục Tiêu</h2>
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-xl font-bold mb-4 text-yellow-600">Sứ Mệnh</h3>
                                                <p>Đối với Khách Hàng:...</p>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-4 text-yellow-600">Mục Tiêu</h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                                    <li>Trở thành đơn vị hàng đầu...</li>
                                                    <li>Phát triển và mở rộng...</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll to top button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-20 right-8 bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 transition-colors"
                    >
                        <ChevronUp className="w-6 h-6" />
                    </button>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
