// import ANSWER_KEY from "./TEST_ETS_2022/test7.js";
// import ANSWER_KEY from "./TEST_ETS_2022/testRC_4.js";
// import ANSWER_KEY from "./TEST_CAM_XANH_2/test10.js";
// import ANSWER_KEY from "./TEST_CAM_XANH_2/testRC_8.js";
// import need_to_read from "./need_to_read.js";
import voca_for_coder from "./vocabulary_for_coder.js";

const json = [
  "debris (n): --------------------- mảnh vỡ, đống đổ nát",
  "excessive (adj): --------------------- nhiều, quá mức",
  "__________________TOEIC_LC_PART3_E5__________________",
  "swamp (n,v): --------------------- đầm lầy, tràn ngập",
  "irritate (v): --------------------- chọc tức, khó chịu",
  "triathlon (n): --------------------- ba môn phối hợp",
  "__________________TOEIC_LC_PART4_E3__________________",
  "pellet (n): --------------------- viên, hạt",
  "foam (n): --------------------- bọt, xốp(xốp-->chất liệu cao su nhẹ mềm, có nhiều lỗ nhỏ, được dùng làm ghế, nệm)",
  "capsule (n): --------------------- viên thuốc",
  "__________________ETS_2022_RC_TEST_10__________________",
  "stagnate (v): --------------------- đình trệ",
  "inhibit (v): --------------------- cản trở",
  "harsh (adj): --------------------- khắc nghiệt",
  "cliff (n): --------------------- vách đá",
  "__________________HACKER_3_RC_TEST_1__________________",
  "precipitation (n): --------------------- lượng mưa, kết tủa",
  "__________________TOEIC_LC_PART3_E6__________________",
  "compromise (n): --------------------- thỏa hiệp",
  "drill (n): --------------------- diễn tập, bài tập(khoan)",
  "calibre (n): --------------------- tầm cỡ(caliber-us)",
  "rigorous (adj): --------------------- nghiêm ngặt, nghiêm khắc",
  "thermal (adj): --------------------- nhiệt",
  "flock (v): --------------------- đổ xô, bầy đàn",
  "__________________HACKER_2_TEST_5_RC__________________",
  "reluctant (v): --------------------- lưỡng lự, miễn cưỡng",
  "__________________HACKER_2_TEST_6_RC__________________",
  "crumble (v): --------------------- đổ nát(pha vỡ, sụp đổ, vỡ vụn)",
  "maritime (adj): --------------------- hàng hải",
  "shed (v): --------------------- bỏ, kho(loại bỏ, trút bỏ)",
  "rectify (v): --------------------- khắc phục",
  "perception (n): --------------------- nhận thức",
  "reign (v,n): trị vì, triều đại(thống trị)",
  "__________________HACKER_2_TEST_3_LC__________________",
  "litter (n): rác",
  "dwindle (n): cạn kiệt",
  "volcano (n): núi lửa",
  "summit (n): đỉnh",
  "cease (v): ngừng",
  "barrier (n): rào chắn ngang",
  "shatter (v): đập vỡ",
  "diminish (v): giảm bớt",
  "exquisite (adj): tinh tế",
  "delicacy (n): món ngon",
  "mill (n): nhà máy, cối xoay gió",
  "ordinary (adj): bình thường",
  "culminate (v): đỉnh điểm",
  "burst (v): nổ",
  "stringent (adj): nghiêm ngặt",
  "exhaust (n): khí thải(thoát khí-thông gió)",
  "drain (v): rút nước, ráo nước<br>+ drainage (n): thoát nước.",
  "amend (v): sửa đổi",
  "dense (adj): dày đặc, rậm rạp, đần độn",
  "waft (v): thoang thoảng, văng vẳng",
  "adequate (adj): đầy đủ",
  "hem (n): đường viền áo<br>+ hemline (n): đường viền áo.",
  "heel (n): gót chân",
  "junk (n): phế liệu",
  "vast (adj): rộng lớn",
  "chorus (n): hợp xướng, đồng ca",
  "assessor (n): người đánh giá",
  "proportion (n): tỉ lệ, tương xứng(cân xứng)",
  "saturate (adj): bão hòa",
  "figurine (n): bức tượng nhỏ",
  "resistant (adj): chống kháng",
  "allowance (n): trợ cấp",
  "comprehend (v): hiểu",
  "chancellor (n): thủ tường, hiệu trưởng",
  "union (n): công đoàn, liên minh",
  "incline (v): nghiêng",
  "discriminate (v): phân biệt, phân biệt đối xử",
  "halt (v): tạm dừng",
  "indigenous (adj): bản địa",
  "planetarium (n): trạm thiên văn",
  "auxiliary (adj): phụ, bổ sung",
  "orbit (n): quỹ đạo",
  "collar (n): cổ áo",
  "stability (v): ổn định<br>+ stabilize (v): ổn định.",
  "ankle (n): mắt cá",
  "regimen (n): chế độ",
  "diabetic (n): bệnh tiểu đường",
  "majority (n): phần lớn",
  "coarse (adj): thô",
  "monarch (n): quân vương",
  "robes (n): áo choàng",
  "pal (n): bạn bè",
  "emission (n): khí thải, phát thải",
  "bacteria (n): vi khuẩn",
  "thaw (v): rã đông, làm tan",
  "outskirts (n): ngoại ô, vùng ngoài",
  "crave (v): thèm muốn",
  "dispenser (n): máy phân phối",
  "trace (n,v): dấu vết, truy tìm",
  "lucrative (adj): béo bở",
  "substitute (n): thay thế, sự thay thế",
  "disparity (n): chênh lệch",
  "sanitize (v): làm vệ sinh",
  "disinfect (v): khử trùng",
  "resort (v): phải sử dụng đến",
  "disregard (v): coi thường, bỏ qua",
  "surrender (n): đầu hàng",
  "eradicate (v): diệt trừ",
  "inhabit (v): trú ngụ",
  "servant (n): người hầu",
  "propel (v): đẩy",
  "rapport (n): mối quan hệ",
  "notarize (v): công chứng",
  "apparatus (n): bộ máy",
  "damp (adj): ẩm, ẩm ướt",
  "whereas (conjunction):  trái lại",
  "impose (v): áp đặt",
  "retreat (n): rút lui, nghỉ dưỡng",
  "leisure (n): rảnh rỗi, giải trí",
  "raft (n): cái bè",
  "annex (v): phụ lục, phụ vào, thôn tín, sáp nhập",
  "liquid (n): chất lỏng",
  "principal (adj): hiệu trưởng",
  "flaw (n): khuyết điểm",
  "harshest (adj): khắc nghiệt",
  "concierge (n): người hướng dẫn",
  "valet (n): người hầu",
  "dispose (v): vứt bỏ",
  "carriage (n): xe ngựa",
  "merriment (n): sự vui vẻ",
  "brew (v): pha, ủ(pha trà, ủ bia).<br>+ brewery (n): nhà máy ủ-bia(ủ bia, ủ nước trái cây).",
  "distortion (n): biến dạng, méo mó",
  "sensation (n): cảm giác",
  "forfeit (v): bị tước(mất thứ gì đó để đánh mất thứ gì đó hoặc bị lấy mất thứ gì đó của bạn bởi vì bạn đã làm điều gì đó sai trái)",
  "lessee (n): người thuê",
  "fleet (n): đội tàu",
  "surplus (n): dư thừa",
  "unanimous (adj): nhất trí",
  "admiration (n): khâm phục",
  "escort (v): hộ tống",
  "pier (n): con đê, bến tàu, chân cầu",
  "rake (v): cào",
  "perfume (n,v): nước hoa-nặng, làm thơm",
  "cologne (n): nước hoa-nhẹ",
  "competency (n): năng lục",
  "harmful (adj): có hại",
  "emblem (n): biểu tượng",
  "sleek (adj): kiểu dáng đẹp, bóng bẩy",
  "abundance (n): nhiều, dồi dào, phong phú",
  "diagnostic (adj): chuẩn đoán",
  "metropolitan (adj): đô thị",
  "ruin (v): hủy hoại<br>+ ruins (n): tàn tích.",
  "amenity (n): tiện nghi",
  "pertinent (adj): thích hợp",
  "province (n): tỉnh thành",
  "county (n): tỉnh(đơn vị hành chính lớn nhất của anh)",
  "recur (v): tái diễn<br>+ recuring (n): định kỳ.",
  "odor (adj): mùi",
  "upholster (v): bọc(bọc ghế, bằng vật liệu mềm, đệm, vải hoặc da)",
  "infringe (v): vi phạm",
  "aggressive (adj): tích cực, gây hấn",
  "assorted (adj): thập cẩm",
  "stub (n): gốc, cuốn",
  "mascot (n): linh vật",
  "acute (adj): cao(dùng để nhấn mạnh)",
  "courteous (adj): lịch sự",
  "unanimity (n): sự nhất trí",
  "pane (n): khung",
  "adjourn (v): hoãn lại",
  "incur (v): gánh chịu",
  "adorn (v): tô điểm",
  "fabulous (adj): tuyệt vời",
  "fossil (n): hóa thạch",
  "ingenuity (n): khéo léo",
  "arduous (adj): gian truân",
  "presume (v): đoán<br>+ presumably (adv): có lẽ.",
  "impermeable (adj): không thấm nước",
  "ash (n): tro tàn",
  "furnace (n): lò",
  "hustle (n): hối hả",
  "lush (adj): tươi tối",
  "pledge (v): cam kết, lời hứa",
  "rugged (adj): gồ ghề",
  "protrude (v): nhô ra",
  "stump (n): gốc cây",
  "shrub (n): cây bụi",
  "cardiology (n): khoa tim",
  "mural (n): tranh tường",
  "assume (v): cho rằng, đảm nhận",
  "account (n): lý do, tường thuật",
  "pitch (v): trình bày",
  "airdate (n): ngày phát sóng",
  "peacock (n): con công",
  "cherub (n): đứa bé thiên sứ",
  "progressively (adverb): dần dần(tăng dần)",
  "cupboard (n): tủ",
  "headway (n): tiến triển",
  "bill (n): dự luật(hóa đơn)",
  "deli (n): cửa hàng đồ ăn",
  "bar (n): thanh<br>+ barring (n): trừ-ra.",
  "trait (n): đặc điểm",
  "recline (v): tựa, gác",
  "orphanage (n): cô nhi viện",
  "lay (v): đặt, nằm(laid-qk)",
  "odd (n): kỳ quặc(lẻ)",
  "strand (v): mắc kẹt, mắc cạn",
  "steep (adj): quá mức, dốc(giá cả, yêu cầu)",
  "presentable (adj): bảnh bao",
  "peg (n): cái cọc(cái chốt, cái kẹp, đóng, gắn, gắn kết)",
  "clearance (n): thông quan, giấy phép",
  "goggles (n): kính bảo hộ",
  "provincial (adj): cấp tỉnh",
  "sewer (n): cống rãnh(người may)",
  "transcontinental (adj): xuyên lục địa",
  "jam (v,n): kẹt, mức(kẹt xe...)",
  "chronicle (n): biên niên sử",
  "sodium (n): nguyên tố natri(hóa học)",
  "prosperous (adj): thịnh vượng",
  "bureau (n): cục(văn phòng, tổ chức)",
  "pod (n): vỏ quả",
  "ferment (n): lên men<br>+ fermentation (n): lên men.",
  "entree (n): món chính(quyền được tham gia)",
  "bamboo (n): cây tre",
  "shoot (n): chồi cây",
  "autumn (n): mùa thu",
  "rare (adj): hiếm",
  "hose (n): vòi, ống nước",
  "extreme (adj): khắc nghiệt(thái cực, cùng cực, cực đoan, mạo hiểm)",
  "layover (n): thời gian nghỉ",
  "misguided (adj): sai lầm",
  "eclipse (v): làm lu mờ",
  "kayak (n): thuyền một người",
  "layoff (n): sa thải",
  "concise (n): ngắn gọn",
  "headliner (n): ngôi sao biểu diễn",
  "farewell (n): tạm biệt",
  "muffin (n): bánh nướng xốp",
  "boulevard (n): đại lộ",
  "napkin (n): khăn ăn",
  "barn (n): nhà kho",
  "pasture (n): đồng cỏ",
  "herd (n,v): đàn, chăn-dắt",
  "treadmill (n): máy chạy bộ",
  "gadget (n): dụng cụ(đồ dùng)",
  "typhoon (n): bão nhiệt đới",
  "sturdy (adj): cứng cáp",
  "withstand (v): chịu được",
  "deficit (n): thâm hụt<br>+ deficiency (n): thiếu hụt",
  "bouquet (n): bó hoa",
  "streak (n): vệt, chuỗi(kỉ lục, thành công, một loạt thành công hoặc thất bại, đặc biệt là trong một môn thể thao hoặc trong cờ bạc)",
  "devise (v): nghĩ ra",
  "altitude (n): độ cao",
  "roam (n): đi, đi dạo",
  "dam (n): con đập(con đập)",
  "deter (n): ngăn chặn",
  "ventilate (v): thông gió",
  "lumber (n): gỗ",
  "plywood (n): ván ép",
  "fiberboard (n): ván sợi",
  "needles (n): cây kim, lá thông",
  "asteroid (n): tiểu hành tinh",
  "impairment (n): suy giảm(khiếm khuyết)",
  "nutty (adj): bổ dưỡng(hấp dẫn, vị hạt dẻ, nhiều quả hạch)",
  "slab (n): phiến, tấm",
  "polish (v): đánh bóng",
  "forklift (n): xe nâng",
  "constrain (v): hạn chế, bắt buộc",
  "philanthropy (n): từ thiện",
  "broaden (v): mở rộng",
  "counterpart (n): đối tác(người đồng cấp)",
  "courtesy (n): lịch sự",
  "appraisal (n): thẩm định",
  "degradation (n): suy thoái(xuống cấp)<br>+ degrade (v): suy thoái(thoái hóa)",
  "glide (v): lướt",
  "maneuver (v): vận động(điều động)",
  "dubbing (n): lồng tiếng",
  "chin (n): cằm",
  "mold (n): khuôn đúc (nhào nặn)",
  "dosage (n): liều lượng",
  "prop (v): chống đỡ, nâng đỡ(hỗ trợ)",
  "geometric (adj): hình học",
  "divert (v): chuyển, chuyển hướng",
  "poach (v): kho(rim-cá)",
  "mileage (n): số dặm, có lợi",
  "wrinkle (n): nếp nhăn",
  "twist (v): xoắn",
  "botanical (adj): thuộc thực vật",
  "drought (n): hạn hán",
  "neglect (v,n): bỏ quên, bỏ rơi, bỏ mặc",
  "extravagant (adj): xa hoa, ngông cuồng",
  "stark (adj): hoàn toàn, rõ ràng",
  "pond (n): cái ao",
  "landfill (n): bãi rác",
];

export { json as namE };
// export { ANSWER_KEY as namE };
// export { voca_for_coder as namE };
// export { need_to_read as namE };

//Create vocabulary convention
//nếu 1 từ, đặt bình thường
//nếu 2 từ, thêm dấu chấm cuối câu(nếu có dấu đóng ngoặc, cũng thêm dấu chấm sau nó)

//note ngữ pháp
//1.be more ... ? 100% '...' = tính từ
