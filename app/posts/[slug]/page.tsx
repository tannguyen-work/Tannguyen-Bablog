import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost } from "@/content/posts";
import Content from "@/components/Content";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import NewsletterForm from "@/components/NewsletterForm";
import { site } from "@/content/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function fmtDate(d: string) {
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const idx = sorted.findIndex((p) => p.slug === slug);
  const newer = idx > 0 ? sorted[idx - 1] : null;
  const older = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  const toc = post.content.filter((b) => b.t === "h2");

  return (
    <div className="container-wide page post-page">
      <div className="post-breadcrumb">
        <Link href="/">home</Link> <span>/</span> <Link href="/posts">posts</Link>{" "}
        <span>/</span> <span className="post-breadcrumb-current">#{String(post.number).padStart(3, "0")}</span>
      </div>

      <header className="post-header">
        <div className="post-meta-top">
          <span className="post-number">#{String(post.number).padStart(3, "0")}</span>
          <span className="post-dot">·</span>
          <time dateTime={post.date}>{fmtDate(post.date)}</time>
          <span className="post-dot">·</span>
          <span>{post.readingTime} phút đọc</span>
        </div>
        <h1 className="post-header-title">{post.title}</h1>
        <div className="post-tags">
          {post.tags.map((t) => (
            <Link key={t} href={`/posts?tag=${t}`} className="tag">
              {t}
            </Link>
          ))}
        </div>
      </header>

      <figure className="post-cover">
        <ImagePlaceholder
          src={post.image}
          label={`Ảnh bìa bài viết: ${post.title.slice(0, 50)}...`}
        />
      </figure>

      <div className="post-layout">
        <article className="post-main">
          <p className="post-excerpt">{post.excerpt}</p>
          <Content blocks={post.content} />

          <div className="post-end">
            <span className="post-end-mark">■</span>
            <span>
              // Hết bài — {site.tagline}
            </span>
          </div>
        </article>

        <aside className="post-sidebar">
          {toc.length > 0 && (
            <nav className="toc" aria-label="Mục lục">
              <div className="toc-title">// Trong bài này</div>
              <ul>
                {toc.map((b, i) =>
                  b.t === "h2" ? (
                    <li key={i}>
                      <a href={`#${slugify(b.text)}`}>{b.text}</a>
                    </li>
                  ) : null
                )}
              </ul>
            </nav>
          )}

          <div className="sidebar-newsletter">
            <div className="sidebar-newsletter-title">Nhận bài mới ✉</div>
            <NewsletterForm />
          </div>
        </aside>
      </div>

      <nav className="post-nav">
        {newer ? (
          <Link href={`/posts/${newer.slug}`} className="post-nav-link">
            <span className="post-nav-dir">← Bài mới hơn</span>
            <span className="post-nav-title">{newer.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {older ? (
          <Link href={`/posts/${older.slug}`} className="post-nav-link right">
            <span className="post-nav-dir">Bài cũ hơn →</span>
            <span className="post-nav-title">{older.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
