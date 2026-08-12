# KẾ HOẠCH CODE THEO PHASE – WEBSITE THÔN HÒA PHÚ

> Nguyên tắc: làm từng phase, kiểm tra, ghi nhớ trạng thái rồi mới đi tiếp. Không code một lượt toàn bộ dự án rồi mới kiểm tra.

---

# PHASE 0 — ĐỌC, KIỂM KÊ VÀ KHÓA PHẠM VI

## Mục tiêu

Antigravity hiểu đúng dự án trước khi viết code.

## Việc phải làm

1. Đọc `README.md`.
2. Đọc `02_CONTENT_MAP_AND_IA.md`.
3. Đọc file Word chuẩn trong `source-documents/`.
4. Xem hai ảnh trong `design-reference/`.
5. Đọc `KNOWN_GAPS_AND_APPROVALS.md`.
6. Lập checklist những dữ liệu có nguồn và những dữ liệu chưa được xác nhận.
7. Không viết nội dung mới dựa trên trí nhớ hoặc internet nếu người dùng chưa yêu cầu nghiên cứu ngoài.

## Deliverable

Cập nhật `PROJECT_MEMORY.md` với:

- mục tiêu dự án;
- source of truth;
- cấu trúc section;
- giới hạn kỹ thuật;
- dữ liệu còn thiếu;
- các quyết định thiết kế quan trọng.

## Done khi

Antigravity có thể mô tả dự án trong 10–15 dòng mà không mâu thuẫn với tài liệu nguồn.

---

# PHASE 1 — STATIC FOUNDATION

## Mục tiêu

Tạo bộ khung website tĩnh trong `site/`.

## Cấu trúc tối thiểu

```text
site/
├── index.html
└── assets/
    ├── css/main.css
    ├── js/main.js
    ├── images/
    └── icons/
```

## Việc phải làm

- Semantic HTML5.
- `lang="vi"`.
- Meta viewport.
- CSS variables cho design tokens.
- Reset/basic typography.
- Container responsive.
- Header.
- Bottom navigation mobile hoặc sticky quick-nav hợp lý.
- Desktop navigation tối giản.
- Base card/button styles.
- Base focus states.
- Skip link `Bỏ qua tới nội dung chính`.

## Chưa làm ở phase này

- Không nhập toàn bộ nội dung lịch sử.
- Không làm gallery đầy đủ.
- Không làm animation phức tạp.

## Done khi

- Trang mở không lỗi.
- 320px không overflow ngang.
- Header/nav hoạt động.
- CSS không phụ thuộc framework.

---

# PHASE 2 — HERO + CÂU CHUYỆN SÁP NHẬP + THÔNG TIN NHANH

## Section A — Hero

Nội dung chính:

- `THÔN HÒA PHÚ`
- `Xã Xuân Phú – Thành phố Đà Nẵng`
- `Mạch nguồn truyền thống`
- `Hội tụ truyền thống, chung sức tương lai`
- CTA: `Bắt đầu tham quan`

Hero không được là splash screen bắt buộc. Người dùng có thể cuộn xuống ngay.

## Section B — Hòa Mỹ + Phú Lộc → Hòa Phú

Trọng tâm thị giác:

```text
HÒA MỸ + PHÚ LỘC
        ↓
     HÒA PHÚ
    29.06.2026
```

Dùng chuyển động nhẹ nếu cần; hỗ trợ reduced motion.

## Section C — Thông tin nhanh

Card dữ liệu:

- 10,4 km²
- 807 hộ gia đình
- 02 nhà văn hóa
- 02 sân vận động lớn
- ĐH01QS · ĐH14
- Ruộng · Vườn · Rừng · Nghề

## Done khi

Người mới quét QR có thể hiểu trong 15–30 giây:

- đây là website nào;
- Hòa Phú hình thành từ đâu;
- quy mô cơ bản của thôn.

---

# PHASE 3 — DÒNG CHẢY LỊCH SỬ + TRUYỀN THỐNG & TRI ÂN

## Section A — Dòng chảy lịch sử

Timeline dọc mobile:

1. Hòa Mỹ
2. Phú Lộc
3. 29.06.2026 – thành lập Hòa Phú
4. Hòa Phú hôm nay

Không biến timeline thành danh sách mốc tự suy đoán. Chỉ dùng dữ liệu có trong tài liệu nguồn.

## Section B — Truyền thống cách mạng

Nội dung dựa trên phần IV của hồ sơ:

- các thế hệ cống hiến;
- liệt sĩ và những người đã nằm lại;
- Mẹ Việt Nam Anh hùng;
- đạo lý Uống nước nhớ nguồn.

## Yêu cầu nhạy cảm về lịch sử

- Không tự bổ sung tên người khi chưa có nguồn xác nhận.
- Không gán liệt sĩ hoặc Mẹ VNAH cụ thể cho Hòa Mỹ/Phú Lộc nếu hồ sơ không xác nhận.
- Nếu dùng ví dụ Lê Quang Vinh, phải bám đúng cách diễn đạt của hồ sơ.
- Không đưa Dốc Tầng vào Hòa Phú.

## Done khi

- Timeline dễ đọc trên điện thoại.
- Phần tri ân trang trọng, không gây cảm giác quảng cáo/giải trí.
- Nội dung không vượt khỏi bằng chứng trong hồ sơ.

---

# PHASE 4 — ĐẤT, NGƯỜI, SINH KẾ VÀ BẢN SẮC

## Section A — Đất và người

Tóm tắt những nhóm người tạo nên Hòa Phú:

- nông dân;
- lao động sản xuất/kinh doanh;
- phụ nữ làm mây tre đan;
- người trẻ với mô hình chăn nuôi;
- cựu chiến binh/gia đình chính sách;
- cán bộ, đoàn viên, hội viên và cộng đồng.

Thông điệp:

> Việc chung của thôn – mỗi người góp một phần.

## Section B — Ruộng · Vườn · Rừng · Nghề

Tạo 4 card lớn:

- RUỘNG
- VƯỜN
- RỪNG
- NGHỀ

Đây là một trong các điểm nhận diện chính của website.

## Section C — Mô hình kinh tế

Dựa trên hồ sơ:

- vườn cau – ổi – nuôi cá;
- nuôi ếch;
- nuôi dúi;
- mây tre đan.

Không biến thành quảng cáo bán hàng nếu chưa có dữ liệu/đề bài tương ứng.

## Section D — Nghề mây tre đan

Nên làm feature story nổi bật với thông điệp:

> Nghề thủ công – sinh kế – bản sắc của Hòa Mỹ trong lòng Hòa Phú.

Có thể dùng texture/motif đan lát nhẹ trong UI.

## Done khi

Người xem cảm nhận được Hòa Phú có bản sắc riêng chứ không phải template website địa phương chung chung.

---

# PHASE 5 — HẠ TẦNG + SỨC DÂN + CỘNG ĐỒNG

## Section A — Sức dân là nền tảng

Tiêu đề gợi ý:

> Đường rộng từ lòng dân

Các số liệu nổi bật từ hồ sơ:

- gần 5.000 m² đất người dân Hòa Mỹ tự nguyện hiến để mở rộng ĐH14;
- hơn 1.000 m tường rào được tháo dỡ;
- tuyến Phú Lộc khoảng 700 m mở rộng từ 3 m lên 6 m;
- gần 300 m² là diện tích một hộ Phú Lộc tự nguyện hiến cho mở đường.

Không gom các số liệu thành một sự kiện duy nhất nếu nguồn đang nói về các địa điểm/sự kiện khác nhau.

## Section B — Hạ tầng

- ĐH01QS
- ĐH14
- đường bê tông nông thôn
- thủy lợi Phú Ninh
- 02 nhà văn hóa
- 02 sân vận động lớn

## Section C — Văn hóa – nghĩa tình – đoàn kết

Tóm tắt:

- tình làng nghĩa xóm;
- tương trợ;
- chăm lo gia đình chính sách;
- đền ơn đáp nghĩa;
- sinh hoạt văn hóa;
- thể thao/văn nghệ;
- giáo dục thế hệ trẻ.

## Done khi

Số liệu được đặt đúng bối cảnh, không chỉ dùng như infographic trang trí.

---

# PHASE 6 — 4 TRỤ CỘT + TƯƠNG LAI + GALLERY + NGUỒN

## Section A — 4 trụ cột

1. TRUYỀN THỐNG
2. CỘNG ĐỒNG
3. SINH KẾ
4. TƯƠNG LAI

## Section B — Tầm nhìn

Bám phần XVIII của hồ sơ:

- giàu truyền thống;
- giàu nghĩa tình;
- giàu sinh kế;
- giàu bản sắc;
- văn minh;
- hiện đại.

## Section C — Thư viện ảnh

- Grid ảnh nhẹ, responsive.
- Không cần lightbox phức tạp nếu không cần.
- Lazy-load ảnh dưới fold.
- Mỗi ảnh có alt/caption phù hợp.

## Section D — Nguồn tư liệu

Tạo accordion/details hoặc danh sách nguồn gọn.

- Không để URL dài phá layout.
- Các nguồn trong hồ sơ được giữ để người muốn kiểm chứng có thể truy cập.
- Có phần ghi chú về giới hạn dữ liệu lịch sử.

## Section E — Liên hệ

Chỉ triển khai nếu có thông tin đã được người dùng xác nhận public.

Không tự lấy phone/email trong mockup AI.

## Done khi

Website kể được một hành trình hoàn chỉnh từ quá khứ tới tương lai.

---

# PHASE 7 — ACCESSIBILITY + PERFORMANCE + SEO

## Accessibility

- Body text mobile tối thiểu khoảng 16–18px tùy font.
- Tap target khoảng 44px trở lên.
- Contrast đủ tốt.
- Focus visible rõ.
- Keyboard navigation.
- Semantic heading hierarchy.
- Không dùng màu là dấu hiệu duy nhất.
- `alt` cho ảnh có ý nghĩa.
- Ảnh trang trí dùng `alt=""`.
- `prefers-reduced-motion`.

## Performance

- Nén ảnh.
- Dùng WebP/AVIF khi hợp lý nhưng giữ fallback nếu cần.
- `loading="lazy"` cho ảnh dưới fold.
- Không tải thư viện JS lớn chỉ để tạo animation đơn giản.
- Không dùng video nền mặc định.
- Tránh CLS.

## SEO

Tạo:

- `<title>`.
- meta description.
- canonical placeholder/config rõ ràng.
- Open Graph.
- favicon khi có asset chính thức.
- `robots.txt`.
- `sitemap.xml`.
- JSON-LD chỉ khi dữ liệu đủ chính xác; không tự bịa địa chỉ/tổ chức.

## Done khi

Website hoạt động tốt trên mobile mạng chậm và không phụ thuộc JS cho nội dung cốt lõi.

---

# PHASE 8 — QA + VERCEL DEPLOY

## QA viewport

Kiểm tra tối thiểu:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px+

## QA nội dung

- So lại các con số với file Word.
- Không có Dốc Tầng.
- Không có số điện thoại/email chưa xác nhận.
- Không có text AI placeholder.
- Không có Lorem Ipsum.
- Không có dữ liệu bịa.

## Vercel

Repository có toàn bộ project, nhưng Vercel phải dùng:

```text
Root Directory: site
```

Website là static nên không cần database/env secret.

Nếu sau này có domain riêng, cập nhật canonical, sitemap và Open Graph URL rồi redeploy.

## Báo cáo cuối phase

Antigravity ghi vào `PROJECT_MEMORY.md`:

- URL preview/deploy;
- commit/hash nếu có;
- những việc đã hoàn thành;
- known issues;
- dữ liệu cần người dùng bổ sung.

