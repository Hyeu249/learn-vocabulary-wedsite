import ANSWER_KEY from "./test1.js";

const json = [
  // "____________________PHRASAL_VERBS____________________",
  // "lean toward (v): nghiêng về",
  // "turn in (v): nộp, gửi",
  // "____________________HARD_PHRASAL____________________",
  // "to the lineup of daily headliners (n): vào danh sách các ngôi sao biểu diễn hàng ngày",
  // "a gas-powered cooktop and oven (n): bếp và lò nướng chạy bằng gas",
  // "without further ado (n): không cần nói nhiều thêm",
  // "a sizeable amount of (n): số lượng lớn về",
  // "the business's selection of outdoor furniture (n): lựa chọn đồ nội thất ngoài trời của doanh nghiệp",
  // "head count of (n): tổng số người",
  // "stain removal product (n): sản phẩm tẩy vết bẩn",
  // "magnetic luggage tag (n): thẻ hành lý từ tính",
  // "occupational safety department (n): bộ phận an toàn lao động",
  // "wildlife conservation bill (n): dự luật bảo tồn động vật hoang dã",
  // "healthy work relationship (n): mối quan hệ công việc lành mạnh",
  // "one-acre lot (n): lô một mẫu Anh",
  // "modern business traveler (n): du khách kinh doanh hiện đại",
  // "public relations department (n): phòng quan hệ công chúng",
  // "research-backed (n): đã được nghiên cứu",
  // "town's independence day parade (n): cuộc diễu hành ngày độc lập của thị trấn",
  // "sheepdog herding demonstration (n): trình diễn chăn nuôi chó chăn cừu",
  // "coming off the line (n): sắp ra mắt(đi ra khỏi, sắp rời)",
  // "metal press machine (n): máy ép kim loại",
  // "methods for bargaining and settling the best deal (n): phương pháp thương lượng và giải quyết thỏa thuận tốt nhất",
  // "____________________PHRASAL_NOUNS____________________",
  // "recruit orientation (n): định hướng tuyển dụng",
  // "short notice (p): trong thời gian ngắn",
  // "the resort guest (n): du khách nghỉ dưỡng",
  // "item code (n): mã sản phẩm",
  // "light-emitting (n): phát quang",
  // "competitive attribute (n): lợi thế cạnh tranh(thuộc tính cạnh tranh)",
  // "bright light (n): sáng rực rỡ",
  // "less-than-ideal (n): kém lý tưởng",
  // "card stock (n): bìa cứng",
  // "precautionary measure (n): biện pháp phòng ngừa",
  // "flat tire (n): xì lốp",
  // "stainless steel (n): thép không gỉ",
  // "employee directory (n): danh bạ nhân viên",
  // "decorative fountain (n): đài phun nước có trang trí",
  // "heart surgeon (n): bác sĩ phẫu thuật tim",
  // "industry veteran (n): kỳ cựu trong ngành",
  // "hose down (n): xử lý",
  // "budget model (n): mô hình ngân sách(để giúp thấy và hiểu cách phân bổ nguồn thu và cách nguồn thu)",
  // "directly opposite (n): đối diện trực tiếp",
  // "written exam (n): thi viết",
  // "worthy cause (n): lý do xứng đáng(nguyên nhân xứng đáng)",
  // "evening gown (n): váy dạ hội",
  // "protective cover (n): vỏ bảo vệ",
  // "fuel line (n): đường ống dẫn nhiên liệu",
  // "medium rare (n): tái chín",
  // "laundry detergent (n): bột giặt",
  // "descriptive answer (n): câu trả lời có mô tả",
  // "prize drawing (n): rút thăm trúng thưởng",
  // "inspirational example (n): người truyền cảm hứng(tấm gương đầy cảm hứng)",
  // "____________________CAM_XANH_LC_TEST_2____________________",
  // "that has resulted in low satisfaction ratings (n): điều đó đã dẫn đến xếp hạng mức độ hài lòng thấp",
  // "____________________CAM_XANH_LC_TEST_3____________________",
  // "leaning over (v): nghiêng về",
  // "original purchase (n): mua đứt(mua giá gốc)",
  // "client billing (n): tính tiền cho khách hàng",
  // "scented hand cream (n): kem bôi tay có hương thơm",
  // "a great deal of (n): rất nhiều",
  // "sales clerk (n): nhân viên bán hàng",
  // "set out (v): bắt đầu",
  // "high-profile outdoor enthusiasts (n): những người đam mê hoạt động ngoài trời",
  // "____________________CAM_XANH_LC_TEST_4____________________",
  // "this goes to show (n): điều này cho thấy",
  // "sweet treat (n): món ngọt",
  // "____________________CAM_XANH_LC_TEST_5____________________",
  // "fill the open (n): lắp đầy khoản trống",
  // "level of interest (n): mức độ quan tâm",
  // "the manager's authorization (n): cấp quyền của quản lý",
  // "the customer appreciation banquet (n): tiệc tri ân khách hàng",
  // "commercial transaction (n): giao dịch thương mại",
  // "____________________CAM_XANH_LC_TEST_7____________________",
  // "floor plan (n): sơ đồ tầng(kế hoạch tầng)",
  // "sort through (v): sắp xếp",
  // "building management office (n): văn phòng quản lý tòa nhà",
  // "____________________CAM_XANH_LC_TEST_8____________________",
  // "temp agency (n): cơ quan tạm thời",
  // "size up (v): quy mô(xác định, tăng kích thước)",
  // "water skiing (n): trượt nước",
  // "nature talk (n): buổi nói chuyện về thiên nhiên(buổi mà có chuyên gia nói chuyện về chủ đề thiên nhiên ở lĩnh vực của họ)",
  // "far right (n): ngoài cùng bên phải",
  // "____________________CAM_XANH_LC_TEST_9____________________",
  // "concession stand (n): quầy đồ ăn(quầy nhượng quyền: sự kiện hoặc địa điểm ký hợp đồng quyền bán thực phẩm cho bên thứ ba, bên thứ ba đó gọi là quầy nhượng quyền)",
  // "potted tree (n): cây trong chậu",
  // "cruising altitude (n): độ cao bay-trên biển",
  // "duty-free (n): miễn thuế",
  // "connecting flights (n): các chuyến bay liên kết(liên kết với nhau để đến được một địa điểm)"
  // "____________________CAM_XANH_LC_TEST_10____________________",
  // "sightseeing tour (n): thăm quan du lịch",
  // "grand palace (n): cung điện lớn",
  // "as an added bonus (n): như một phần bổ sung",
  // "picnic shelter project (n): dự án nhà chòi dã ngoại",
  // "____________________ETS_2022_LC_TEST_1____________________",
  // "bending over (v): cuối xuống",
  // "prop against (v): dựa vào",
  // "vending cart (n): xe bán hàng tự động",
  // "mobile food stand (n): quầy bán đồ ăn di động",
  // "inventory process (n): quá trình kiểm kê",
  // "right past (n): ngay qua",
  // "turn-off (n): ngã rẽ",
  // "visual merchandising (n): bán hàng trực quan(sử dụng sơ đồ mặt bằng, màu sắc, ánh sáng, màn hình, công nghệ và các yếu tố khác để thu hút sự chú ý của khách hàng)",
  // "display standards (n): tiêu chuẩn hiển thị",
  // "vertical stripe (n): sọc dọc",
  // "grid wall panel (n): tấm tường lưới",
  // "____________________ETS_2022_LC_TEST_2____________________",
  // "exhaust fan (n): quạt thông gió",
  // "too bold (n): táo bạo",
  // "car title (n): giấy đăng ký xe ô tô",
  // "____________________ETS_2022_LC_TEST_3____________________",
  // "on the other end (n): ở đầu bên kia",
  // "cast iron (n): gang thép",
  // "hearing impairment (n): khiếm thính",
  // "manufacturing processes (n): quy trình sản xuất",
  // "incentive of a bonus (n): khuyến khích tiền thưởng(persuade: pờ squay)",
  // "just a heads up that (n): chỉ cân lưu ý rằng",
  // "retired work instructions (n): hướng dẫn việc làm đã dừng- đã cũ",
  // "____________________ETS_2022_LC_TEST_4____________________",
  // "place setting (n): việc sắp đặt",
  // "seating chart layout (n): sơ đồ chổ ngồi",
  // "quarterly tax filing (n): hồ sơ thuế hằng quý",
  // "____________________ETS_2022_LC_TEST_5____________________",
  // "set designer (n): thiết kế phim trường",
  // "brewed coffees (n): cà phê pha(pha bột)"
  // "____________________ETS_2022_LC_TEST_7____________________",
  // "textile concrete (n): bê tông dệt",
  // "room block (n): phòng khối(phòng giảm giá khi đặt nhiều)",
  // "it's odd (n): thật kỳ lạ",
  // "____________________ETS_2022_LC_TEST_8____________________",
  // "rope off (v): gở bỏ",
  // "continuing education credit (n): tín chỉ giáo dục thường xuyên(tín chỉ hỗ trợ chuyên gia duy trì giấy phép hành nghề)",
  // "cross-functional (n): đa chức năng",
  // "____________________ETS_2019_LC_TEST_1____________________",
  // "wall socket (n): ổ cắm điện",
];
//i noticed this pair of shoes was incorrectly scanned in as the more expensive deluxe version of the Wriggly line

export { json as namE };
// export { ANSWER_KEY as namE };

//Create vocabulary convention
//nếu 1 từ, đặt bình thường
//nếu 2 từ, thêm dấu chấm cuối câu(nếu có dấu đóng ngoặc, cũng thêm dấu chấm sau nó)
