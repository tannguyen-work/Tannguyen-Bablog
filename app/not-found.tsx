import Link from "next/link";

/**
 * Trang 404 — phong cách terminal đồng bộ với toàn site.
 */
export default function NotFound() {
  return (
    <div className="container-wide page">
      <div className="page-head">
        <div className="page-head-badge">~/404</div>
        <h1 className="page-title">PAGE NOT FOUND</h1>
        <p className="page-desc">
          // Trang bạn tìm không tồn tại hoặc đã được chuyển đi.
        </p>
      </div>

      <div className="nf-terminal">
        <div className="nf-line">
          <span className="nf-prompt">&gt; _</span> open(current_url)
        </div>
        <div className="nf-line nf-error">Error 404: page not found</div>
        <div className="nf-line">
          <span className="nf-prompt">&gt; _</span> suggest:{" "}
          <Link href="/">trang chủ</Link> · <Link href="/posts">tất cả bài viết</Link> ·{" "}
          <Link href="/resources">resource hub</Link>
        </div>
      </div>
    </div>
  );
}
