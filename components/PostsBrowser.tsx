"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Post } from "@/content/posts";
import { ListRow } from "./PostCards";

/**
 * Danh sách bài viết có Ô TÌM KIẾM + LỌC THEO TAG (client-side).
 * Đọc `?tag=` từ URL bằng useSearchParams — tương thích static export.
 */
export default function PostsBrowser({
  posts,
  tags,
}: {
  posts: Post[];
  tags: string[];
}) {
  const searchParams = useSearchParams();
  const urlTag = searchParams.get("tag") ?? "";

  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>(tags.includes(urlTag) ? urlTag : "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (tag && !p.tags.includes(tag)) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q))
      );
    });
  }, [posts, query, tag]);

  return (
    <div>
      <div className="posts-toolbar">
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input
            type="search"
            placeholder="Tìm bài viết... (tiêu đề, tag)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Tìm kiếm bài viết"
          />
        </div>
        <div className="filter-tags">
          <button
            className={tag === "" ? "filter-tag active" : "filter-tag"}
            onClick={() => setTag("")}
          >
            all
          </button>
          {tags.map((t) => (
            <button
              key={t}
              className={tag === t ? "filter-tag active" : "filter-tag"}
              onClick={() => setTag(tag === t ? "" : t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="posts-count">
        // {filtered.length} bài viết{tag ? ` với tag "${tag}"` : ""}
      </p>

      <div className="hp-list">
        {filtered.map((p) => (
          <ListRow key={p.slug} post={p} />
        ))}
        {filtered.length === 0 && (
          <p className="posts-empty">Không tìm thấy bài nào phù hợp. Thử từ khóa khác nhé.</p>
        )}
      </div>
    </div>
  );
}
