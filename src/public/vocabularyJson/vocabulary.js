// import ANSWER_KEY from "./test1.js";
// import ANSWER_KEY from "./ETS_2020_TEST-1.js";
// import need_to_read from "./need_to_read.js";
import ANSWER_KEY from "./HACKER_2_TEST-4.js";

const json = [
  // "__________________NEW_ECONOMY_2018__________________",
  // "elaborate (adj): phức tạp, tỉ mỉ",
  // "feasible (adj): khả thi",
  // "seldom (adverb): hiếm khi",
  // "contradictory (adj): mâu thuẫn, trái ngược",
  // "deliberate (adj): chủ ý<br>+ deliberation (n): cân nhắc.",
  // "induce (v): gây ra",
  // "punctual (adj): đúng giờ",
  // "cordial (adj): chân thành",
  // "aid (n): sự giúp đỡ",
  // "barely (adverb): hầu như không",
  // "disease (n): bệnh",
  // "refurbish (v): tân trang",
  // "trivia (n): đố vui",
  // "scrap (n,v): mảnh, loại bỏ",
  // "pose (v): đưa ra",
  // "hazard (n): nguy hiểm",
  // "eager (adj): háo hức",
  // "purification (n): thanh lọc",
  // "crop (n): mùa, vụ, cây trồng",
  // "thrive (v): phát đạt, phát triển mạnh",
  // "influx (n): làn sóng, dòng chảy(rất nhiều người, tiền bạc hoặc những thứ đến một nơi nào đó)",
  // "entail (v): đòi hỏi",
  // "foster (v): thúc đẩy(nuôi dưỡng)",
  // "erect (v): dựng lên",
  // "acquaint (v): làm quen",
  // "defer (v): hoãn",
  // "obstacle (n): chướng ngại vật, trở ngại",
  // "petition (n): đơn kiến nghị",
  // "optimism (n): sự lạc quan",
  // "sustain (v): duy trì<br>+ sustainable (adj): bền vững.",
  // "hence (adverb): do đó, kể từ đây",
  // "waive (v): từ bỏ",
  // "resist (v): kháng cự",
  // "confine (v): giới hạn<br>+ confines (n): giới hạn.",
  // "crisis (n): cuộc khủng hoảng",
  // "deem (v): coi là",
  // "idle (adj): nhàn rỗi, không làm gì",
  // "delicate (adj): tinh tế ,mỏng manh",
  // "lenient (adj): nhân hậu",
  // "vague (adj): mơ hồ",
  // "steady (adj): đều đặn, vững chắc",
  // "assert (v): khẳng định",
  // "hail (n): mưa đá",
  // "provisional (adj): tạm thời<br>+ provisional (n): cung cấp<br>+ provide (v): cung cấp.",
  // "spatial (adj): không gian<br>+ space(n): không gian.",
  // "tentative (adj): dự kiến",
  // "segment (n): đoạn, phân khúc",
  // "strive (v): cố gắng",
  // "mandate (n): bắt buộc, ủy thác",
  // "inflation (n): lạm phát",
  // "marine (adj): biển",
  // "lagoon (n): đầm phá",
  // "coral (n): san hô",
  // "reef (n): đá ngầm",
  // "splendid (adj): lộng lẫy",
  // "prestige (n): uy tín<br>+ prestigious (adj): uy tín.",
  // "apologetic (adj): hối lỗi",
  // "enact (v): ban hành",
  // "subsidiary (n): công ty con",
  // "spectator (n): khán giả",
  // "turnover (n): doanh thu",
  // "turnout (n): người tham dự ,cử tri",
  // "trustee (n): người được ủy thác, ủy viên quản trị",
  // "mediate (v): dàn xếp",
  // "stipulate (v): quy định",
  // "precede (v): trước(đi trước, nói trước, làm trước, đứng trước).<br>+ predecessor (n): người tiền nhiệm.",
  // "dent (n): sức mẻ",
  // "brake (v,n): phanh(phanh xe, hãm xe)",
  // "criteria (n): các tiêu chí(các tiêu chuẩn).<br>+ criterion (n): tiêu chí(tiêu chuẩn).",
  // "veteran (n): kỳ cựu, cựu chiến binh",
  // "demolish (v): phá hủy<br>+ demolition (n): sự phá hủy.",
  // "premiere (v,n): buổi ra mắt(phim)",
  // "crate (n): thùng gỗ",
  // "inclination (n): khuynh hướng",
  // "pension (n): lương hưu",
  // "peer (n): xem xét, đồng nghiệp",
  // "stakeholder (n): các bên liên quan",
  // "commence (v): bắt đầu",
  // "vicinity (n): lân cận",
  // "moderate (adj): vừa phải, ôn hòa<br>+ moderate (v): kiểm duyệt<br>+ moderator (n): người điều hành, người điều tiết.",
  // "prolong (v): kéo dài",
  // "gesture (n): cử chỉ",
  // "intensive (adj): chuyên sâu",
  // "immense (adj): rất, lớn(cực kỳ lớn hoặc tuyệt vời)",
  // "monument (n): đài tưởng niệm",
  // "reveal (v): tiết lộ",
  // "offence (n): vi phạm",
  // "statute (n): quy chế",
  // "negligence (n): sơ xuất, thiếu trách nhiệm",
  // "exemplary (adj): gương mẫu",
  // "facelift (n): đổi mới",
  // "aviation (n): hàng không",
  // "disclose (v): tiết lộ",
  // "arose (v): nảy sinh",
  // "derive (v): lấy được, bắt nguồn",
  // "errand (n): việc vặt",
  // "lessen (v): giảm bớt",
  // "commemorate (v): kỷ niệm",
  // "pedal (n): bàn đạp",
  // "toe (n): ngón chân(toes => số nhiều)",
  // "likelihood (n): khả năng(có khả năng xãy ra)",
  // "backlit (adj): ngược sáng, đèn nền",
  // "therapy (n): trị liệu",
  // "alleviate (v): giảm bớt",
  // "poverty (n): nghèo",
  // "privilege (n): đặc quyền<br>+ underprivilege (adj): nghèo.",
  // "convene (v): triệu tập",
  // "unwind (v): thư giãn",
  // "allergy (n): dị ứng",
  // "lodge (n): chổ ở(một ngôi nhà nhỏ ở vùng quê, nơi mọi người ở lại khi họ muốn tham gia một số loại hình thể thao ngoài trời)",
  // "stud (v): khảm(một miếng kim loại tròn, nhỏ được gắn vào bề mặt của một thứ gì đó, đặc biệt là để trang trí)",
  // "parchment (n): giấy da",
  // "emboss (v): in nổi",
  // "stationery (n): văn phòng phẩm",
  // "expedite (v): đẩy nhanh(xúc tiến)<br>+ expedition (n): cuộc thám hiểm.",
  // "adhesive (adj): dính",
  // "trim (v): cắt, trang trí",
  // "strap (v,n): buộc, dây đeo",
  // "prominent (adj): nổi bật",
  // "diplomatic (adj): ngoại giao<br>+ diploma (n): bằng cấp.",
  // "eminent (adj): xuất sắc, lỗi lạc(lỗi lạc === nỗi tiếng)",
  // "nozzle (n): vòi phun",
  // "dispense (v): phân phối, pha chế",
  // "evacuate (v): sơ tán",
  // "solvent (n): khả quan, dung môi",
  // "terrain (n): địa hình",
  // "exempt (adj): miễn",
  // "consent (n): đồng ý",
  // "surge (n): gia tăng, dâng trào<br>+ surgery (n): phẫu thuật.",
  // "severe (n): nghiêm trọng",
  // "haste (n): vội vàng<br>+ hastily (adverb): vội vàng.",
  // "speculate (v): dự đoán<br>+ speculation (n): dự đoán.",
  // "amid (preposition): ở giữa, ở",
  // "relieve (v): giảm nhẹ, cứu trợ<br>+ relief (n): giảm nhẹ, cứu trợ.",
  // "fluctuate (v): giao động",
  // "declare (v): tuyên bố",
  // "vibrant (adj): sôi động",
  // "diverse (adj): đa dạng",
  // "solidify (v): củng cố",
  // "exceed (v): vượt quá",
  // "flour (n): bột",
  // "landlord (n): chủ nhà, chủ",
  // "spout (n,v): vòi phun, phun ra",
  // "drip (v): nhỏ giọt",
  // "diligent (adj): siêng năng",
  // "classify (v): phân loại",
  // "commodity (n): hàng hóa",
  // "scarce (adj): khan hiếm",
  // "curator (n): người phụ trách",
  // "portray (v): khắc họa",
  // "artifact (n): hiện vật",
  // "tape (n): băng ghi âm, băng để buộc",
  // "solicit (v): thu hút",
  // "auction (n): bán đấu giá",
  // "immerse (v): đắm mình",
  // "curate (v): quản lý",
  // "endeavour (v): nỗ lực",
  // "preside (v): chủ trì",
  // "contend (v): cho rằng, đấu tranh",
  // "abide (v): tuân theo",
  // "acclaim (v): khen ngợi",
  // "genre (n): thể loại",
  // "modest (adj): khiêm tốn",
  // "cult (n): sùng bái",
  // "pioneer (n): tiên phong",
  // "condominium (n): chung cư",
  // "transcend (v): vượt qua",
  // "discrepancy (n): sự khác biệt",
  // "exclusive (v,adj): loại trừ, duy nhất",
  // "jersey (n): áo",
  // "autographed (adj): có chữ ký",
  // "memorabilia (n): kỷ vật",
  // "counsel (n): cố vấn",
  // "cottage (n): nhà tranh",
  // "rustic (adj): mộc mạc",
  // "paddle (v): chèo thuyền",
  // "mingle (v): trộn lẫn",
  // "bonfire (n): lửa trại",
  // "heritage (n): di sản",
  // "accountable (adj): chịu trách nhiệm",
  // "sole (adj): duy nhất, đế giày",
  // "mediocre (adj): tầm thường",
  // "recital (n): biểu diễn",
  // "hesitant (adj): do dự",
  // "outward (adj): bề ngoài, hướng ngoại",
  // "intimate (adj): thân mật",
  // "consolidate (v): củng cố, hợp nhất",
  // "retract (v): rút lại<br>+ retraction (n): sự rút lại.",
  // "proficient (adj): thành thạo",
  // "proofread (n): đọc và sửa",
  // "leash (n): dây buộc",
  // "glossy (adj): bóng loáng",
  // "fond (adj): yêu thích",
  // "awning (n): mái hiên",
  // "hub (n): trung tâm",
  // "shovel (v,n): xúc, cái xẻng",
  // "testimonial (n): lời chứng thực",
  // "orchid (n): cây phong lan",
  // "slip (v): trượt, phiếu",
  // "__________________NEW__________________",
  // "legitimize (v): hợp pháp hóa",
  // "characteristic (n): đặc trưng, đặc điểm",
  // "bond (n): trái phiếu, ràng buộc",
  // "mutual (adj): lẫn nhau",
  // "arguably (adverb): được cho là",
  // "allot (v): phân bổ, dành",
  // "respective (adj): tương ứng",
  // "flourish (v): hưng thịnh",
  // "incentive (n): động cơ, khuyến khích",
  // "lotion (n): kem dưỡng da",
  // "rural (adj): nông thôn",
  // "excess (n): thừa, vượt quá",
  // "circulate (v): lan truyền, lưu hành",
  // "grant (v): cấp, trợ cấp",
  // "envision (v): hình dùng",
  // "gear (v): chuẩn bị, thiết bị(hộp số)",
  // "spooky (adj): ma quái",
  // "corn (n): bắp ngô",
  // "mansion (n): dinh thự",
  // "pavilion (n): gian hàng",
  // "concession (n): nhượng bộ, nhượng quyền",
  // "spice (n): gia vị",
  // "slope (n): con dốc, sườn núi(nghiêng, dốc)",
  // "discretion (n): tùy ý<br>+ discrete (adj): tùy ý.",
  // "tribe (n): bộ lạc",
  // "customs (n): hải quan<br>+ custom (n): phong tục.",
  // "cubicle (n): gian phòng(vị trí làm việc được ngăn cách, khi ngồi không thể nhìn bàn bên cạnh, nhưng đứng cao thì có thể)",
  // "federal (adj): liên bang<br>+ federation (n): liên đoàn.",
  // "procure (v): tìm, mua",
  // "accordance (n): phù hợp",
  // "affiliate (v,n): liên kết, chi nhánh",
  // "rinse (v): rửa",
  // "grasp (v): nắm(nắm lấy, nắm bắt)",
  // "swing (v): vung, sôi nổi(vung gậy)",
  // "club (n): gậy(golf club)",
  // "flagpole (n): cột cờ",
  // "pile (v): chất đống",
  // "donor (n): nhà tài trợ",
  // "shortage (n): thiếu hụt",
  // "resolution (n): giải quyết, độ phân giải",
  // "tile (n): ngói, đá lát",
  // "tub (n): bồn tắm",
  // "bend (v): uốn cong",
  // "share (n): thị phần",
  // "acquire (v): mua, có",
  // "strain (n): căng thẳng",
  // "wrist (n): cổ tay",
  // "posture (n): tư thế",
  // "flicker (v): nhấp nháy",
  // "fluorescent (n): huỳnh quoang",
  // "ergonomic (n): công thái học(các thiết kế để cải thiện sự tương tác của con người với các sản phẩm)",
  // "hindrance (n): cản trở(trở ngại)",
  // "bookkeeping (n): kế toán(công việc kế toán)",
  // "conservatory (n): nhạc viện, nhà kính",
  // "dimension (n): kích thước, chiều",
  // "fragrant (adj): thơm",
  // "scent (n): mùi thơm",
  // "intermittent (adj): gián đoạn",
  // "municipal (adj): thành phố, đô thị",
  // "assess (v): đánh giá<br>+ assessment (n): đánh giá.",
  // "subject (adverb): tùy thuộc vào",
  // "prune (v): cắt tỉa",
  // "contaminate (v): nhiểm bẩn",
  // "allocation (n): phân bổ",
  // "govern (v): điều chỉnh, chi phối",
  // "streamline (v): sắp xếp hợp lý",
  // "breed (v): lai giống, sinh sản",
  // "incubation (n): ấp trứng, ấp ủ",
  // "nursery (n): vườn ươm, nhà trẻ(nơi ươm, trồng nhiều loại cây con trên các giá thể khác nhau)",
  // "tailor (n): thợ may",
  // "exceptional (adj): đặc biệt",
  // "wool (n): len",
  // "insulate (v): cách nhiệt, cách ly(cách điện)",
  // "lustrous (adj): bóng bẩy",
  // "flex (v): uốn cong, linh hoạt",
  // "infant (n): trẻ sơ sinh",
  // "detergent (n): chất tẩy rửa",
  // "perspiration (n): đổ mồ hôi",
  // "possession (n): sở hữu, tài sản",
  // "part (v): chia rẽ",
  // "relate (v): kể lại, liên hệ",
  // "instalment (n): trả góp",
  // "upbringing (n): nuôi dạy, lớn lên",
  // "captivate (v): quyến rũ",
  // "patent (adj): bằng sáng chế",
  // "dispute (n): tranh chấp",
  // "occupancy (n): sử dụng<br> occupation (n): nghề nghiệp.",
  // "mortgage (n): thế chấp",
  // "intellectual (adj): trí tuệ",
  // "acknowledge (v): xác nhận(thừa nhận, công nhận, ghi nhận)",
  // "grade (n): cấp bậc, điểm(lớp-tầng, loại, lớp trong hệ thống giáo dục)",
  // "biography (n): tiểu sử<br>+ biographical (adj): tự truyện.",
  // "makeover (n): lột xác, trang điểm",
  // "ample (adj): phong phú",
  // "apprise (v): thông báo",
  // "surpass (v): vượt qua",
  // "attribute (v,n): cho rằng, thuộc tính",
  // "convey (v): chuyển tải",
  // "setting (n): khung cảnh",
  // "rug (n): tấm thảm",
  // "hassle (n): rắc rối",
  // "glitch (n): trục trặc",
  // "superior (n,adj): cấp trên, vượt trội hơn(người thuộc cấp trên)",
  // "ranch (n): trang trại",
  // "desperate (adj): tuyệt vọng",
  // "communal (adj): cộng đồng",
  // "erase (v): xóa",
  // "livestock (n): chăn nuôi",
  // "spouse (n): vợ/chồng",
  // "screening (n): sàng lọc",
  // "neutral (adj): trung tính, trung lập",
  // "shade (n): bóng, sắc thái",
  // "workmanship (n): tay nghề",
  // "sprinkler (n): hệ thống phun nước",
  // "tableware (n): bộ chén dĩa",
  // "tent (n): cái lều",
  // "ware (n): hàng hóa(đồ dùng)",
  // "outrageous (adj): thái quá, mãnh liệt",
  // "detect (v): phát hiện",
  // "vocational (adj): dạy nghề",
  // "discipline (n): kỷ luật, môn học_từ cổ",
  // "identical (adj): giống nhau",
  // "filtration (n): lọc(quá trình lọc chất lỏng hoặc khí)",
  // "pollen (n): phấn hoa",
  // "scatter (v): phân tán",
  // "purifier (n): máy lọc",
  // "stale (adj): bẩn, cũ(để lâu)",
  // "respite (n): thời gian nghỉ ngơi",
  // "spectrum (n): quang phổ",
  // "blind (n): rèm, tấm che",
  // "glare (v): chói, ánh sáng chói",
  // "dull (adj): buồn tẻ, đần độn",
  // "wander (v): đi lang thang",
  // "medieval (adj): trung cổ",
  // "avid (adj): đam mê, cuồng nhiệt",
  // "contentious (adj): gây tranh cãi",
  // "integrity (n): tính toàn vẹn, chính trực",
  // "revitalize (v): hồi sinh<br>+ revive (v): hồi sinh.",
  // "advocate (v,n): ủng hộ, người ủng hộ",
  // "decay (n): mục nát",
  // "namely (adverb): cụ thể là",
  // "confidential (adj): bí mật",
  // "shred (v,n): cắt nhỏ, miếng nhỏ<br>+ shredder (n): máy cắt nhỏ tài liệu.",
  // "household (n): hộ gia đình",
  // "premises (n): cơ sở",
  // "screenplay (n): kịch bản phim",
  // "figure (n): hình dáng(nhân vật, con số)",
  // "batch (n): đợt, mẻ",
  // "drum (v,n): đánh trống, thùng",
  // "moisture (n): độ ẩm",
  // "stew (n): món hầm(món hầm)",
  // "residue (n): phần còn lại",
  // "reclaim (v): khai hoang, đòi lại",
  // "fraction (n): phân số, phần nhỏ",
  // "cork (n): nút chai",
  // "brick (n): gạch",
  // "overlook (v): bỏ qua",
  // "carpentry (n): mộc, nghề mộc",
  // "intact (adj): nguyên vẹn",
  // "wealth (n,adj): của cải, nhiều",
  // "undertaking (n): thực hiện, công việc",
  // "aromatic (adj): thơm",
  // "savory (adj): mặn(thơm, rau húng)",
  // "indulge (v): tận hưởng",
  // "entice (v): lôi kéo, hấp dẫn",
  // "utilize (v): sử dụng",
  // "herbal (n): thảo mộc",
  // "infuse (v): truyền, pha<br>+ infusion (n): truyền, pha.",
  // "morale (n): tinh thần, nhuệ khí",
  // "cereal (n): ngũ cốc",
  // "pilot (adj,n): thí điểm, phi công",
  // "tenure (n): nhiệm kỳ",
  // "likewise (adverb): cũng là, tương tự như vậy",
  // "kettle (n): bình nước nóng(ấm đun nước)",
  // "grater (n): cái bào-phomai(pho-mai)",
  // "niece (n): cháu gái",
  // "vent (n,v): lỗ thông hơi, trút",
  // "fabricate (v): chế tạo, bịa đặt",
  // "corrosion (n): ăn mòn",
  // "dumpster (n): thùng đựng rác",
  // "__________________ETS_2022_TEST_4__________________",
  // "hygienist (n): nhân viên vệ sinh(nha khoa)",
  // "aerial (adj): trên không",
  // "ripe (adj): chín-ăn được",
  // "intermission (n): thời gian nghỉ",
  // "bustle (n): nhộn nhịp",
  // "yard (n): sân, xưởng<br>+ shipyard (n): xưởng đóng tàu.",
  // "etch (v): khắc",
  // "landmark (n): địa danh",
  // "naval (adj): hải quân",
  // "gradually (adverb): dần dần<br>+ gradual (adj): dần dần.",
  // "seamless (adj): liền mạch",
  // "land (v): đạt được, đưa(vùng đất)",
  // "cap (v,n): giới hạn(cái mũ)",
  // "charm (n,v): quyến rũ",
  // "atmosphere (n): khí quyển, không khí",
  // "profession (n): nghề(nghề nghiệp)",
  // "ceramic (adj): gốm",
  // "porcelain (n): đồ sứ",
  // "condense (v): cô đọng",
  // "precious (adj): quý giá",
  // "claw (n): móng vuốt",
  // "notwithstanding (preposition): mặc dù, bất chấp(= despite + N/Ving)",
  // "spot (v): phát hiện",
  // "seasoning (n): gia vị",
  // "compel (v): bắt buộc<br+ compelling (adj): thuyết phục>",
  // "regard (v): coi",
  // "fare (n): món ăn",
  // "buster (n): bom phá<br>+ blockbuster (n): bom tấn.",
  // "disposable (n): dùng một lần<br>+ disposal (adj): xử lý.",
  // "screw (v,n): gắn, con vít",
  // "__________________ETS_2022_TEST_5__________________",
  // "fierce (adj): khốc liệt",
  // "favourable (adj): thuận lợi",
  // "reinstate (v): phục hồi",
  // "redeem (v): chuộc lại, đổi lại",
  // "accelerate (v): tăng tốc, đẩy nhanh",
  // "trunk (n): thân, cốp xe(vòi)",
  "seed (n): hạt giống",
  "fertilizer (n): phân bón, thụ tinh",
  "edible (adj): có thể ăn được",
  "stapler (n): cái dập ghim",
  "discourage (v,adj): ngăn cản, nản lòng(không khuyến khích)",
  "__________________ETS_2022_TEST_6__________________",
  "auditor (n): kiểm toán viên",
  "relish (v): thích thú",
  "lid (n): nắp",
  "bluntly (adverb): thẳng thừng",
  "cape (n): áo choàng",
  "flair (n): nét tinh tế",
  "ambience (n): môi trường, không khí(bầu không khí)",
  "swivel (n): xoay",
  "braai (n): nướng",
  "__________________ETS_2022_TEST_7__________________",
  "apprentice (n): người học việc",
  "immigrate (v): nhập cư",
  "assume (v): cho rằng, đảm nhận",
  "trench (n): mương, rãnh",
  "irrigation (n): tưới tiêu",
  "clinical (adj): lâm sàn<br>+ clinic (n): phòng khám.",
  "oral (adj): bằng miệng",
  "preliminary (adj): sợ bộ",
  "blouse (n): áo cánh",
  "clause (n): điều khoản",
  "foyer (n): tiền sảnh",
  "peel (n): bong tróc",
  "oat (n): yến mạch",
  "intake (n): đầu vào",
  "fuse (n,v): cầu chì, kết hợp",
  "__________________ETS_2022_RC_TEST_8__________________",
  "spectacular (adj): đẹp mắt, ngoạn mục(hùng vĩ)",
  "necessitate (v): đòi hỏi",
  "culvert (n): cống nước",
  "contingent (n,adj): đội ngũ, ngẫu nhiên(phụ thuộc)",
  "continental (adj): lục địa",
  "sparkle (v): lấp lánh",
  "pantry (n): nhà bếp",
  "bush (n): bụi rậm",
  "debris (n): mảnh vỡ, đống đổ nát",
  "excessive (adj): quá, quá mức",
  "__________________TOEIC_LC_PART3_E5__________________",
  "swamp (n,v): đầm lầy, tràn ngập",
  "irritate (v): chọc tức, khó chịu",
  "triathlon (n): ba môn phối hợp",
  "__________________TOEIC_LC_PART4_E3__________________",
  "strip (v,n): loại bỏ, dải",
  "pellet (n): viên, hạt",
  "foam (n): bọt, xốp(xốp-->chất liệu cao su nhẹ mềm, có nhiều lỗ nhỏ, được dùng làm ghế, nệm)",
  "capsule (n): viên thuốc",
  "well (n): giếng",
  "footage (n): cảnh quay",
  "__________________ETS_2022_RC_TEST_10__________________",
  "scarf (n): khăn quàng cổ",
  "stagnate (v): đình trệ",
  "civic (n): công dân, dân tộc",
  "economize (v): tiết kiệm",
  "inhibit (v): cản trở",
  "harsh (adj): khắc nghiệt",
  "fauna (n): hệ động vật",
  "flora (n): hệ thực vật",
  "excursion (n): đi chơi, du ngoạn",
  "cliff (n): vách đá",
  "__________________HACKER_3_RC_TEST_1__________________",
  "replenish (v): làm đầy, bổ sung",
  "precipitation (n): lượng mưa, kết tủa",
  "__________________TOEIC_LC_PART3_E6__________________",
  "fragile (adj): dễ vỡ",
  "compromise (n): thỏa hiệp",
  "mat (n): chiếu",
  "drill (n): diễn tập, bài tập(khoan)",
  "rod (n): thanh, cần câu",
  "scissor (n): cái kéo",
  "optician (n): bác sĩ đo mắt",
  "caliber (n): tầm cỡ",
  "rigorous (adj): nghiêm ngặt, nghiêm khắc",
  "thermal (adj): nhiệt",
  "flock (v): đổ xô, bầy đàn",
  "__________________HACKER_2_TEST_1_RC__________________",
  "commend (v): khen ngợi",
  "__________________HACKER_2_TEST_5_RC__________________",
  "favorably (adverb): thiện cảm, ưu ái(thuận lợi)",
  "reluctant (v): lưỡng lự",
  "__________________HACKER_2_TEST_2_LC__________________",
  "utensil (n): đồ dùng, dụng cụ",
  "expenditure (n): chi tiêu",
  "__________________HACKER_2_TEST_6_RC__________________",
  "postage (n): bưu phí",
  "crumble (v): đổ nát(pha vỡ, sụp đổ, vỡ vụn)",
  "bypass (v): đi vòng, bỏ qua",
  "maritime (adj): hàng hải",
  "shed (v): bỏ(loại bỏ, trút bỏ)",
  "sink (v): bồn rửa, chìm",
  "rectify (v): khắc phục",
  "perception (n): nhận thức",
  "stable (adj): vững chắc, ổn định",
  "cite (v): trích dẫn",
  "provided (conjunctions): miễn là",
  "reign (v,n): trị vì, triều đại(thống trị)",
  "__________________HACKER_2_TEST_3_LC__________________",
  "suite (n): dãy phòng, bộ",
  "emit (v): phát ra, thải ra",
  "stripe (v): sọc",
  "collision (n): va chạm",
  "litter (n): rác",
  "precaution (n): phòng ngừa",
  "extraordinary (adj): đặc biệt, bất thường",
  "fusion (n): dung hợp, kết hợp(tổng hợp)",
  "adolescent (n): tuổi vị thành niên",
  "textile (n): vải dệt",
  "dye (v,n): nhuộm, thuốc nhuộm",
  "sentimental (adj): tình cảm, đa cảm",
  "foreword (n): lời nói đầu",
  "preface (n): lời nói đầu",
  "literature (n): văn học",
  "to (preposition): ở, liên quan đến",
  "dwindle (n): cạn kiệt",
  "volcano (n): núi lửa",
  "sanctuary (n): khu bảo tồn, nơi tôn nghiêm, thánh địa",
  "orangutan (n): đười ươi",
  "snorkel (n): ống thở<br> snorkeling (n): một môn thể thao giải trí bơi với một ống thở để ngắm nhìn đáy biển.",
  "metropolis (n): đô thị",
  "summit (n): đỉnh",
  "cease (v): ngừng",
  "conventional (adj): thông thường",
  "wheat (n): lúa mỳ",
  "substantial (adj): đáng kể",
  "rubber (n): cao su",
  "tale (n): câu chuyện(được tạo ra bằng trí tưởng tượng, đặc biệt là câu chuyện đầy hành động và phiêu lưu)",
  "intrigue (v): hấp dẫn ,mưu đồ(để làm cho ai đó rất quan tâm và muốn biết thêm về điều gì đó)",
  "condenser (n): tụ điện",
  "revision (v): xem lại",
  "mild (adj): nhẹ",
  "brew (v): pha, ủ(pha trà, ủ bia)",
  "silhouette (n): bóng, bóng rọi",
  "fuss (n): ồn ào",
  "clog (v): tắc nghẽn",
  "barrier (n): rào chắn ngang",
  "shatter (v): đập vỡ",
  "optical (adj): quang học",
  "enterprise (n): doanh nghiệp, xí nghiệp<br>+ enterprising (adj): dám nghĩ dám làm.",
  "diminish (v): giảm bớt",
  "exquisite (adj): tinh tế",
  "delicacy (n): món ngon",
  "mill (n): nhà máy, cối xoay gió",
  "ordinary (adj): bình thường",
  "culminate (v): đỉnh điểm",
  "burst (v): nổ",
  "stringent (adj): nghiêm ngặt",
  "exhaust (n): khí thải",
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
  "proportion (n): tỉ lệ",
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
  "curtain (n): màn cửa",
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
  "syllabus (n): giáo trình",
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
  "foster (v): nuôi dưỡng",
  "dispose (v): vứt bỏ",
  "carriage (n): xe ngựa",
  "merriment (n): sự vui vẻ",
  "brewery (n): nhà máy bia",
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
  "recur (v): tái diễn<br>+ recuring (n): định kỳ.",
  "odor (adj): mùi",
  "upholster (v): bọc(bọc ghế, bằng vật liệu mềm, đệm, vải hoặc da)",
  "infringe (v): vi phạm",
  "endorse (v): chứng thực",
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
];

export { json as namE };
// export { ANSWER_KEY as namE };
// export { need_to_read as namE };

//Create vocabulary convention
//nếu 1 từ, đặt bình thường
//nếu 2 từ, thêm dấu chấm cuối câu(nếu có dấu đóng ngoặc, cũng thêm dấu chấm sau nó)

//note ngữ pháp
//1.be more ... ? 100% '...' = tính từ
