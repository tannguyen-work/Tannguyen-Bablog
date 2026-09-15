# Thư mục ảnh của bạn

Thả tất cả ảnh vào thư mục này (public/images/).

## Cách chèn ảnh vào web

1. Copy file ảnh vào đây, ví dụ: `avatar.jpg`, `bia-bai-sql.png`
2. Trong code, tìm chỗ đang dùng `<ImagePlaceholder ...>` và thêm prop `src`:

   ```tsx
   <ImagePlaceholder src="/images/avatar.jpg" label="Ảnh chân dung" />
   ```

   → Khi có `src`, component sẽ tự hiển thị ảnh thật thay vì ô gạch ngang.

## Với ảnh bìa bài viết / dự án

Chỉ cần sửa trong `content/posts.ts` hoặc `content/projects.ts`:

```ts
image: "/images/ten-anh.jpg",   // thay cho image: null
```

## Vị trí các ô chờ ảnh hiện có

- Trang chủ: hero (bên phải, dưới card terminal)
- Card bài viết featured: ảnh bìa
- Trong nội dung bài viết: các block `{ t: "img", label: ... }`
- Trang Projects: ảnh từng dự án
- Trang About: ảnh chân dung

Gợi ý kích thước: ảnh bìa 1200×675 (16/9), avatar 800×800 (1/1), dung lượng < 500KB (nén qua squoosh.app).
