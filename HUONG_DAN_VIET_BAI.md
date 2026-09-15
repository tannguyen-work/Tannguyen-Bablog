# 📝 Hướng dẫn viết bài & đăng bài (bản Markdown)

Từ giờ viết bài cực đơn giản: **tạo 1 file .md → gõ nội dung như soạn văn bản → chạy deploy.bat**.

## Quy trình 3 bước

### Bước 1 — Tạo file bài viết mới

1. Vào thư mục `content/articles/`
2. Copy file **`_mau-bai-viet.md`** (file mẫu — bắt đầu bằng dấu `_` nên không bị đăng lên web)
3. Đổi tên bản copy thành tên bài viết **không dấu, cách nhau bằng gạch nối**, ví dụ:
   `cach-toi-viet-brd-dau-tien.md`
   → Tên file này chính là link bài viết: `/posts/cach-toi-viet-brd-dau-tien`
4. Mở file bằng **VS Code** (khuyên dùng) hoặc Notepad, gõ nội dung

### Bước 2 — Xem trước (tùy chọn)

Chạy `start.bat` → mở http://localhost:3000/posts → bấm vào bài của bạn xem thử.
Sửa file .md, lưu lại (Ctrl+S) → web tự cập nhật ngay, không cần khởi động lại.

### Bước 3 — Đăng lên internet

Nhấp đúp **`deploy.bat`** → đợi ~1 phút → bài đã online tại
`https://tannguyen-bablog.pages.dev/posts/ten-bai-viet`

(Xong nên đẩy backup lên GitHub: `git add . && git commit -m "bai viet moi" && git push`)

## Phần khai báo đầu file (giữa 2 dòng `---`)

| Dòng | Ý nghĩa | Ví dụ |
|---|---|---|
| `title` | Tiêu đề bài viết | `title: Cách tôi viết BRD đầu tiên` |
| `date` | Ngày đăng (năm-tháng-ngày) — bài mới nhất tự xếp trên cùng | `date: 2026-09-16` |
| `excerpt` | Mô tả ngắn 1-2 câu hiện ở card | `excerpt: Bài học xương máu...` |
| `tags` | Danh sách tag trong ngoặc vuông | `tags: [documentation, career]` |
| `featured` | `true` = hiện ở carousel trang chủ | `featured: true` |
| `image` | Ảnh bìa (bỏ dấu `#` khi dùng) | `image: /images/bia.jpg` |

⚠️ Lưu ý: nếu `title`/`excerpt` chứa dấu `:` hoặc `"` → bọc cả dòng trong dấu nháy kép:
`title: "SQL: 10 truy vấn hay dùng"`

Số thứ tự `#001, #002...` và thời gian đọc **tự động tính** — khỏi cần khai.

## Cú pháp viết nội dung (Markdown căn bản)

```markdown
## Mục lớn          ← tự động vào mục lục (TOC) bên phải
### Mục con

Đoạn văn thường, cứ gõ tự nhiên.

**in đậm**   _in nghiêng_   `chữ kiểu code`

- gạch đầu dòng
- mục thứ hai

1. danh sách số
2. mục thứ hai

> trích dẫn nổi bật (khung cam giữa bài)

```sql
SELECT * FROM du_lieu;      ← khối code (thay sql bằng ngôn ngữ khác nếu muốn)
```

[Link chữ bấm được](https://example.com)

![Mô tả ảnh](/images/anh.jpg)   ← ảnh thật (bỏ file vào public/images/)
![Mô tả ảnh](placeholder)        ← ô gạch chờ ảnh, chèn sau
```

Đó là tất cả những gì cần biết! Ngoài ra còn hỗ trợ bảng (`| cột 1 | cột 2 |`) và đường kẻ ngang (`---`).

## Chèn ảnh

1. Bỏ file ảnh vào `public/images/` (nén ảnh tại squoosh.app cho nhẹ — web static không tự nén)
2. Trong bài viết: `![Mô tả](/images/ten-file.jpg)`
3. Ảnh bìa bài: sửa dòng `image:` ở đầu file

## Mẹo nhỏ

- Mỗi bài 1 file — muốn xóa/sửa bài nào chỉ việc tìm file đó
- File bắt đầu bằng `_` sẽ bị bỏ qua → dùng làm bản nháp: `_nhap-bai-moi.md`
- Viết xong chưa muốn đăng? Cứ để dành, khi nào chạy deploy.bat thì toàn bộ file .md có tên không bắt đầu bằng `_` sẽ lên web
- Sai cú pháp? Không sao — Markdown rất "dễ tính", cùng lắm là hiển thị hơi khác ý, không làm sập web
