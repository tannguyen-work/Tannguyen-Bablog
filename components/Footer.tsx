import Link from "next/link";
import { site, topics, socials } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-wide footer-grid">
        <div className="footer-col footer-col-brand">
          <div className="footer-logo">
            <span className="logo-slashes">//</span>BA.LOG
          </div>
          <p className="footer-brand-desc">{site.description}</p>
          <p className="footer-tagline">// {site.tagline}</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">// Topics</div>
          <div className="footer-topics">
            {topics.map((t) => (
              <Link key={t.slug} href={`/posts?tag=${t.slug}`} className="footer-topic">
                <span className="footer-topic-name">{t.name}</span>
                <span className="footer-topic-sub">{t.sub}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">// Explore</div>
          <Link href="/" className="footer-link">Trang chủ</Link>
          <Link href="/posts" className="footer-link">Tất cả bài viết</Link>
          <Link href="/projects" className="footer-link">Projects</Link>
          <Link href="/resources" className="footer-link">Resource Hub</Link>
          <Link href="/about" className="footer-link">Giới thiệu</Link>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">// Connect</div>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.name} <span className="footer-ext">↗</span>
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="footer-link">
            Email <span className="footer-ext">↗</span>
          </a>
        </div>
      </div>

      <div className="container-wide footer-bottom">
        <span className="footer-bottom-text">
          © {year} {site.author} — {site.name}
        </span>
        <span className="footer-legal">
          <span className="footer-legal-item">Built with Next.js</span>
          <span className="footer-legal-sep">·</span>
          <span className="footer-legal-item">{site.tagline}</span>
        </span>
      </div>
    </footer>
  );
}
