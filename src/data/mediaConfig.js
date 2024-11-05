// src/data/mediaConfig.js
import { getImagePath } from '../utils/imageHelper';


export const productData = {
  1: {
    id: 1,
    title: "Chùa Bái Đính",
    description: "Các công trình tâm linh tại chùa Bái Đính",
    image: getImagePath('BAIDINH', 'chuabaidinh.jpeg'),
    details: "Chùa Bái Đính là một quần thể chùa lớn với nhiều công trình văn hóa tâm linh độc đáo...",
    subProjects: [
      {
        id: 'bd-1',
        title: 'Trống đồng',
        description: 'Trống đồng được chế tác thủ công với kỹ thuật đúc đồng truyền thống',
        shortDesc: 'Trống đồng nghi lễ với hoa văn tinh xảo',
        images: [
          {
            url: getImagePath('BAIDINH', 'trongdong.jpg'),
            caption: 'Trống đồng hoàn thiện'
          },
          {
            url: getImagePath('BAIDINH', 'trongdong2.jpg'),
            caption: 'Chi tiết hoa văn trống đồng'
          }
        ],
        // videos: [
        //   {
        //     url: getImagePath('BAIDINH', 'trongdong.mp4'),
        //     caption: 'Quá trình chế tác trống đồng'
        //   }
        // ],
        details: `Trống đồng được chế tác bằng phương pháp thúc đồng truyền thống, với các họa tiết được chạm khắc tinh xảo:
        - Đường kính: 8.2m
        - Chiều cao: 6.8m
        - Chất liệu: Đồng nguyên chất
        - Kỹ thuật: Đúc đồng thủ công
        - Hoa văn: Các họa tiết truyền thống`,
        features: [
          'Đúc đồng thủ công truyền thống',
          'Hoa văn chạm khắc tinh xảo',
          'Âm vang chuẩn theo nghi lễ',
          'Độ bền cao'
        ]
      },
      {
        id: 'bd-2',
        title: 'Câu đối - Đại tự',
        description: 'Bộ câu đối và đại tự được chế tác bằng đồng nguyên chất',
        shortDesc: 'Câu đối và đại tự bằng đồng với nét chữ thanh thoát',
        images: [
          {
            url: getImagePath('BAIDINH', 'caudoi1.jpg'),
            caption: 'Bộ câu đối hoàn thiện'
          },
          {
            url: getImagePath('BAIDINH', 'caudoi2.jpg'),
            caption: 'Chi tiết chữ đồng'
          }
        ],
        details: `
        - Kích thước: Chiều dài câu đối là 4m, chiều rộng mỗi bảng là 0.5m
        - Chất liệu: Đồng nguyên chất
        - Kỹ thuật: Chạm khắc thủ công, mỗi chữ được đúc riêng và ghép lại một cách tỉ mỉ
        - Đặc điểm: Chữ viết theo phong cách thư pháp truyền thống, với từng nét chữ dày dặn, rõ ràng
        - Hoa văn: Các hoa tiết trang trí xung quanh các bảng câu đối phản ánh sự tinh tế và uy nghi của phong cách kiến trúc Phật giáo`,
      },
      {
        id: 'bd-3',
        title: 'Lá đề',
        description: 'Lá đề bằng đồng với hoa văn truyền thống',
        shortDesc: 'Lá đề đồng trang trí kiến trúc',
        images: [
          {
            url: getImagePath('BAIDINH','lade1.jpg'),
            caption: 'Lá đề lắp đặt hoàn thiện'
          },
          {
            url: getImagePath('BAIDINH','lade2.jpg'),
            caption: 'Chi tiết hoa văn lá đề'
          }
        ],
        details: `Lá đề được chế tác tinh xảo từ đồng nguyên chất:
        - Kích thước: Theo thiết kế kiến trúc
        - Chất liệu: Đồng nguyên chất
        - Kỹ thuật: Đúc và chạm khắc thủ công
        - Họa tiết: Theo phong cách truyền thống`,
        features: [
          'Thiết kế phù hợp kiến trúc',
          'Hoa văn tinh xảo',
          'Chống chịu thời tiết tốt',
          'Dễ dàng lắp đặt'
        ]
      },
      {
        id: 'bd-4',
        title: 'Trần bằng đồng',
        description: 'Trần đồng với họa tiết trang trí độc đáo',
        shortDesc: 'Trần đồng nghệ thuật cao cấp',
        images: [
          {
            url: getImagePath('BAIDINH','trandong1.jpg'),
            caption: 'Trần đồng hoàn thiện'
          },
          {
            url: getImagePath('BAIDINH','trandong2.jpg'),
            caption: 'Chi tiết họa tiết trần đồng'
          }
        ],
        // videos: [
        //   {
        //     url: 'video-tran-dong.mp4',
        //     caption: 'Quá trình lắp đặt trần đồng'
        //   }
        // ],
        details: `Trần đồng được thiết kế và thi công với kỹ thuật cao:
        - Diện tích: Theo không gian kiến trúc
        - Chất liệu: Đồng nguyên chất
        - Kỹ thuật: Đúc, dập nổi, và lắp đặt thủ công
        - Họa tiết: Kết hợp truyền thống và hiện đại`,
        features: [
          'Thiết kế theo không gian',
          'Họa tiết độc đáo',
          'Lắp đặt chuyên nghiệp',
          'Bảo hành dài hạn'
        ]
      }

    ]
  },
  2: {
    id: 2,
    title: "Đại bảo tháp Mandala",
    description: "Các công trình đại bảo tháp",
    image: getImagePath('MANDALA', 'mandalaTayThien.jpg'),
    details: "Đại bảo tháp Mandala là công trình tâm linh độc đáo...",
    features: ["Kiến trúc Mandala", "Phù điêu nghệ thuật", "Không gian thiền định", "Bảo tháp trung tâm"]
  },
  3: {
    id: 3,
    title: "Chùa Tam Chúc",
    description: "Các công trình chùa Tam Chúc",
    image: getImagePath('TAMCHUC', 'chuatamchuc.jpeg'),
    details: "Chùa Tam Chúc là quần thể chùa lớn nhất thế giới...",
    features: ["Điện thờ", "Vườn cảnh quan", "Hồ Tam Chúc", "Tượng Phật"]
  },
  4: {
    id: 4,
    title: "Tượng Phật đỉnh Fansipan",
    description: "Tượng Phật trên đỉnh Fansipan",
    image: getImagePath('FANSIPAN', 'tuongphatfansipan.jpg'),
    details: "Tượng Phật uy nghi trên đỉnh Fansipan...",
    features: ["Tượng Phật", "Bệ đá", "Không gian chiêm bái", "Cảnh quan núi rừng"]
  }
};