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
| Home | `/` | Hero terminal-style + card "BA LOOP", Intro, Featured, Recent posts, Newsletter, ticker chạy chữ ở đáy màn hình |
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
- **Dark / Light mode**: nút ☾/☀ ở góc phải header (file `components/ThemeToggle.tsx`). Lựa chọn được lưu trong `localStorage` của khách; chưa bấm lần nào thì tự theo cài đặt hệ điều hành. Bảng màu tối nằm ở `:root`, bảng màu sáng ở `:root[data-theme="light"]` — sửa màu 2 khối này là đổi được cả 2 chế độ
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

**Cách chuẩn (đang hoạt động): GitHub Actions tự động deploy.** Chỉ cần code lên GitHub là web tự cập nhật:

```bash
git add .
git commit -m "them bai viet moi"
git push
```

→ GitHub Actions tự build + đẩy lên Cloudflare Pages trong ~3 phút. Theo dõi tiến trình: repo GitHub → tab **Actions** (vòng tròn xanh = thành công).

Workflow nằm ở `.github/workflows/deploy.yml`, dùng secret `CLOUDFLARE_API_TOKEN` (cài trong repo Settings → Secrets and variables → Actions). Token hết hạn/mất? Tạo lại tại dash.cloudflare.com/profile/api-tokens (quyền Account | Cloudflare Pages | Edit) rồi cập nhật secret.

**Viết bài từ máy tính khác / điện thoại (không cần cài gì):** vào repo trên github.com → mở file `.md` trong `content/articles/` → bấm ✏️ sửa → Commit. Hoặc bấm phím `.` trên trang repo để mở VS Code trong trình duyệt (github.dev). Mọi commit lên `main` đều tự deploy.

**Cách dự phòng — deploy thủ công từ máy này:** nhấp đúp `deploy.bat`, hoặc:

```bash
npm run build
npx wrangler pages deploy out --project-name=tannguyen-bablog
```

(Đăng nhập lại Cloudflare khi hết hạn: `npx wrangler login`)

> ⚠️ Trên dashboard Cloudflare có thể còn một "application" Workers Builds cũ (nối Git trực tiếp) đang lỗi build token — **cứ kệ nó, đừng xóa project `tannguyen-bablog`** (xóa là mất web). Deploy thật sự giờ chạy qua GitHub Actions.

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
