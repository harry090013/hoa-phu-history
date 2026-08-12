# KNOWN GAPS & APPROVALS

Danh sách này ngăn coding agent vô tình biến dữ liệu minh họa thành dữ liệu thật.

---

## 1. Logo chính thức

Hồ sơ Word có hình nhận diện/logo trong một số trang, nhưng bộ kit không mặc định coi hình AI trong mockup là logo chính thức.

### Quy tắc

- Nếu có thể trích đúng logo gốc từ hồ sơ/asset được người dùng xác nhận, dùng asset đó.
- Nếu chưa chắc, dùng wordmark `THÔN HÒA PHÚ`.
- Không nhờ AI tự vẽ một “logo gần giống” rồi dùng như logo chính thức.

Status: `NEEDS CONFIRMATION`

---

## 2. Thông tin liên hệ

Mockup màu có số điện thoại/email minh họa. Đây **không phải dữ liệu nguồn đã xác nhận**.

Hồ sơ Word cũng có poster giới thiệu một số cán bộ và số điện thoại cá nhân. Việc có đưa các số này lên website public hay không cần quyết định riêng.

### Quy tắc

Không public contact cá nhân chỉ vì nó xuất hiện trong tài liệu hoặc mockup.

Status: `NEEDS USER APPROVAL`

---

## 3. Danh sách người có công

Hồ sơ đã nói rõ danh sách cụ thể liệt sĩ, Mẹ Việt Nam Anh hùng, thương binh và gia đình có công của riêng Hòa Mỹ/Phú Lộc chưa được hoàn thiện ở mức cần thiết để gán chi tiết.

### Quy tắc

- Chỉ trình bày khái quát theo hồ sơ.
- Không tự lập danh sách.
- Không suy ra quê quán từ tài liệu ngoài nếu chưa có phase xác minh riêng.

Status: `SOURCE LIMITATION`

---

## 4. Dốc Tầng

Hồ sơ nguồn ghi rõ Dốc Tầng thuộc khu vực Phú Bình cũ, hiện thuộc thôn Quế Xuân, không phải thành tố lịch sử và địa danh Hòa Phú.

### Quy tắc

Không đưa Dốc Tầng vào Hòa Phú.

Status: `LOCKED`

---

## 5. Quyền sử dụng hình ảnh

Các ảnh trong file Word đã được trích ra để thuận tiện cho development. Điều đó không tự động chứng minh quyền public/reuse của mọi ảnh trên website.

### Quy tắc

- Development: có thể dùng làm reference.
- Production: ưu tiên ảnh địa phương do Ban tổ chức/người dùng cung cấp hoặc ảnh đã xác định quyền sử dụng.
- Nếu ảnh lấy từ báo/nguồn ngoài, giữ attribution/link khi phù hợp và xác minh quyền sử dụng.
- Không dùng ảnh AI như bằng chứng lịch sử.

Status: `REVIEW BEFORE PRODUCTION`

---

## 6. Domain

Vercel có thể deploy preview trước.

Khi có domain cuối cùng cần cập nhật:

- canonical URL;
- Open Graph URL;
- sitemap;
- QR code chính thức.

Status: `PENDING`

---

## 7. QR code

Không tạo QR chính thức cho tới khi domain/URL production ổn định.

Nếu tạo QR tạm cho demo, phải ghi rõ đó là QR preview.

Status: `WAIT FOR PRODUCTION URL`

