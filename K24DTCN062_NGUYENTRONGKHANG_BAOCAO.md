# HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
## BÀI TẬP THỰC HÀNH (CÁ NHÂN)

---

* **Môn học:** Lập trình Web
* **Mã học phần:** INT1434
* **Nhóm học phần:** Nhóm 02
* **Thời gian thực hiện:** Theo kế hoạch LMS
* **Hình thức:** Thực hành cá nhân
* **Mã sinh viên:** K24DTCN062
* **Họ và tên:** Nguyễn Trọng Khang
* **Lớp:** D24TXCN02-K
* **Giáo viên giảng dạy:** [Điền tên Giảng viên phụ trách]

---

## I. TRÌNH BÀY CÁC BƯỚC TRIỂN KHAI

### Bước 1: Chuẩn bị môi trường và tài nguyên

1. **Môi trường phát triển:**
   * Trình biên soạn mã nguồn: Visual Studio Code (VS Code) phiên bản mới nhất, kèm các extension hỗ trợ: *Live Server*, *Prettier*, *HTML CSS Support*.
   * Trình duyệt kiểm thử: Google Chrome & Microsoft Edge với bộ công cụ DevTools (F12) để kiểm thử giao diện Responsive và kiểm tra lỗi JavaScript qua Console.
   * Quản lý phiên bản và mã nguồn: Git, GitHub.
   * Triển khai thử nghiệm (Hosting): Vercel (`vercel.json`).

2. **Khởi tạo thư mục và tài nguyên dự án:**
   * Thư mục dự án: `K24DTCN062_NGUYENTRONGKHANG`
   * Cấu trúc thư mục và tệp tin:
     ```text
     K24DTCN062_NGUYENTRONGKHANG/
     │
     ├── K24DTCN062_NGUYENTRONGKHANG.html   # Tệp cấu trúc nội dung HTML chính
     ├── K24DTCN062_NGUYENTRONGKHANG.css    # Tệp định dạng giao diện & hiệu ứng CSS
     ├── K24DTCN062_NGUYENTRONGKHANG.js     # Tệp xử lý kịch bản tương tác JavaScript
     ├── K24DTCN062_NGUYENTRONGKHANG_BAOCAO.md # Tệp báo cáo chi tiết định dạng Markdown
     ├── vercel.json                        # Tệp cấu hình triển khai Vercel
     └── README.md                          # Giới thiệu dự án
     ```

---

### Bước 2: Xây dựng cấu trúc HTML

Trang web được tổ chức theo chuẩn **HTML5 Semantic**, chia rõ ràng thành các phân vùng logic phục vụ hiển thị và tối ưu SEO / Accessibility:

1. **Thẻ `<head>`:**
   * Khai báo chuẩn ký tự UTF-8, cấu hình thẻ viewport cho thiết kế Responsive.
   * Thẻ `<title>` và `<meta name="description">` thể hiện thông tin sinh viên và trường.
   * Liên kết tệp CSS độc lập và font chữ Google Fonts (*Inter*, *Outfit*).

2. **Khối Header (`<header>`):**
   * Chứa Logo nhận diện cá nhân cách điệu kết hợp tên viện đào tạo: `<div class="logo-icon">NK</div>` và `<div class="logo-text"><span>PTIT</span> – Portfolio</div>`.
   * Vùng hiển thị đồng hồ kỹ thuật số theo thời gian thực: `<div id="clock">🕐 --:--:--</div>`.

3. **Khối Hero / Profile (`<section class="hero">`):**
   * **Ảnh đại diện (Avatar):** Khung chứa ảnh tròn có viền gradient phát sáng, hỗ trợ sự kiện phóng to khi nhấp chuột (`role="button"`, `tabindex="0"`).
   * **Thông tin tóm tắt:** Badge "🎓 Sinh viên PTIT", Họ tên lớn (h1), Mã sinh viên, Lớp và các thẻ tag (Trường, Chuyên ngành ô tô, Công ty VinFast, Địa chỉ Hải Phòng).
   * **Liên kết mạng xã hội:** 4 nút liên kết tích hợp icon SVG chuẩn (Facebook, GitHub, Zalo với link trực tiếp, LinkedIn) có thuộc tính bảo mật `target="_blank" rel="noopener"`.

4. **Khối Thông tin chi tiết (`<section id="personal-info">`):**
   * Trình bày dưới dạng lưới gồm 9 trường thông tin bắt buộc theo đề bài:
     1. Mã sinh viên: **K24DTCN062**
     2. Họ và tên: **Nguyễn Trọng Khang**
     3. Lớp: **D24TXCN02-K**
     4. Trường: **Học viện Công nghệ Bưu chính Viễn thông (PTIT)**
     5. Email: **khangnt.k24dtcn062@stu.ptit.edu.vn**
     6. Số điện thoại: **0365 595 529**
     7. Ngày sinh: **18/05/1995**
     8. Giới tính: **Nam**
     9. Địa chỉ: **Hồng Bàng, Hải Phòng**

5. **Khối Công việc hiện tại (`<section id="work">`):**
   * Vị trí: **Kỹ thuật viên Sửa chữa Ô tô** tại **VinFast Auto**.
   * Mô tả công việc chuyên môn: Kiểm tra, chẩn đoán hệ thống cơ – điện tử xe điện, bảo dưỡng, xử lý phần cứng, phần mềm nhúng và nâng cấp pin, OBC, BMS theo chuẩn nhà sản xuất.

6. **Khối Giới thiệu sở thích (`<section id="hobbies">`):**
   * Nút bấm điều khiển ẩn/hiện danh sách: `<button id="hobbies-toggle">👇 Xem thêm</button>`.
   * Danh sách 3 sở thích kèm icon minh họa trực quan:
     * 🎵 **Nghe nhạc:** Thể loại EDM, Pop, nhạc Việt thư giãn sau giờ làm.
     * 🎬 **Xem phim:** Hành động, khoa học viễn tưởng và phim tài liệu công nghệ.
     * 🎮 **Xem T1 (Esports):** Cổ vũ Faker và đội tuyển T1 tại các giải đấu LCK, Worlds.

7. **Khối Chân trang (`<footer>`):**
   * Hiển thị thông tin bản quyền tự động cập nhật năm hệ thống (`<span id="copy-year"></span>`), họ tên sinh viên, thông điệp "Made with ❤️ for LTW – PTIT" và Mã sinh viên.

8. **Cửa sổ Popup phóng to ảnh (`<div id="avatar-modal">`):**
   * Đóng vai trò làm lớp phủ mờ (overlay) toàn màn hình khi người dùng click vào ảnh đại diện, có nút đóng `✕` (`#modal-close`).

---

### Bước 3: Thiết kế giao diện với CSS

Giao diện được xây dựng hiện đại với phong cách **Dark Glassmorphism**, màu sắc hài hòa và hiệu ứng chuyển động mượt mà.

#### 3.1. Reset CSS và thiết lập biến toàn cục (CSS Variables)
Sử dụng bộ chọn `*` để chuẩn hóa `box-sizing: border-box`, `margin: 0`, `padding: 0`. Bảng màu được kiểm soát chặt chẽ với tối đa 3 màu chủ đạo theo quy định:
```css
:root {
  --primary:   #6c63ff;     /* Tím hiện đại - Màu chủ đạo 1 */
  --secondary: #f5a623;     /* Vàng cam nhấn - Màu chủ đạo 2 */
  --accent:    #00d4aa;     /* Xanh ngọc phát sáng - Màu chủ đạo 3 */
  --bg-dark:   #0d0e1a;     /* Nền tối sâu */
  --bg-card:   rgba(255, 255, 255, 0.05); /* Hiệu ứng kính mờ Glassmorphism */
  --border:    rgba(108, 99, 255, 0.25);
  --shadow:    0 8px 32px rgba(108, 99, 255, 0.2);
  --radius:    16px;
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```
Trang bị 2 quả cầu ánh sáng nền (`::before`, `::after` với `filter: blur(120px)`) chuyển động nhịp nhàng qua `@keyframes blob1` và `@keyframes blob2`.

#### 3.2. Bố cục Header bằng Flexbox
Thanh điều hướng được thiết lập cố định (`sticky`), sử dụng nền mờ trong suốt (`backdrop-filter: blur(20px)`) và bố cục Flexbox giúp căn đều hai đầu:
```css
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 20px;
}
```

#### 3.3. Bố cục phần Profile và Lưới thông tin
* **Khối Hero Profile:** Sử dụng Flexbox để dàn ngang ảnh đại diện bên trái và thông tin cá nhân bên phải:
  ```css
  .hero-card {
    display: flex;
    align-items: center;
    gap: 40px;
    background: var(--bg-card);
    backdrop-filter: blur(16px);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 40px;
  }
  ```
* **Lưới thông tin cá nhân (Info Grid):** Sử dụng CSS Grid thông minh tự co giãn kích thước linh hoạt mà không bị vỡ layout:
  ```css
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
  }
  ```

#### 3.4. Hiệu ứng Hover và Chuyển động
* **Hiệu ứng vòng sáng ảnh đại diện (Pulse Glow Ring):**
  ```css
  .avatar-ring {
    animation: pulse-ring 3s ease-in-out infinite;
    transition: transform var(--transition), box-shadow var(--transition);
  }
  .avatar-ring:hover {
    transform: scale(1.06);
    box-shadow: 0 0 40px rgba(108, 99, 255, 0.6);
  }
  ```
* **Hiệu ứng thẻ card & nút bấm:** Khi hover vào các thẻ thông tin, thẻ công việc hoặc nút mạng xã hội, các phần tử nổi lên trên theo phương Y (`transform: translateY(-4px)`), đổ bóng màu nổi bật và đổi màu viền sắc nét.

#### 3.5. Responsive cho thiết bị di động (Media Queries)
Đảm bảo trang web hiển thị tối ưu trên màn hình Tablet và Mobile:
```css
/* Tablet & Màn hình vừa (< 768px) */
@media (max-width: 768px) {
  .hero-card {
    flex-direction: column;
    text-align: center;
    padding: 28px 22px;
  }
  .social-links {
    justify-content: center;
  }
}

/* Smartphone (< 480px) */
@media (max-width: 480px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
  .hero-name {
    font-size: 1.5rem;
  }
  .hobbies-list {
    grid-template-columns: 1fr;
  }
}
```

---

### Bước 4: Xử lý tương tác với JavaScript

Tệp `K24DTCN062_NGUYENTRONGKHANG.js` phụ trách xử lý toàn bộ logic tương tác người dùng theo đúng 100% yêu cầu đề bài:

#### 4.1. Hiển thị thông báo chào mừng kèm ngày hệ thống
Khi tài nguyên trang tải hoàn tất (sự kiện `load`), hàm lấy ngày, tháng, năm thực tế từ đối tượng `new Date()` và hiển thị hộp thoại alert:
```javascript
window.addEventListener('load', () => {
  const now = new Date();
  const day  = String(now.getDate()).padStart(2, '0');
  const mon  = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  alert(`Hôm nay là ngày ${day}/${mon}/${year}\nChào mừng bạn đến với trang của Nguyễn Trọng Khang!`);
});
```

#### 4.2. Đồng hồ số thời gian thực cập nhật mỗi giây
Sử dụng `setInterval` lặp lại mỗi 1000ms, định dạng chuỗi 2 chữ số với `padStart(2, '0')` và gán vào phần tử `#clock`:
```javascript
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const el = document.getElementById('clock');
  if (el) el.textContent = `🕐 ${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();
```

#### 4.3. Popup phóng to ảnh đại diện
Xử lý mở modal khi click vào ảnh đại diện, đồng thời hỗ trợ đóng modal qua: nhấp nút `✕`, nhấp ra vùng nền ngoài (overlay backdrop) hoặc nhấn phím `Escape`:
```javascript
const avatarRing  = document.getElementById('avatarRing');
const avatarModal = document.getElementById('avatar-modal');
const modalClose  = document.getElementById('modal-close');

if (avatarRing) {
  avatarRing.addEventListener('click', () => {
    avatarModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang phía dưới
  });
}
if (modalClose) modalClose.addEventListener('click', closeModal);
if (avatarModal) {
  avatarModal.addEventListener('click', (e) => {
    if (e.target === avatarModal) closeModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
function closeModal() {
  avatarModal.classList.remove('show');
  document.body.style.overflow = '';
}
```

#### 4.4. Ẩn / hiện phần giới thiệu sở thích (Toggle Accordion)
Khi nhấn nút, trạng thái `hobbiesOpen` được đảo ngược; class `.open` được bật/tắt kết hợp hiệu ứng CSS `max-height` và `opacity` để tạo hiệu ứng trượt mở mượt mà, đồng thời thay đổi văn bản nút giữa `"👇 Xem thêm"` và `"👆 Thu gọn"`:
```javascript
const toggleBtn   = document.getElementById('hobbies-toggle');
const hobbiesList = document.getElementById('hobbies-list');
let hobbiesOpen   = false;

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    hobbiesOpen = !hobbiesOpen;
    if (hobbiesOpen) {
      hobbiesList.classList.add('open');
      toggleBtn.innerHTML = '👆 Thu gọn';
    } else {
      hobbiesList.classList.remove('open');
      toggleBtn.innerHTML = '👇 Xem thêm';
    }
  });
}
```

#### 4.5. Tự động cập nhật năm bản quyền
Tránh việc cố định năm tĩnh bằng cách tự động gán năm hiện tại thông qua `new Date().getFullYear()`:
```javascript
const yearEl = document.getElementById('copy-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
```

---

### Bước 5: Kiểm thử và hoàn thiện

1. **Kiểm thử đa thiết bị & Responsive:**
   * Sử dụng Chrome DevTools mô phỏng trên các thiết bị: iPhone 12/14 Pro, Samsung Galaxy S20, iPad Air và Desktop màn hình rộng 1920x1080. Bố cục tự động điều chỉnh linh hoạt, không phát sinh lỗi tràn khung ngang (`overflow-x`).
2. **Kiểm thử tương tác:**
   * Xác thực thông báo chào mừng xuất hiện chính xác ngày hiện tại khi tải trang.
   * Đồng hồ số nhảy nhịp nhàng từng giây.
   * Modal ảnh phóng to hoạt động tốt và đóng mở dễ dàng trên mọi thiết bị.
   * Nút "Xem thêm" / "Thu gọn" mở rộng và đóng danh sách mượt mà.
3. **Kiểm tra tab Console (F12):**
   * Kết quả: **0 errors, 0 warnings**. Không có lỗi JavaScript runtime hoặc tài nguyên 404.
4. **Kiểm tra ngữ nghĩa và trợ năng:**
   * Sử dụng đầy đủ các thuộc tính `aria-label`, `aria-expanded`, `role="button"`, cấu trúc thẻ tiêu đề `h1`, `h2` chuẩn SEO.

---

## II. KẾT QUẢ THỰC HIỆN

### 1. Hình ảnh minh họa kết quả kiểm thử

#### Hình 1: Giao diện trang web trên Desktop
![Giao diện trang web trên Desktop](images/desktop_view.png)
* **Mô tả:** Trang web hiển thị hoàn chỉnh với phong cách tối hiện đại. Header gồm Logo cá nhân "NK PTIT" và đồng hồ kỹ thuật số. Thẻ Hero giới thiệu nổi bật ảnh đại diện và các liên kết mạng xã hội. Lưới thông tin cá nhân và thẻ công việc hiện tại VinFast được sắp xếp ngay ngắn.

---

#### Hình 2: Giao diện trang web trên Mobile (Responsive)
![Giao diện trang web trên Mobile](images/mobile_view.png)
* **Mô tả:** Khi xem trên màn hình điện thoại (độ rộng dưới 768px), giao diện tự động xếp dọc (column layout), ảnh đại diện căn giữa, các khối thông tin cá nhân tự co thành 1 cột giúp người dùng thao tác vuốt cuộn dễ dàng.

---

#### Hình 3: Chức năng Popup phóng to ảnh đại diện
![Chức năng Popup phóng to ảnh đại diện](images/popup_avatar.png)
* **Mô tả:** Khi nhấp chuột vào ảnh đại diện, nền trang mờ đi và cửa sổ modal phóng to ảnh xuất hiện ở trung tâm màn hình cùng nút đóng (✕) ở góc trên bên phải.

---

#### Hình 4: Chức năng ẩn/hiện sở thích
![Chức năng ẩn hiện sở thích](images/hobbies_toggle.png)
* **Mô tả:** Trạng thái ban đầu danh sách sở thích được ẩn gọn. Khi bấm nút "Xem thêm", danh sách 3 sở thích xổ xuống kèm hiệu ứng mượt mà và nút tự đổi thành "Thu gọn".

---

#### Hình 5: Thông báo chào mừng khi tải trang
![Thông báo chào mừng khi tải trang](images/welcome_alert.png)
* **Mô tả:** Hộp thoại thông báo chào mừng (alert) xuất hiện ngay khi trang web tải xong, thể hiện rõ ngày hệ thống và lời chào mừng đích danh sinh viên Nguyễn Trọng Khang.

---

#### Hình 6: Kiểm tra lỗi trên Console (F12)
![Kiểm tra Console F12](images/console_clean.png)
* **Mô tả:** Tab Console trong bộ công cụ kiểm thử DevTools hoàn toàn sạch sẽ, không có bất kỳ thông báo lỗi hoặc cảnh báo nào.

---

### 2. Bảng tổng hợp kết quả đạt được

Đối chiếu với các tiêu chí trong đề bài bài tập thực hành cá nhân:

| STT | Yêu cầu theo đề bài | Chi tiết triển khai | Trạng thái |
| :---: | :--- | :--- | :---: |
| 1 | Logo, ảnh đại diện, thông tin cá nhân đầy đủ | Logo NK PTIT cách điệu, avatar có hiệu ứng phát sáng, 9 mục thông tin cá nhân chuẩn xác | **Hoàn thành** |
| 2 | Giới thiệu công việc hiện tại | Kỹ thuật viên Sửa chữa Ô tô tại VinFast Auto, mô tả công việc cơ - điện tử rõ ràng | **Hoàn thành** |
| 3 | Giới thiệu sở thích | 3 sở thích: Nghe nhạc, Xem phim, Xem T1 Esports kèm icon và mô tả | **Hoàn thành** |
| 4 | Liên kết mạng xã hội | Đầy đủ 4 nút mạng xã hội: Facebook, GitHub, Zalo (kèm SĐT thực tế), LinkedIn | **Hoàn thành** |
| 5 | Footer bản quyền | Thông tin tác giả, sinh viên PTIT, mã SV và năm bản quyền tự động cập nhật | **Hoàn thành** |
| 6 | CSS Flexbox / Grid, Responsive | Flexbox cho header & hero; Grid cho thông tin & sở thích; Responsive 768px & 480px | **Hoàn thành** |
| 7 | Hiệu ứng hover, transition, animation | Đầy đủ hover card nổi lên, vòng xoay phát sáng avatar, blob chuyển động nền | **Hoàn thành** |
| 8 | JavaScript chào mừng + ngày hệ thống | Alert xuất hiện khi trang nạp xong, hiển thị đúng ngày/tháng/năm thực tế | **Hoàn thành** |
| 9 | JavaScript popup ảnh | Click vào avatar mở modal phóng to, đóng bằng nút ✕, click ngoài hoặc phím ESC | **Hoàn thành** |
| 10 | JavaScript ẩn/hiện sở thích | Nút bấm chuyển đổi linh hoạt trạng thái "Xem thêm" / "Thu gọn" với animation CSS | **Hoàn thành** |
| 11 | JavaScript đồng hồ số | Đồng hồ kỹ thuật số ở header cập nhật chính xác theo từng giây | **Hoàn thành** |

---

## III. KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

* **Kết luận:** Dự án đã vận dụng thành công và chuẩn hóa các kiến thức trọng tâm của học phần Lập trình Web: cấu trúc Semantic HTML5, kỹ thuật phân tầng giao diện với CSS Flexbox/Grid, tư duy phối màu theo chuẩn UI/UX, cũng như các thao tác xử lý sự kiện DOM tương tác của JavaScript thuần (Vanilla JS). Toàn bộ 11/11 yêu cầu kỹ thuật được hoàn thành trọn vẹn, không có lỗi runtime.
* **Hướng phát triển:**
  * Bổ sung tính năng chuyển đổi giao diện Sáng / Tối (Light / Dark Theme Toggle) lưu trữ tùy chọn người dùng qua `localStorage`.
  * Tích hợp biểu mẫu liên hệ tương tác (Contact Form) có xác thực dữ liệu đầu vào (Validation) bằng JavaScript.
  * Tối ưu hóa điểm số hiệu năng (Lighthouse score) lên mức tuyệt đối (100/100).

---

*(Ký tên)*  
**Nguyễn Trọng Khang**  
*(Mã sinh viên: K24DTCN062)*
