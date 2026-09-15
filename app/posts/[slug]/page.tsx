import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPost, slugifyVi } from "@/lib/posts";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import NewsletterForm from "@/components/NewsletterForm";
import { site } from "@/content/site";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/posts/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      modifiedTime: post.date,
      tags: post.tags,
      ...(post.image ? { images: [{ url: post.image, width: 1200, height: 630, alt: post.title }] } : {}),
    },
    twitter: {
      card: post.image ? "summary_large_image" : "summary",
      title: post.title,
      description: post.excerpt,
    },
  };
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

  const sorted = getAllPosts(); // đã sắp xếp mới → cũ
  const idx = sorted.findIndex((p) => p.slug === slug);
  const newer = idx > 0 ? sorted[idx - 1] : null;
  const older = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  // Structured data cho Google (schema.org BlogPosting)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "vi",
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: site.author },
    publisher: { "@type": "Person", name: site.author },
    mainEntityOfPage: `${site.siteUrl}/posts/${post.slug}`,
    ...(post.image ? { image: `${site.siteUrl}${post.image}` } : {}),
  };

  return (
    <div className="container-wide page post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="post-breadcrumb">
        <Link href="/">home</Link> <span>/</span> <Link href="/posts">posts</Link>{" "}
        <span>/</span>{" "}
        <span className="post-breadcrumb-current">
          #{String(post.number).padStart(3, "0")}
        </span>
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

          {/* Nội dung markdown đã render sẵn thành HTML khi build */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="post-end">
            <span className="post-end-mark">■</span>
            <span>// Hết bài — {site.tagline}</span>
          </div>
        </article>

        <aside className="post-sidebar">
          {post.toc.length > 0 && (
            <nav className="toc" aria-label="Mục lục">
              <div className="toc-title">// Trong bài này</div>
              <ul>
                {post.toc.map((heading, i) => (
                  <li key={i}>
                    <a href={`#${slugifyVi(heading)}`}>{heading}</a>
                  </li>
                ))}
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
