# 🔍 Hướng dẫn SEO cho blog của bạn

## Phần 1 — Kỹ thuật (ĐÃ LÀM SẴN ✅, bạn không cần đụng vào)

Những thứ sau đã được cài đặt và đang chạy trên https://tannguyen-bablog.pages.dev:

| Hạng mục | Tác dụng | Trạng thái |
|---|---|---|
| HTML tĩnh (SSG) | Google đọc nội dung dễ nhất, tải nhanh nhất | ✅ |
| `<title>` + meta description riêng cho từng bài | Hiện đẹp trên kết quả tìm kiếm | ✅ tự lấy từ `title` + `excerpt` trong file .md |
| Open Graph + Twitter Card | Chia sẻ lên Facebook/Zalo/LinkedIn/X hiện tiêu đề + mô tả + ảnh | ✅ |
| Canonical URL | Tránh trùng lặp nội dung trên Google | ✅ |
| `sitemap.xml` tự sinh | Khai báo mọi bài viết với Google — thêm bài mới là sitemap tự cập nhật | ✅ /sitemap.xml |
| `robots.txt` | Cho phép bot thu thập | ✅ /robots.txt |
| JSON-LD `BlogPosting` | Google hiểu đây là bài blog (tác giả, ngày đăng...) → dễ hiện kết quả giàu (rich results) | ✅ |
| Mobile-friendly + HTTPS | Tiêu chí xếp hạng bắt buộc | ✅ |
| Heading đúng chuẩn (1 thẻ h1/trang, h2 có id) | Cấu trúc rõ cho bot | ✅ |

## Phần 2 — Việc BẠN cần làm (quan trọng hơn kỹ thuật!)

### 1. Đăng ký Google Search Console (một lần, ~10 phút) ⭐ QUAN TRỌNG NHẤT

Đây là nơi Google "nhận diện" blog của bạn:

1. Vào https://search.google.com/search-console → đăng nhập tài khoản Google
2. **Add property** → chọn loại **URL prefix** → dán `https://tannguyen-bablog.pages.dev`
3. Xác minh bằng thẻ HTML: Google đưa 1 đoạn `<meta name="google-site-verification" ...>` → gửi đoạn đó cho tôi (hoặc tự dán vào `app/layout.tsx` trong metadata: `verification: { google: "mã-của-bạn" }`) → chạy `deploy.bat`
4. Trong Search Console → mục **Sitemaps** → gõ `sitemap.xml` → Submit
5. Xong! Mỗi lần bạn đăng bài mới, vào **URL Inspection** → dán link bài → "Request Indexing" để Google thu thập ngay (thay vì chờ vài ngày)

### 2. Viết bài chuẩn SEO — checklist trước khi bấm deploy

- [ ] **Tiêu đề chứa từ khóa người ta thực sự tìm**: ví dụ thay "Chuyện nghề BA" (không ai tìm) → "Business Analyst là gì? Lộ trình vào nghề 2026" (có người tìm thật). Công cụ gợi ý từ khóa miễn phí: Google Trends, Google Suggest (gõ thử lên ô tìm kiếm Google xem nó gợi ý gì), AnswerThePublic
- [ ] **`excerpt` viết như meta description**: 1-2 câu, ~120-155 ký tự, chứa từ khóa, có tính "mời bấm" — đây là dòng hiện dưới tiêu đề trên Google
- [ ] **Slug (tên file) chứa từ khóa chính**, ngắn gọn: `business-analyst-la-gi.md` tốt hơn `bai-viet-so-1.md`
- [ ] **Mục `##` đầu tiên** trả lời thẳng câu hỏi của tiêu đề (Google thích câu trả lời nhanh — dễ được featured snippet)
- [ ] **tags** đặt nhất quán (đừng mỗi bài một kiểu: `sql` vs `SQL-queries`)
- [ ] Bài dài ~800-1500 từ thường đủ sâu; quan trọng hơn: **giải quyết trọn vẹn 1 vấn đề**
- [ ] Có **ảnh thật** càng tốt (đổi dòng `![...](/images/anh.jpg)`) — nén ảnh trước, và mô tả ảnh chứa từ khóa (`![Dashboard Power BI phân tích doanh thu](...)`)
- [ ] Khi có ảnh bìa, thêm `image: /images/anh.jpg` vào frontmatter → link chia sẻ Facebook sẽ có ảnh to đẹp (tăng tỷ lệ click)

### 3. Việc đều đặn sau khi đăng

- **Đẩy bài lên Google**: Search Console → URL Inspection → Request Indexing (bài mới nào cũng làm)
- **Chia sẻ mạng xã hội** trong 24-48h đầu: LinkedIn/Facebook group BA — traffic sớm giúp Google chú ý
- **Internal link**: bài mới nhắc tới bài cũ thì chèn link `[chữ mô tả](/posts/bai-cu)` — Google đánh giá cao web có liên kết nội bộ
- **Theo dõi**: Search Console → Performance → xem bài nào được click, từ khóa nào dẫn tới blog → viết tiếp chủ đề đó
- **Kiên nhẫn**: blog mới thường mất 4-12 tuần để Google bắt đầu xếp hạng. Đều đặn 1-2 bài/tuần quan trọng hơn mọi mẹo vặt

### 4. Khi đã có tên miền riêng

Sửa 1 dòng trong `content/site.ts`: `siteUrl: "https://ten-mien-cua-ban.com"` → chạy `deploy.bat` → vào Search Console thêm property mới + submit lại sitemap. Toàn bộ canonical/OG/sitemap tự trỏ sang domain mới.

## Phần 3 — Mẹo nâng cao (khi blog đã chạy ổn)

- **Target "long-tail keyword" tiếng Việt**: "cách viết user story tiếng việt", "brd template excel" — ít cạnh tranh, dễ lên top hơn từ khóa chung chung
- **Trả lời câu hỏi cụ thể**: viết theo format câu hỏi ("X là gì?", "Cách làm Y") dễ ăn featured snippet
- **Đo tốc độ**: thi thoảng check https://pagespeed.web.dev với link web của bạn (static + Cloudflare CDN nên điểm sẽ rất cao — cứ giữ ảnh nhẹ là ổn)
- **Backlink tự nhiên**: chia sẻ bài lên các group BA, diễn đàn — mỗi link trỏ về là một "phiếu tín nhiệm" với Google
