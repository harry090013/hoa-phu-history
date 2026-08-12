# HÒA PHÚ – MẠCH NGUỒN TRUYỀN THỐNG

## Bộ hồ sơ khởi tạo cho Antigravity

Dự án xây dựng một **website tĩnh, mobile-first**, được truy cập chủ yếu thông qua **mã QR** đặt tại trại/điểm giới thiệu của địa phương. Website dùng để giới thiệu lịch sử, văn hóa, con người, sinh kế và định hướng phát triển của **thôn Hòa Phú, xã Xuân Phú, thành phố Đà Nẵng** sau khi Hòa Mỹ và Phú Lộc được sắp xếp thành thôn mới Hòa Phú.

Nguồn nội dung chuẩn của dự án là file Word trong thư mục `source-documents/`.

---

## 1. Mục tiêu sản phẩm

Website cần giúp người dân và khách tham quan:

- Quét QR và hiểu ngay đây là trang giới thiệu thôn Hòa Phú.
- Nắm được câu chuyện **Hòa Mỹ + Phú Lộc → Hòa Phú**.
- Tìm hiểu lịch sử, truyền thống cách mạng, đạo lý tri ân và tinh thần cộng đồng.
- Khám phá không gian sinh kế đặc trưng: **Ruộng – Vườn – Rừng – Nghề**.
- Xem các con số, hình ảnh và câu chuyện nổi bật một cách dễ đọc trên điện thoại.
- Có thể đi nhanh tới phần mình quan tâm mà không phải đọc một tài liệu dài 32 trang theo thứ tự hành chính.

### Thông điệp trung tâm

> **HÒA PHÚ – HỘI TỤ TRUYỀN THỐNG, CHUNG SỨC TƯƠNG LAI**

### Trục kể chuyện

> **Hòa Mỹ + Phú Lộc → Hòa Phú → Gìn giữ ký ức → Gắn kết hiện tại → Kiến tạo tương lai**

---

## 2. Đối tượng sử dụng

Ưu tiên theo thứ tự:

1. Người dân địa phương, bao gồm người lớn tuổi.
2. Thanh thiếu niên, đoàn viên và học sinh.
3. Khách tham quan, người quét QR tại trại hoặc sự kiện cộng đồng.
4. Người muốn tìm hiểu về quê hương Hòa Phú từ điện thoại.

Vì vậy giao diện phải:

- Mobile-first.
- Chữ đủ lớn, tương phản cao.
- Nút bấm lớn, dễ chạm.
- Không phụ thuộc hover.
- Không dùng splash screen chặn nội dung.
- Không autoplay âm thanh/video.
- Hạn chế animation nặng.
- Hỗ trợ `prefers-reduced-motion`.

---

## 3. Kiến trúc kỹ thuật đã chốt

### Loại website

**Static website thuần HTML + CSS + JavaScript.**

Không sử dụng framework nếu không có lý do thật sự cần thiết. Mục tiêu là tải nhanh, dễ duy trì, ít phụ thuộc và phù hợp với thiết bị phổ thông.

### Bắt buộc

- Không có admin.
- Không có CMS.
- Không có database.
- Không có Supabase/Firebase.
- Không authentication/login.
- Không API route.
- Không Server Actions.
- Không lưu dữ liệu người dùng.
- Không phụ thuộc backend.
- Nội dung được sửa trực tiếp trong source code, commit lên GitHub và deploy lại.

### Hosting

- Source code: **GitHub**.
- Public website: **Vercel**.
- Thư mục public/deploy: **`site/`**.
- Khi tạo project trên Vercel, đặt **Root Directory = `site`**.
- Không deploy các thư mục tài liệu nguồn, prompt hoặc file nội bộ nằm ngoài `site/`.

Điểm này rất quan trọng: file Word nguồn và tài liệu Antigravity **không được public cùng website**.

---

## 4. Cấu trúc thư mục của bộ dự án

```text
hoa-phu-antigravity-static-site-kit/
├── README.md
├── 01_WEBSITE_PHASES.md
├── 02_CONTENT_MAP_AND_IA.md
├── ANTIGRAVITY_MASTER_PROMPT.md
├── PROJECT_MEMORY.md
├── KNOWN_GAPS_AND_APPROVALS.md
│
├── source-documents/
│   ├── Hồ sơ giới thiệu thôn Hòa Phú.docx
│   ├── SOURCE_README.md
│   ├── source-document-sha256.txt
│   └── extracted-media/
│       └── ... ảnh được trích từ file Word để tham chiếu ...
│
├── design-reference/
│   ├── mockup-mobile-color.png
│   ├── wireframe-mobile-grayscale.png
│   └── DESIGN_REFERENCE_README.md
│
└── site/                       ← CHỈ THƯ MỤC NÀY ĐƯỢC PUBLIC LÊN VERCEL
    ├── index.html              ← Antigravity tạo ở Phase 1–2
    ├── 404.html                ← tạo ở phase hoàn thiện
    ├── robots.txt              ← tạo ở phase SEO
    ├── sitemap.xml             ← tạo ở phase SEO
    └── assets/
        ├── css/
        │   └── main.css
        ├── js/
        │   └── main.js
        ├── images/
        └── icons/
```

---

## 5. Cấu trúc nội dung cuối cùng của website

Website ưu tiên mô hình **single-page storytelling**. Thanh điều hướng có thể nhảy tới từng section bằng anchor.

Thứ tự đề xuất:

1. **Hero – Chào mừng đến Hòa Phú**
2. **Hòa Mỹ + Phú Lộc → Hòa Phú**
3. **Hòa Phú trong những con số**
4. **Dòng chảy lịch sử**
5. **Ký ức & truyền thống – Tri ân**
6. **Đất và người Hòa Phú**
7. **Ruộng – Vườn – Rừng – Nghề**
8. **Mô hình kinh tế & nghề mây tre đan**
9. **Sức dân là nền tảng – Đường rộng từ lòng dân**
10. **Văn hóa – Nghĩa tình – Đoàn kết**
11. **4 trụ cột Hòa Phú**
12. **Hòa Phú hôm nay & tương lai**
13. **Thư viện ảnh**
14. **Nguồn tư liệu / ghi chú lịch sử**
15. **Thông tin liên hệ** – chỉ khi có dữ liệu được xác nhận để public
16. **Footer kết**

Không cần hiển thị 24 chương của file Word như một báo cáo. Nội dung phải được **phân tầng và cô đọng**, trong khi vẫn giữ đúng ý nghĩa của tài liệu nguồn.

---

## 6. Định hướng giao diện

Phong cách:

> **Heritage × Countryside × Modern**

Gợi ý palette:

- Deep Green: `#164A36`
- Leaf Green: `#2E6B4B`
- Warm Ivory: `#F7F3E8`
- Muted Gold: `#B68B3C`
- Ink: `#1F2A24`
- Soft Border: `#DED6C8`

Nguyên tắc:

- Ưu tiên ảnh thật của địa phương.
- Không biến giao diện thành cổng thông tin hành chính.
- Không sử dụng phong cách startup/cyber/3D nặng.
- Có thể dùng motif mây tre đan ở mức tinh tế.
- Tập trung trải nghiệm đọc và cảm xúc cộng đồng.

Mockup và wireframe tham khảo nằm trong `design-reference/`.

---

## 7. Quy tắc dữ liệu và lịch sử

Nguồn sự thật ưu tiên:

1. `source-documents/Hồ sơ giới thiệu thôn Hòa Phú.docx`
2. Các tài liệu hướng dẫn trong repo này.
3. Mockup/wireframe chỉ là **tham khảo bố cục**, không phải nguồn dữ liệu.

### Tuyệt đối không tự bịa

- Tên người.
- Chức vụ.
- Số điện thoại.
- Email.
- Mốc lịch sử.
- Danh sách liệt sĩ/Mẹ Việt Nam Anh hùng.
- Số liệu diện tích/hộ dân/hạ tầng.
- Địa danh.

Nếu tài liệu nguồn chưa đủ thông tin, hiển thị trung tính hoặc bỏ mục đó cho tới khi được xác nhận.

### Lưu ý đặc biệt

Tài liệu nguồn đã chủ động ghi rõ **Dốc Tầng không thuộc thành tố lịch sử/địa danh Hòa Phú**. Không được đưa Dốc Tầng vào nội dung Hòa Phú.

Danh sách cụ thể về liệt sĩ, Mẹ Việt Nam Anh hùng, thương binh và gia đình có công của riêng Hòa Mỹ/Phú Lộc hiện chưa được hồ sơ xác nhận đầy đủ. Không tự suy diễn danh sách.

---

## 8. Cảnh báo về mockup AI

Mockup trong `design-reference/` được tạo để thể hiện **bố cục và hướng thiết kế**.

Một số chi tiết hình ảnh hoặc thông tin nhỏ trong mockup có thể là dữ liệu minh họa do AI tạo ra, đặc biệt:

- logo;
- số điện thoại;
- email;
- icon/cổng làng;
- hình minh họa phong cảnh.

**Không được lấy các chi tiết này làm dữ liệu thật.**

Antigravity phải dùng tài liệu Word làm nguồn nội dung, không sao chép dữ liệu chưa xác nhận từ hình mockup.

---

## 9. Cách bắt đầu với Antigravity

1. Mở toàn bộ thư mục dự án trong Antigravity.
2. Yêu cầu Antigravity đọc theo thứ tự:
   - `README.md`
   - `02_CONTENT_MAP_AND_IA.md`
   - `01_WEBSITE_PHASES.md`
   - `KNOWN_GAPS_AND_APPROVALS.md`
   - `source-documents/SOURCE_README.md`
   - `ANTIGRAVITY_MASTER_PROMPT.md`
3. Sau đó dùng nguyên nội dung trong `ANTIGRAVITY_MASTER_PROMPT.md` làm prompt khởi động.
4. Antigravity code **chỉ trong `site/`**, ngoại trừ việc cập nhật `PROJECT_MEMORY.md`.
5. Sau mỗi phase, Antigravity phải cập nhật `PROJECT_MEMORY.md` trước khi sang phase tiếp theo.

---

## 10. Định nghĩa “hoàn thành”

Website được coi là hoàn thành khi:

- Quét QR mở nhanh trên điện thoại.
- Giao diện đúng tinh thần mockup nhưng không sao chép dữ liệu giả trong mockup.
- Toàn bộ nội dung có thể truy nguồn về tài liệu chuẩn.
- Không có backend/admin/database.
- Không có lỗi console nghiêm trọng.
- Không có horizontal overflow ở 320px.
- Hoạt động tốt ở 360px, 390px, 430px và desktop.
- Có điều hướng bàn phím và focus state.
- Hình ảnh có `alt` phù hợp.
- Tôn trọng reduced motion.
- Có metadata SEO cơ bản, Open Graph, `robots.txt`, `sitemap.xml`.
- Các asset nặng được tối ưu.
- Deploy thành công trên Vercel từ thư mục `site/`.

