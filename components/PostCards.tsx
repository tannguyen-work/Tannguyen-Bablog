import Link from "next/link";
import type { Post } from "@/lib/posts";
import ImagePlaceholder from "./ImagePlaceholder";

function fmtDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

/** Card bài viết nổi bật (dùng trong carousel trang chủ) */
export function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="f-card">
      <div className="f-card-thumb">
        <ImagePlaceholder
          src={post.image}
          label={`Ảnh bìa: ${post.title.slice(0, 40)}...`}
          ratio="16/9"
        />
      </div>
      <div className="f-card-body">
        <div className="f-card-num">
          <div className="f-card-tags">
            {post.tags.map((t) => (
              <span key={t} className="tag f-card-tag">
                {t}
              </span>
            ))}
          </div>
          <span className="f-card-hash">#{String(post.number).padStart(3, "0")}</span>
        </div>
        <h3 className="f-card-title">{post.title}</h3>
        <p className="f-card-excerpt">{post.excerpt}</p>
        <div className="f-card-footer">
          <span>{fmtDate(post.date)}</span>
          <span className="f-card-dot">·</span>
          <span>{post.readingTime} phút đọc</span>
        </div>
      </div>
    </Link>
  );
}

/** Một dòng bài viết trong danh sách (latest / trang posts) */
export function ListRow({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="list-row">
      <div className="list-row-num">#{String(post.number).padStart(3, "0")}</div>
      <div className="list-row-content">
        <div className="list-row-title">{post.title}</div>
        <div className="list-row-meta">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
          <span className="list-row-dot">·</span>
          <span>{fmtDate(post.date)}</span>
          <span className="list-row-dot">·</span>
          <span>{post.readingTime} phút</span>
        </div>
      </div>
      <div className="list-row-arrow">→</div>
    </Link>
  );
}
