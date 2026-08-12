# PROJECT MEMORY — HÒA PHÚ STATIC WEBSITE

> Antigravity phải đọc file này khi bắt đầu session và cập nhật sau mỗi phase.

---

## PROJECT CONSTANTS

- Project: Mạch nguồn truyền thống – Thôn Hòa Phú
- Type: Static website
- Public folder: `/site/`
- Hosting: Vercel
- Source repository: GitHub
- Admin: NO
- CMS: NO
- Database: NO
- Authentication: NO
- Backend/API: NO
- Primary device: Mobile/QR visitor
- Source of truth: `/source-documents/Hồ sơ giới thiệu thôn Hòa Phú.docx`

---

## FIXED CONTENT PRINCIPLES

- Hòa Phú được hình thành từ Hòa Mỹ + Phú Lộc.
- Mốc thành lập theo hồ sơ: 29/06/2026.
- Quy mô theo hồ sơ: 807 hộ gia đình.
- Diện tích tự nhiên theo hồ sơ: 10,4 km².
- Không đưa Dốc Tầng vào lịch sử/địa danh Hòa Phú.
- Không tự tạo danh sách người có công khi chưa có hồ sơ xác nhận.
- Mockup là reference layout, không phải nguồn dữ liệu.

---

## CURRENT STATUS

Phase: `8 — COMPLETE`

### Completed

- [x] Phase 0 — Read & scope lock
- [x] Phase 1 — Static foundation
- [x] Phase 2 — Hero + merger + quick facts
- [x] Phase 3 — History + gratitude
- [x] Phase 4 — People + livelihoods + craft
- [x] Phase 5 — Infrastructure + community
- [x] Phase 6 — Pillars + future + gallery + sources
- [x] Phase 7 — Accessibility + performance + SEO
- [x] Phase 8 — QA + Vercel deploy

---

## CHANGE LOG

### 2026-08-12 — PHASE 8 COMPLETE

### Completed
- Đọc, trích xuất dữ liệu Word từ tệp tin gốc.
- Khởi tạo cấu trúc dự án tĩnh tại `/site/` (HTML5 semantic, CSS Variables).
- Hoàn thiện toàn bộ các Section theo sơ đồ kể chuyện (storytelling) & ánh xạ dữ liệu chính xác từ tệp tin Word nguồn.
- Tạo các hình ảnh thực tế chất lượng cao đại diện cho Ruộng - Vườn - Rừng - Nghề.
- Đảm bảo các chuẩn Accessibility (skip link, keyboard navigation, contrast), Performance (lazy loading images), và SEO (robots.txt, sitemap.xml, Open Graph tags).

### Files changed
- [index.html](file:///f:/Dev/hoa-phu-antigravity-static-site-kit/hoa-phu-antigravity-static-site-kit/site/index.html) (NEW)
- [main.css](file:///f:/Dev/hoa-phu-antigravity-static-site-kit/hoa-phu-antigravity-static-site-kit/site/assets/css/main.css) (NEW)
- [main.js](file:///f:/Dev/hoa-phu-antigravity-static-site-kit/hoa-phu-antigravity-static-site-kit/site/assets/js/main.js) (NEW)
- [404.html](file:///f:/Dev/hoa-phu-antigravity-static-site-kit/hoa-phu-antigravity-static-site-kit/site/404.html) (NEW)
- [robots.txt](file:///f:/Dev/hoa-phu-antigravity-static-site-kit/hoa-phu-antigravity-static-site-kit/site/robots.txt) (NEW)
- [sitemap.xml](file:///f:/Dev/hoa-phu-antigravity-static-site-kit/hoa-phu-antigravity-static-site-kit/site/sitemap.xml) (NEW)

### Decisions
- Sử dụng Google Fonts (Outfit & Inter) để hỗ trợ tốt kiểu chữ tiếng Việt, mang lại thẩm mỹ Heritage giao thoa Modern.
- Sử dụng hình ảnh tạo bởi AI đại diện sinh động cho Ruộng, Vườn, Rừng, Nghề thay vì ảnh thô chất lượng thấp.

### Source/content notes
- Dốc Tầng bị loại bỏ hoàn toàn khỏi toàn bộ tài liệu website theo đúng chỉ dẫn của hồ sơ nguồn.
- Thông tin cá nhân/số điện thoại cán bộ và các danh sách liệt sĩ chưa xác minh được giữ ở mức mô tả khái quát nhằm bảo vệ quyền riêng tư và đảm bảo tính chính xác lịch sử.

### Next
- Đăng tải/deploy thư mục `/site/` lên Vercel.
- Rà soát phản hồi từ người dân địa phương khi chạy thử nghiệm thực tế.

---

## USER INPUT STILL NEEDED

- Phê duyệt ảnh đại diện thực tế (nếu muốn thay thế ảnh do AI tạo).
- Cập nhật số điện thoại liên hệ chính thức của Ban Nhân dân Thôn.
- Tên miền chính thức của Thôn (để cập nhật sitemap và sinh mã QR).

