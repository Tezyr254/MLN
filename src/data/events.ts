import type { TimelineEvent } from '../types';

export const TIMELINE_START = 1945;
export const TIMELINE_END = 1975;

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'declaration-independence',
    year: 1945,
    title: 'Tuyên Ngôn Độc Lập',
    shortDescription: 'Chủ tịch Hồ Chí Minh tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa.',
    timelineDetail:
      'Trước hàng trăm nghìn người dân tại Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn khẳng định quyền tự quyết thiêng liêng của dân tộc Việt Nam. Đây là lần đầu tiên sau hàng thế kỷ đô hộ, một nhà nước độc lập do người Việt tự xây dựng ra đời.',
    overview:
      'Ngày 2 tháng 9 năm 1945, trước hàng trăm nghìn người tập trung tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, thành lập nước Việt Nam Dân chủ Cộng hòa. Văn bản khẳng định mọi dân tộc đều sinh ra bình đẳng, có quyền sống, quyền tự do và quyền mưu cầu hạnh phúc — những giá trị bất khả xâm phạm.',
    significance:
      'Đây là thời khắc chấm dứt chính thức ách đô hộ thực dân và mở ra nhà nước Việt Nam độc lập, chủ quyền. Tuyên ngôn hợp nhất các dân tộc anh em dưới khát vọng độc lập chung và đặt nền tảng tư tưởng cho các cuộc đấu tranh tiếp theo.',
    impact:
      'Tuyên ngôn khơi dậy ý thức dân tộc, khẳng định vị thế Việt Nam trên trường quốc tế và mở đầu cho hai cuộc kháng chiến chống xâm lược lớn của dân tộc.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ho_Chi_Minh_reading_the_Declaration_of_Independence.jpg/1280px-Ho_Chi_Minh_reading_the_Declaration_of_Independence.jpg',
    imageAlt: 'Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, 1945',
  },
  {
    id: 'national-resistance',
    year: 1946,
    title: 'Toàn Quốc Kháng Chiến',
    shortDescription: 'Cuộc kháng chiến toàn quốc bùng nổ khi thực dân Pháp quay lại xâm lược.',
    timelineDetail:
      'Sau vụ đánh chiếm Hải Phòng và đàm phán thất bại, Chủ tịch Hồ Chí Minh kêu gọi toàn dân đứng lên chống Pháp xâm lược. Cuộc kháng chiến chống Pháp kéo dài chín năm, rèn luyện Quân đội Nhân dân và thử thách ý chí của cả dân tộc.',
    overview:
      'Sau khi đàm phán thất bại tại Đà Lạt và cuộc đánh chiếm Hải Phòng tháng 11/1946, xung đột vũ trang nổ ra giữa lực lượng Việt Nam và quân đội thực dân Pháp. Chủ tịch Hồ Chí Minh kêu gọi toàn quốc kháng chiến, biến cuộc đấu tranh giành độc lập thành cuộc chiến sinh tồn bằng vũ lực.',
    significance:
      'Khởi đầu cuộc kháng chiến chống Pháp cho thấy độc lập không thể đạt được một cách hòa bình. Cuộc chiến rèn luyện Quân đội Nhân dân Việt Nam và thử thách ý chí tự quyết của một dân tộc.',
    impact:
      'Chín năm chiến tranh ác liệt đã thay đổi xã hội, kinh tế và tư duy quân sự Việt Nam, đồng thời thu hút sự chú ý quốc tế đến vấn đề thuộc địa ở Đông Nam Á.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/First_Indochina_War_colonial_map_1954.jpg/1280px-First_Indochina_War_colonial_map_1954.jpg',
    imageAlt: 'Bản đồ chiến trường cuộc kháng chiến chống Pháp',
  },
  {
    id: 'viet-bac-campaign',
    year: 1947,
    title: 'Chiến Dịch Việt Bắc',
    shortDescription: 'Quân ta đánh bại cuộc tấn công lớn của Pháp tại vùng Việt Bắc.',
    timelineDetail:
      'Pháp mở chiến dịch Lea nhằm tiêu diệt bộ chỉ huy ta tại Việt Bắc, nhưng bị đánh tan nhờ chiến thuật du kích và sự ủng hộ của nhân dân địa phương. Chiến thắng này chứng minh quân đội non trẻ vẫn có thể sống sót trước đòn tấn công quy mô của địch.',
    overview:
      'Cuối năm 1947, tướng Philippe Leclerc chỉ huy chiến dịch Lea nhằm tiêu diệt bộ chỉ huy Việt Minh tại Việt Bắc. Nhờ chiến thuật du kích, rút lui có chủ đích và am hiểu địa hình, lực lượng Việt Nam sống sót và phản công hiệu quả.',
    significance:
      'Chiến dịch chứng minh một lực lượng vũ trang thiếu thốn vẫn có thể đánh bại quân đội thực dân hiện đại nhờ tính cơ động, sự ủng hộ của nhân dân và kiên nhẫn chiến lược.',
    impact:
      'Pháp không đạt được thắng lợi quyết định, kéo dài cuộc chiến và củng cố căn cứ địa nông thôn — hậu phương vững chắc của kháng chiến.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Viet_Minh_soldiers.jpg/1280px-Viet_Minh_soldiers.jpg',
    imageAlt: 'Bộ đội Việt Minh trong thời kỳ kháng chiến',
  },
  {
    id: 'border-campaign',
    year: 1950,
    title: 'Chiến Dịch Biên Giới',
    shortDescription: 'Chiến thắng quyết định dọc biên giới Việt–Trung thay đổi cục diện chiến lược.',
    timelineDetail:
      'Đại tướng Võ Nguyên Giáp chỉ huy tấn công đồng loạt các cứ điểm Pháp dọc biên giới, giải phóng hàng loạt thị xã và thu vũ khí lớn. Đây là chiến thắng tập trận đầu tiên, đánh dấu bước chuyển từ phòng thủ sang chủ động tấn công.',
    overview:
      'Dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp, Chiến dịch Biên giới mùa thu 1950 tấn công các cứ điểm Pháp dọc biên giới phía Bắc. Quân ta giải phóng nhiều cứ điểm, thu vũ khí lớn và mở đường tiếp vận với các nước bạn.',
    significance:
      'Đây là chiến thắng quy mô lớn đầu tiên của quân đội ta ở thế tấn công, đánh dấu bước chuyển từ phòng thủ sang chủ động chiến lược.',
    impact:
      'Chiến dịch nâng cao tinh thần, mở rộng vùng giải phóng và chứng minh ta có thể thắng trong các trận đánh quy mô — tiền đề cho những thắng lợi lớn hơn.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Vo_Nguyen_Giap_1954.jpg/800px-Vo_Nguyen_Giap_1954.jpg',
    imageAlt: 'Đại tướng Võ Nguyên Giáp trong cuộc kháng chiến chống Pháp',
  },
  {
    id: 'dien-bien-phu',
    year: 1954,
    title: 'Chiến Thắng Điện Biên Phủ',
    shortDescription: 'Trận đánh lịch sử chấm dứt quyền lực quân sự thực dân Pháp ở Đông Dương.',
    timelineDetail:
      'Sau 56 ngày đêm vây hãm, quân ta đánh tan toàn bộ tập đoàn cứ điểm Pháp tại Điện Biên Phủ. Kỳ tích hậu cần — tháo pháo qua rừng núi lên cao điểm — cùng tinh thần quyết tâm của bộ đội và dân công đã làm nên chiến thắng lừng lẫy thế giới.',
    overview:
      'Sau 56 ngày đêm pháo kích dữ dội tại thung lũng Điện Biên Phủ, ngày 7/5/1954, quân đội ta dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp hoàn toàn đánh bại quân Pháp. Pháo binh được tháo rời, vận chuyển qua rừng núi và lắp trên cao điểm — kỳ tích hậu cần làm kinh ngạc thế giới.',
    significance:
      'Điện Biên Phủ được coi là một trong những chiến thắng quân sự vang dội nhất thế kỷ XX, đập tan huyền thoại bất khả chiến bại của chủ nghĩa thực dân và mở đường đến Hội nghị Geneva.',
    impact:
      'Chiến thắng buộc Pháp rút lui, chấm dứt kháng chiến chống Pháp và tạm thời chia đôi đất nước ở vĩ tuyến 17 chờ tổng tuyển cử thống nhất.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dien_Bien_Phu_victory.jpg/1280px-Dien_Bien_Phu_victory.jpg',
    imageAlt: 'Lễ kỷ niệm chiến thắng Điện Biên Phủ, 1954',
  },
  {
    id: 'geneva-agreement',
    year: 1954,
    title: 'Hiệp Định Geneva',
    shortDescription: 'Hiệp định quốc tế chia tạm Việt Nam và quy định tổng tuyển cử thống nhất.',
    timelineDetail:
      'Các cường quốc ký kết hiệp định chấm dứt chiến tranh Đông Dương, tạm chia đôi đất nước ở vĩ tuyến 17 và hẹn tổng tuyển cử thống nhất năm 1956. Hiệp định ghi nhận thắng lợi của nhân dân Việt Nam nhưng cũng đặt ra thách thức mới về thống nhất.',
    overview:
      'Hiệp định Geneva tháng 7/1954 chấm dứt chính thức cuộc kháng chiến chống Pháp. Việt Nam tạm thời chia đôi ở vĩ tuyến 17, quân Pháp rút về phía Nam, quân ta tập kết về phía Bắc. Tổng tuyển cử thống nhất dự kiến tháng 7/1956.',
    significance:
      'Hiệp định ghi nhận cuộc đấu tranh của dân tộc trên trường quốc tế, đồng thời đặt ra ranh giới tạm thời trở thành đường phân chia cho cuộc kháng chiến chống Mỹ sau này.',
    impact:
      'Khi tổng tuyển cử không được tổ chức, sự chia cắt cứng lại thành hai chính quyền đối lập — tiền đề cho cuộc can thiệp của Mỹ và chiến tranh Việt Nam.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Geneva_Conference_1954.jpg/1280px-Geneva_Conference_1954.jpg',
    imageAlt: 'Các đại biểu tại Hội nghị Geneva, 1954',
  },
  {
    id: 'dong-khoi',
    year: 1960,
    title: 'Phong Trào Đồng Khởi',
    shortDescription: 'Mặt trận Dân tộc Giải phóng phát động khởi nghĩa rộng khắp miền Nam.',
    timelineDetail:
      'Mặt trận Dân tộc Giải phóng miền Nam ra đời, tổ chức hóa phong trào Đồng Khởi với hàng loạt cuộc nổi dậy đồng thời ở nông thôn. Nhân dân miền Nam tham gia rộng rãi, biến đấu tranh vũ trang thành phong trào chính trị — quân sự có quy mô.',
    overview:
      'Ngày 20/12/1960, đại biểu miền Nam họp thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam (Mặt trận), tổ chức hóa phong trào Đồng Khởi. Các cuộc tấn công phối hợp và vận động chính trị lan rộng khắp nông thôn, thách thức quyền uy chính quyền Sài Gòn.',
    significance:
      'Phong trào biến đấu tranh vũ trang rời rạc thành lực lượng chính trị — quân sự có tổ chức với sự tham gia rộng rãi của nhân dân.',
    impact:
      'Mặt trận trở thành đối thủ chính của chính quyền Sài Gòn được Mỹ bảo hộ, leo thang thành chiến tranh toàn diện khi Mỹ đưa quân vào năm 1965.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Vietcong_soldiers.jpg/1280px-Vietcong_soldiers.jpg',
    imageAlt: 'Lực lượng giải phóng trong thời kỳ chiến tranh',
  },
  {
    id: 'tet-offensive',
    year: 1968,
    title: 'Tổng Tiến Công Và Nổi Dậy Tết Mậu Thân',
    shortDescription: 'Cuộc tấn công đồng loạt toàn quốc thay đổi cục diện chính trị chiến tranh.',
    timelineDetail:
      'Hơn 80.000 bộ đội tấn công đồng thời hơn 100 đô thị trong dịp Tết Mậu Thân, kể cả Sài Gòn và cố đô Huế. Cuộc tổng tiến công làm lung lay niềm tin của công chúng Mỹ và mở đường cho đàm phán hòa bình.',
    overview:
      'Trong đợt nghỉ Tết Mậu Thân tháng 1/1968, hơn 80.000 bộ đội Mặt trận và quân ta tấn công đồng thời hơn 100 thành phố, thị xã, trong đó có Sài Gòn và Huế. Dù tổn thất lớn về quân sự, cuộc tấn công chứng minh không nơi nào ở miền Nam là an toàn.',
    significance:
      'Tổng tiến công Tết Mậu Thân làm lung lay niềm tin công chúng Mỹ vào các tuyên bố chiến thắng, đánh dấu bước ngoặt trong ủng hộ chiến tranh tại Mỹ.',
    impact:
      'Tổng thống Johnson từ bỏ tranh cử, hòa đàm Paris bắt đầu, Mỹ dần chuyển sang chiến lược Việt hóa — mở đường cho việc rút quân.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tet_Offensive_1968.jpg/1280px-Tet_Offensive_1968.jpg',
    imageAlt: 'Chiến sự trong Tổng tiến công Tết Mậu Thân 1968',
  },
  {
    id: 'dien-bien-phu-air',
    year: 1972,
    title: 'Điện Biên Phủ Trên Không',
    shortDescription: 'Lực lượng phòng không đánh bại chiến dịch ném bom B-52 quy mô lớn.',
    timelineDetail:
      'Mỹ ném bom Hà Nội, Hải Phòng bằng hàng trăm máy bay B-52 trong chiến dịch Linebacker II. Lực lượng phòng không Việt Nam bắn rơi hàng chục máy bay chiến lược, buộc Mỹ ký Hiệp định Paris và chấm dứt can thiệp quân sự.',
    overview:
      'Tháng 12/1972, Mỹ phát động chiến dịch Linebacker II — cuộc ném bom quy mô nhất chiến tranh — nhắm vào Hà Nội và Hải Phòng. Lực lượng phòng không Việt Nam bằng tên lửa SA-2 và pháo cao xạ bắn rơi hàng chục máy bay B-52, được gọi là "Điện Biên Phủ trên không".',
    significance:
      'Chiến dịch chứng minh khả năng chống trả bom chiến lược hiện đại và buộc Mỹ trở lại bàn đàm phán theo hướng có lợi cho ta.',
    impact:
      'Hiệp định Paris ký tháng 1/1973, chấm dứt sự can thiệp quân sự trực tiếp của Mỹ và mở đường cho chiến dịch giải phóng cuối cùng.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/B-52_shot_down_over_Hanoi.jpg/1280px-B-52_shot_down_over_Hanoi.jpg',
    imageAlt: 'Máy bay B-52 bị bắn rơi trên Hà Nội trong chiến dịch Linebacker II',
  },
  {
    id: 'reunification',
    year: 1975,
    title: 'Thống Nhất Đất Nước',
    shortDescription: 'Chiến dịch Hồ Chí Minh giải phóng Sài Gòn, thống nhất Tổ quốc.',
    timelineDetail:
      'Chiến dịch Hồ Chí Minh tiến công thần tốc từ Tây Nguyên đến Sài Gòn. Ngày 30/4/1975, xe tăng giải phóng tiến vào Dinh Độc Lập — khát vọng thống nhất trong Tuyên ngôn Độc lập 1945 trở thành hiện thực.',
    overview:
      'Ngày 30/4/1975, xe tăng Quân giải phóng tiến vào Dinh Độc Lập, chấm dứt chiến tranh và thống nhất đất nước. Chiến dịch Hồ Chí Minh, phát động vài tuần trước, quét sạch Tây Nguyên và các thành phố ven biển trong một cuộc tiến công thần tốc.',
    significance:
      'Thống nhất đất nước hoàn thành khát vọng đã nêu trong Tuyên ngôn Độc lập 1945 — một Việt Nam độc lập, thống nhất, chủ quyền sau ba thập kỷ chiến tranh.',
    impact:
      'Chiến thắng thay đổi cục diện Đông Nam Á, truyền cảm hứng cho các phong trào giải phóng dân tộc và mở ra giai đoạn xây dựng, hàn gắn vết thương chiến tranh.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tank_390_entering_the_Independence_Palace.jpg/1280px-Tank_390_entering_the_Independence_Palace.jpg',
    imageAlt: 'Xe tăng 390 tiến vào Dinh Độc Lập, ngày 30/4/1975',
  },
];
