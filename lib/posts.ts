import fs from "fs";
import path from "path";
import { marked } from "marked";

// ============================================================
// BỘ ĐỌC BÀI VIẾT MARKDOWN
// Mỗi bài viết = 1 file .md trong content/articles/
// File bắt đầu bằng "_" (ví dụ _mau-bai-viet.md) sẽ bị bỏ qua
// ============================================================

export interface Post {
  slug: string;
  number: number;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
  featured: boolean;
  image: string | null;
  toc: string[];
  html: string;
}

const DIR = path.join(process.cwd(), "content", "articles");

/** Slugify tiếng Việt: "Tuần 1 — Nền tảng" → "tuan-1-nen-tang" */
export function slugifyVi(s: string): string {
  return s
    .toLowerCase()
    .replace(/[đĐ]/g, "d")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Đọc phần khai báo (frontmatter) giữa 2 dòng --- đầu file */
function parseFrontmatter(raw: string): { meta: Record<string, unknown>; body: string } {
  const m = raw.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };

  const meta: Record<string, unknown> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx < 1 || line.trimStart().startsWith("#")) continue;
    const key = line.slice(0, idx).trim();
    const raw = line.slice(idx + 1).trim();
    let val: unknown;

    if (raw.startsWith("[") && raw.endsWith("]")) {
      // dạng mảng 1 dòng: tags: [sql, career]
      val = raw
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      const s = raw.replace(/^["']|["']$/g, "");
      if (s === "true") val = true;
      else if (s === "false") val = false;
      else if (/^\d+$/.test(s)) val = parseInt(s, 10);
      else val = s;
    }
    meta[key] = val;
  }
  return { meta, body: m[2] };
}

/** Markdown → HTML, kèm id cho h2/h3 (mục lục) và ô chờ ảnh */
function renderMarkdown(body: string): string {
  let html = marked.parse(body, { async: false }) as string;

  // Gắn id vào h2/h3 để mục lục (TOC) nhảy tới được
  html = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_all, lvl: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "");
    return `<h${lvl} id="${slugifyVi(text)}">${inner}</h${lvl}>`;
  });

  // Ảnh: ![mô tả](placeholder) hoặc src chưa hợp lệ → hiện ô gạch chờ ảnh
  html = html.replace(/<img[^>]*>/g, (tag) => {
    const src = tag.match(/src="([^"]*)"/)?.[1] ?? "";
    const alt = tag.match(/alt="([^"]*)"/)?.[1] ?? "Ảnh bài viết";
    if (src === "placeholder" || (!src.startsWith("/") && !src.startsWith("http"))) {
      return `<span class="img-slot md-img-slot"><span class="img-slot-inner"><span class="img-slot-icon">🖼</span><span class="img-slot-label">${alt}</span><span class="img-slot-hint">Chèn ảnh: sửa thành ![${alt}](/images/ten-anh.jpg)</span></span></span>`;
    }
    return tag;
  });

  return html;
}

/** Lấy danh sách tiêu đề ## để dựng mục lục */
function tocFrom(body: string): string[] {
  return [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
}

/** Đọc toàn bộ bài viết, trả về sắp xếp MỚI NHẤT trước */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(DIR)) return [];

  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));

  const parsed = files.map((f) => {
    const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(DIR, f), "utf8"));
    return { meta, body, file: f };
  });

  // Sắp xếp CŨ → MỚI để đánh số thứ tự (bài cũ nhất = #1)
  parsed.sort((a, b) => String(a.meta.date ?? "").localeCompare(String(b.meta.date ?? "")));

  const posts: Post[] = parsed.map((r, i) => {
    const words = r.body.trim().split(/\s+/).length;
    return {
      slug: (r.meta.slug as string) || r.file.replace(/\.md$/, ""),
      number: i + 1,
      title: (r.meta.title as string) || r.file.replace(/\.md$/, ""),
      excerpt: (r.meta.excerpt as string) || "",
      date: String(r.meta.date ?? ""),
      readingTime: (r.meta.readingTime as number) || Math.max(1, Math.round(words / 200)),
      tags: Array.isArray(r.meta.tags)
        ? (r.meta.tags as string[])
        : r.meta.tags
          ? [String(r.meta.tags)]
          : [],
      featured: !!r.meta.featured,
      image: (r.meta.image as string) || null,
      toc: tocFrom(r.body),
      html: renderMarkdown(r.body),
    };
  });

  // Trả về MỚI → CŨ
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function allTags(): string[] {
  return Array.from(new Set(getAllPosts().flatMap((p) => p.tags)));
}
