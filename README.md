# BA.devlog — Blog Business Analyst của bạn

Website blog cá nhân phong cách terminal/hacker (lấy cảm hứng cấu trúc từ donniechu.com), xây bằng **Next.js 15 + TypeScript + CSS thuần**.

Tagline: `TRY. FAIL. LEARN. GROW. REPEAT.`

## 🚀 Chạy website

```bash
cd ba-devlog
npm install        # chỉ cần chạy lần đầu (đã cài sẵn)
npm run dev        # chế độ phát triển → http://localhost:3000
```

Khi muốn chạy bản production:

```bash
npm run build
npm start
```

> Lưu ý trên Windows PowerShell: nếu bị chặn script, dùng `npm.cmd run dev`.

## 📁 Cấu trúc 5 trang

| Trang | Đường dẫn | Nội dung |
|---|---|---|
| Home | `/` | Hero terminal-style + card "BA LOOP", ticker chạy chữ, Intro, Featured carousel, Latest posts, Newsletter |
| Posts | `/posts` | Toàn bộ bài viết, có **ô tìm kiếm + lọc theo tag** |
| Bài viết | `/posts/[slug]` | Mục lục (TOC) tự sinh, ảnh bìa, bài cũ/mới hơn, newsletter sidebar |
| Projects | `/projects` | Lưới card dự án kèm trạng thái (DONE / IN PROGRESS) |
| Resource Hub | `/resources` | 4 nhóm: Sách, Công cụ, Template, Khóa học & Cộng đồng |
| About | `/about` | Ảnh chân dung (chờ chèn), giới thiệu, kỹ năng, nguyên tắc |

## ✍️ Sửa nội dung ở đâu? (không cần đụng code giao diện)

Mọi thứ nằm trong thư mục `content/`:

- **`content/site.ts`** — tên blog, tagline, menu, mạng xã hội, các dòng code trang trí hero, 6 topics ở footer
- **`content/articles/*.md`** — BÀI VIẾT: mỗi bài là 1 file Markdown (viết như soạn văn bản). Tạo bài mới = copy `_mau-bai-viet.md` → đổi tên → gõ nội dung. Chi tiết xem **`HUONG_DAN_VIET_BAI.md`**
- **`content/projects.ts`** — dự án của bạn
- **`content/resources.ts`** — link tài nguyên (nhớ thay các `href: "#"`)

## 🖼️ Chèn ảnh của bạn

1. Thả file ảnh vào `public/images/`
2. Thêm prop `src` cho ô ảnh, ví dụ:
   - Ảnh chân dung trang About → mở `app/about/page.tsx`, sửa `<ImagePlaceholder label="..." />` thành `<ImagePlaceholder src="/images/avatar.jpg" label="..." />`
   - Ảnh bìa bài viết → sửa dòng `image:` trong phần khai báo đầu file `.md`; ảnh dự án → sửa `image: null` thành `image: "/images/ten-anh.jpg"` trong `content/projects.ts`
   - Ảnh trong nội dung bài → xem `public/images/README.md`

Các ô chờ ảnh hiện có: hero trang chủ, card featured, trong thân bài viết, card dự án, trang About. Ô gạch chéo 🖼 sẽ tự biến thành ảnh thật khi bạn cung cấp `src`.

## 🎨 Tùy biến giao diện

Toàn bộ design system nằm ở **`app/globals.css`**:
- Đổi màu: sửa các biến trong `:root` (đầu file) — `--bg`, `--accent`, `--green`...
- Font: JetBrains Mono (code) + Inter (chữ thường), khai báo trong `app/layout.tsx`
- Hiệu ứng: ticker marquee, card brutalist (viền đậm + đổ bóng cứng), hover states

## 📬 Newsletter

Form hiện là **demo** (hiện thông báo cảm ơn). Muốn hoạt động thật, đăng ký miễn phí [Buttondown](https://buttondown.email) hoặc [Mailchimp], rồi sửa hàm `handleSubmit` trong `components/NewsletterForm.tsx` để gọi API của họ.

## ☁️ Web đang chạy ở đâu?

**🌐 https://tannguyen-bablog.pages.dev** — host trên Cloudflare Pages (free, cho phép dùng thương mại, CDN toàn cầu).

- Code: https://github.com/tannguyen-work/Tannguyen-Bablog
- Chế độ build: **static export** (`output: "export"` trong `next.config.mjs`) → toàn bộ web là file tĩnh trong thư mục `out/`

### Cập nhật web sau khi sửa nội dung

Cách 1 — một chạm: **nhấp đúp `deploy.bat`** (tự build + đẩy lên Cloudflare).

Cách 2 — thủ công:

```bash
npm run build
npx wrangler pages deploy out --project-name=tannguyen-bablog
```

(Đăng nhập lại Cloudflare khi hết hạn: `npx wrangler login`)

### Gắn tên miền riêng (khi bạn mua domain)

Dashboard Cloudflare → project **tannguyen-bablog** → **Custom domains** → Add. Nếu mua domain ngay trong Cloudflare (Domain Registration, giá gốc ~$10/năm cho .com) thì nó tự kết nối, không cần chỉnh DNS.

### Deploy nền tảng khác (tùy chọn)

- **Vercel:** import repo GitHub, để nguyên cấu hình (static export chạy tốt trên Vercel)
- **GitHub Pages:** đẩy thư mục `out/` lên nhánh `gh-pages`, hoặc dùng workflow Actions

## ✅ Việc còn lại cho bạn

- [ ] Thay `site.author`, `site.email`, link mạng xã hội trong `content/site.ts`
- [ ] Viết bài thật của bạn trong `content/articles/` (5 bài .md hiện tại là mẫu — xem `HUONG_DAN_VIET_BAI.md`)
- [ ] Thêm dự án + link tài nguyên thật
- [ ] Chèn ảnh vào `public/images/`
- [ ] Kết nối dịch vụ email cho newsletter (tùy chọn)
