// src/data/mediaConfig.js
import { getImagePath } from '../utils/imageHelper';


export const productData = {
  1: {
    id: 1,
    slug: 'dai-bao-thap-mandala',
    title: "Đại Bảo Tháp Mandala",
    description: "Đại Bảo Tháp Mandala, một kiệt tác kiến trúc tâm linh, thu hút người xem bởi sự hòa quyện giữa nghệ thuật và thiền định trong không gian thiêng liêng.",
    image: getImagePath('MANDALA', 'mandalaTayThien.jpg'),
    images: [
      {
          src: getImagePath('MANDALA', 'mandalaTayThien.jpg'),
          title: "Đại Bảo Tháp Mandala - Tổng quan"
      },
      {
          src: getImagePath('CHUYENKINHLUAN', 'chuyenkinhluan1.jpg'),
          title: "Chuyển Kinh Luân - Góc nhìn 1"
      },
      {
          src: getImagePath('CHUYENKINHLUAN', 'chuyenkinhluan2.jpg'),
          title: "Chuyển Kinh Luân - Chi tiết"
      },
      {
          src: getImagePath('MANDALA', 'lademattong1.jpg'),
          title: "La Đề Mặt Tổng - Phối cảnh 1"
      },
      {
          src: getImagePath('MANDALA', 'lademattong2.jpg'),
          title: "La Đề Mặt Tổng - Phối cảnh 2"
      },
      {
          src: getImagePath('MANDALA', 'mandala.jpg'),
          title: "Mandala - Chi tiết nghệ thuật"
      }
  ],
    details: {
      "Kiến Trúc Mandala": {
        "description": "Đại Bảo Tháp Mandala được thiết kế theo hình thức Mandala, phản ánh bản đồ của vũ trụ trong Phật giáo, tạo nên không gian linh thiêng và cân bằng."
      },
      "Truyền Thống và Hiện Đại": {
        "description": "Công trình kết hợp hài hòa giữa yếu tố truyền thống Á Đông và các thiết kế hiện đại, mang đến một không gian thiền định lý tưởng cho tín đồ và du khách."
      },
      "Không Gian Thiền Định": {
        "description": "Được thiết kế để tối ưu hóa sự tập trung và thiền định, Đại Bảo Tháp cung cấp một không gian yên tĩnh nơi các tín đồ có thể tìm thấy sự bình yên và tĩnh tâm."
      },
      "Trung Tâm Tâm Linh": {
        "description": "Đại Bảo Tháp không chỉ là một công trình kiến trúc mà còn là trung tâm của hoạt động tâm linh, thu hút tín đồ Phật giáo từ khắp nơi trên thế giới."
      }
    },
    features: [
      {
        "name": "Kiến trúc Mandala",
        "description": "Cấu trúc dựa trên mô hình Mandala, biểu tượng của vũ trụ trong triết học Phật giáo, tạo nên không gian linh thiêng và cân bằng."
      },
      {
        "name": "Phù điêu nghệ thuật",
        "description": "Các bức phù điêu điêu khắc tinh xảo trên các bức tường và cổng vào tháp, thể hiện sự khéo léo và tinh thần tôn kính trong từng chi tiết."
      },
      {
        "name": "Không gian thiền định",
        "description": "Không gian yên tĩnh, được thiết kế để tối ưu hóa sự tập trung và thiền định, giúp du khách và tín đồ tìm được sự thanh thản trong tâm hồn."
      },
      {
        "name": "Bảo tháp trung tâm",
        "description": "Là điểm nhấn trung tâm của toàn bộ quần thể, nơi lưu giữ xá lợi Phật và các bảo vật tâm linh, thu hút du khách từ khắp nơi trên thế giới."
      }
    ]
  },
  2: {
    id: 2,
    slug: 'chua-bai-dinh',
    title: "Chùa Bái Đính, Ninh Bình",
    image: getImagePath('BAIDINH', 'chuabaidinh.jpeg'),
    images: [
      {
        src: getImagePath('BAIDINH', 'chuabaidinh.jpeg'),
        title: "Chùa Bái Đính - Tổng quan"
      },
      {
        src: getImagePath('BAIDINH', 'trongdong.jpg'),
        title: "Trống đồng - Chi tiết"
      },
      {
        src: getImagePath('BAIDINH', 'caudoi1.jpg'),
        title: "Câu đối - Chi tiết"
      },
      {
        src: getImagePath('BAIDINH', 'lade1.jpg'),
        title: "Lá đề - Chi tiết"
      },
      {
        src: getImagePath('BAIDINH', 'trandong1.jpg'),
        title: "Trần đồng - Chi tiết"
      }
    ],

    description: "Chùa Bái Đính là một trong những quần thể chùa chiền lớn nhất Việt Nam, thu hút du khách bởi kiến trúc hoành tráng và các giá trị tâm linh sâu sắc.",
    details: {
      "Tượng Phật Vàng": {
        "description": "Bức tượng Phật bằng đồng lớn nhất Đông Nam Á, là biểu tượng của sự an lành và thanh tịnh."
      },
      "Hành lang La Hán": {
        "description": "Hành lang dài nhất Việt Nam với 500 vị La Hán được điêu khắc sống động, thể hiện sự tôn kính và trí tuệ."
      },
      "Bảo Tháp": {
        "description": "Bảo tháp là nơi lưu giữ các bảo vật và xá lợi Phật, là một trong những điểm nhấn kiến trúc tâm linh quan trọng của chùa."
      },
      "Các đền thờ": {
        "description": "Nhiều đền thờ được xây dựng quanh khuôn viên chùa, mỗi đền có kiến trúc và mục đích riêng, thể hiện sự đa dạng trong tâm linh và văn hóa."
      }
    },
    features: [
      {
        "name": "Kiến trúc đặc sắc",
        "description": "Kiến trúc chùa kết hợp giữa cổ điển và hiện đại, với những đường nét tinh xảo, phản ánh sự kỳ vĩ của nghệ thuật Phật giáo."
      },
      {
        "name": "Chuông đại hồng chung",
        "description": "Một trong những quả chuông lớn nhất Châu Á, tạo ra âm thanh vang dội, làm dịu lòng người."
      },
      {
        "name": "Khuôn viên rộng lớn",
        "description": "Khuôn viên chùa rộng lớn, cung cấp không gian yên tĩnh và thoáng đãng cho các hoạt động tâm linh và dã ngoại của du khách."
      },
      {
        "name": "Trống đồng lớn nhất Việt Nam",
        "description": "Trống đồng tại Chùa Bái Đính là trống đồng lớn nhất Việt Nam, được đúc thủ công với kỹ thuật và nghệ thuật truyền thống, biểu tượng cho sức mạnh và uy phong."
      }
    ],

    subProjects: [
      {
        id: 'trongdong',
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
        id: 'caudoi',
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
        id: 'lade',
        title: 'Lá đề',
        description: 'Lá đề bằng đồng với hoa văn truyền thống',
        shortDesc: 'Lá đề đồng trang trí kiến trúc',
        images: [
          {
            url: getImagePath('BAIDINH', 'lade1.jpg'),
            caption: 'Lá đề lắp đặt hoàn thiện'
          },
          {
            url: getImagePath('BAIDINH', 'lade2.jpg'),
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
        id: 'trandong',
        title: 'Trần bằng đồng',
        description: 'Trần đồng với họa tiết trang trí độc đáo',
        shortDesc: 'Trần đồng nghệ thuật cao cấp',
        images: [
          {
            url: getImagePath('BAIDINH', 'trandong1.jpg'),
            caption: 'Trần đồng hoàn thiện'
          },
          {
            url: getImagePath('BAIDINH', 'trandong2.jpg'),
            caption: 'Chi tiết họa tiết trần đồng'
          }
        ],
        videos: [
          {
            url: 'video-tran-dong.mp4',
            caption: 'Quá trình lắp đặt trần đồng'
          }
        ],
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
  }
  ,
  3: {
    id: 3,
    slug: 'chua-tam-chuc',
    "title": "Chùa Tam Chúc",
    image: getImagePath('TAMCHUC', 'chuatamchuc.jpeg'),
    images: [
      {
        src: getImagePath('TAMCHUC', 'chuatamchuc.jpeg'),
        title: "Chùa Tam Chúc - Tổng quan"
      },
      {
        src: getImagePath('TAMCHUC', 'chuatamchuc.jpeg'),
        title: "Chùa Tam Chúc - Góc nhìn 1"
      },
      {
        src: getImagePath('TAMCHUC', 'chuatamchuc.jpeg'),
        title: "Chùa Tam Chúc - Góc nhìn 2"
      },
      ],

    "description": "Chùa Tam Chúc, nằm tại Hà Nam, Việt Nam, là quần thể chùa lớn nhất thế giới, thu hút hàng triệu du khách và tín đồ Phật giáo mỗi năm bởi vẻ đẹp kiến trúc và vị trí ngoạn mục của nó.",

    "details": {
      "Diện Tích": {
        "description": "Chùa Tam Chúc nổi bật với diện tích lên đến 5.000 hecta, là quần thể chùa lớn nhất thế giới."
      },
      "Cấu Trúc Chính": {
        "description": "Bao gồm nhiều điện thờ, tháp, am, cùng với các khu vườn cảnh quan và hồ nước tự nhiên rộng lớn, tạo nên một khung cảnh thiền định hữu tình."
      },
      "Phục Hồi và Mở Rộng": {
        "description": "Công trình được xây dựng trên nền của một ngôi chùa cổ, đã được phục hồi và mở rộng với nhiều hạng mục kiến trúc ấn tượng, phản ánh sự pha trộn giữa truyền thống và hiện đại."
      },
      "Nét Văn Hóa Phật Giáo": {
        "description": "Mỗi công trình trong khuôn viên chùa đều mang đậm nét văn hóa Phật giáo, thể hiện qua kiến trúc và các hoạt động tâm linh diễn ra tại đây."
      }
    },
    "features": [
      {
        "name": "Điện thờ",
        "description": "Điện thờ chính của chùa Tam Chúc là một công trình kiến trúc đồ sộ, nơi thờ Phật và tổ chức các nghi lễ tôn giáo lớn."
      },
      {
        "name": "Vườn cảnh quan",
        "description": "Vườn cảnh quan của chùa bao gồm nhiều loại thực vật, hòn non bộ và những tác phẩm điêu khắc đá, tạo thành một không gian yên bình và thiền định."
      },
      {
        "name": "Hồ Tam Chúc",
        "description": "Hồ Tam Chúc là một hồ nước tự nhiên rộng lớn bao quanh chùa, là điểm nhấn tuyệt đẹp trong toàn bộ quần thể."
      },
      {
        "name": "Tượng Phật",
        "description": "Chùa có nhiều tượng Phật khác nhau, trong đó có tượng Phật lớn nhất Việt Nam, làm bằng đá nguyên khối và được coi là biểu tượng của sự hoài công và tâm linh."
      }
    ]
  }
  ,
  4: {
    id: 4,
    slug: 'chua-vang-chua-bac',
    title: "Chùa Vàng Chùa Bạc, Tràng An",
    image: getImagePath('TRANGAN', 'chuavangchuabac.png'),
    images: [
      {
        src: getImagePath('TRANGAN', 'chuavangchuabac.png'),
        title: "Chùa Vàng Chùa Bạc - Tổng quan"
      },
      {
        src: getImagePath('TRANGAN', 'chuavangchuabac.png'),
        title: "Chùa Vàng - Chi tiết"
      },
      ],
    "description": "Chùa Vàng Chùa Bạc là một điểm tham quan tâm linh nổi bật tại khu du lịch Tràng An, tỉnh Ninh Bình, với hai ngôi chùa chính được mạ vàng và bạc.",
    "details": {
      "Ngôi Chùa Vàng": {
        "description": "Ngôi chùa được mạ vàng bên ngoài, từ mái cho đến các bức tường, tạo nên sự lấp lánh khi nắng chiếu vào. Bên trong, chùa thờ tượng Phật bằng vàng cao lớn, trang nghiêm."
      },
      "Ngôi Chùa Bạc": {
        "description": "Ngôi Chùa Bạc mang vẻ đẹp tinh khiết với lớp mạ bạc sáng bóng. Tượng Phật và các vật phẩm thờ cúng cũng được làm từ bạc, toát lên sự khiêm nhường và thanh khiết."
      }
    },
    "features": [
      {
        "name": "Tượng Phật",
        "description": "Mỗi ngôi chùa đều có tượng Phật uy nghi, thể hiện sự linh thiêng và trang nghiêm."
      },
      {
        "name": "Bệ đá",
        "description": "Các bệ đá được chạm khắc tinh xảo quanh khuôn viên chùa, là nơi để chiêm bái và ngắm cảnh quan núi rừng hùng vĩ xung quanh."
      },
      {
        "name": "Không gian chiêm bái",
        "description": "Không gian yên tĩnh, thích hợp cho việc tu tập và suy ngẫm, với tiếng chuông chùa ngân vang, mang lại cảm giác an bình."
      },
      {
        "name": "Cảnh quan núi rừng",
        "description": "Chùa nằm ở vị trí độc đáo giữa cảnh quan núi rừng Tràng An, cung cấp tầm nhìn tuyệt đẹp ra các ngọn núi đá vôi và mặt nước trong xanh của khu vực."
      }
    ]
  }
  ,
  5: {
    id: 5,
    slug: 'chuyen-kinh-luan',
    title: "Chuyển Kinh Luân bằng Đồng",
    image: getImagePath('CHUYENKINHLUAN', 'chuyenkinhluan1.jpg'),
    images: [
      {
        src: getImagePath('CHUYENKINHLUAN', 'chuyenkinhluan1.jpg'),
        title: "Chuyển Kinh Luân - Tổng quan"
      },
      {
        src: getImagePath('CHUYENKINHLUAN', 'chuyenkinhluan2.jpg'),
        title: "Chuyển Kinh Luân - Góc nhìn 1"
      },
      {
        src: getImagePath('CHUYENKINHLUAN', 'chuyenkinhluan3.jpg'),
        title: "Chuyển Kinh Luân - Góc nhìn 2"
      },
      ],
    description: "Chuyển Kinh Luân bằng đồng là một nghi lễ tâm linh sâu sắc trong Phật giáo mật tông, thể hiện sự lan toả chánh pháp qua hành động xoay các bánh xe kinh cầu.",
    details: {
      "Ý Nghĩa Tâm Linh": {
        "description": "Việc xoay kinh luân tượng trưng cho sự lan truyền chánh pháp và làm lợi lạc chúng sinh, mỗi vòng xoay tương đương với việc đọc kinh, tích lũy công đức."
      },
      "Cấu Trúc": {
        "description": "Kinh luân thường được làm từ đồng, chứa các bản kinh được viết hoặc in trên giấy, cuộn tròn và đặt trong một trụ có thể xoay quanh trục."
      }
    },
    features: [
      {
        "name": "Tích Lũy Công Đức",
        "description": "Xoay kinh luân giúp tích lũy công đức tương đương với việc tụng đọc kinh nguyện."
      },
      {
        "name": "Hoạt Động Tâm Linh",
        "description": "Nghi lễ này được thực hiện trong các buổi lễ quan trọng và thường xuyên tại các chùa, như một phần của thực hành hàng ngày."
      },
      {
        "name": "Tạo Hòa Bình Tâm Linh",
        "description": "Chuyển kinh luân mang lại sự bình an và tĩnh tâm cho người thực hành và được coi là một hành động của sự từ bi và trí tuệ."
      },
      {
        "name": "Kiến Trúc và Thiết Kế",
        "description": "Các kinh luân được thiết kế một cách tinh xảo với chi tiết nghệ thuật phong phú, thường được trang trí bằng các họa tiết Phật giáo truyền thống."
      }
    ],
    subProjects: [
      {
        id: "sp-1",
        title: "Sản xuất Chuyển Kinh Luân",
        description: "Quá trình sản xuất và chế tác kinh luân bằng đồng, từ khâu thiết kế mẫu mã đến hoàn thiện sản phẩm.",
        shortDesc: "Quá trình chi tiết về sản xuất Chuyển Kinh Luân bằng đồng",
        details: "Mỗi bánh xe kinh luân được tạo ra bằng tay bởi các nghệ nhân lành nghề, với sự chú trọng đặc biệt vào chất lượng và chi tiết. Các bánh xe sau khi hoàn thiện đều trải qua quá trình kiểm tra nghiêm ngặt để đảm bảo chất lượng tối ưu trước khi đưa vào sử dụng.\n- Chất liệu: Đồng nguyên chất\n- Kỹ thuật: Đúc và chạm khắc thủ công\n- Chi tiết: Hoa văn và biểu tượng Phật giáo",

        images: [
          {
            url: getImagePath('CHUYENKINHLUAN', 'chuyenkinhluan3.jpg'),
            caption: "Giai đoạn sản xuất kinh luân"
          },
          {
            url: getImagePath('CHUYENKINHLUAN', 'chuyenkinhluan2.jpg'),
            caption: "Chi tiết hoàn thiện sản phẩm"
          }
        ],
        videos: [
          {
            url: getImagePath('CHUYENKINHLUAN', 'video_chuyenkinhluan.mp4'),
            caption: "Video chi tiết về Chuyển Kinh Luân"
          }
        ],
      }
    ]
  }  
  
};

Object.values(productData).forEach(product => {
  if (!product.slug) {
      console.warn(`Product ${product.id} missing slug!`);
      // Tự động tạo slug nếu chưa có
      product.slug = product.title
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[đĐ]/g, 'd')
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();
  }
});