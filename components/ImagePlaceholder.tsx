/**
 * Ô CHỖ ĐỂ CHÈN ẢNH.
 *
 * CÁCH DÙNG:
 *  1. Chưa có ảnh  → giữ nguyên: <ImagePlaceholder label="Mô tả ảnh" />
 *  2. Đã có ảnh    → thả file vào thư mục public/images/ rồi thêm prop src:
 *                    <ImagePlaceholder src="/images/anh-cua-ban.jpg" label="..." />
 *
 * Prop `ratio` điều chỉnh khung ảnh: "16/9" (mặc định), "4/3", "1/1", "3/2"
 */
export default function ImagePlaceholder({
  src,
  label,
  ratio = "16/9",
}: {
  src?: string | null;
  label: string;
  ratio?: string;
}) {
  if (src) {
    return (
      <div className="img-slot has-image" style={{ aspectRatio: ratio }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} />
      </div>
    );
  }

  return (
    <div className="img-slot" style={{ aspectRatio: ratio }}>
      <div className="img-slot-inner">
        <span className="img-slot-icon">🖼</span>
        <span className="img-slot-label">{label}</span>
        <span className="img-slot-hint">
          Chèn ảnh của bạn tại đây — thêm prop src=&quot;/images/...&quot;
        </span>
      </div>
    </div>
  );
}
