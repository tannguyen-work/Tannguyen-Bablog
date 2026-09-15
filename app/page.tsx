import Link from "next/link";
import { site, heroCodeLines } from "@/content/site";
import { posts, sortedPosts } from "@/content/posts";
import Ticker from "@/components/Ticker";
import LoopCard from "@/components/LoopCard";
import NewsletterForm from "@/components/NewsletterForm";
import { FeaturedCard, ListRow } from "@/components/PostCards";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  const featured = posts.filter((p) => p.featured);
  const latest = sortedPosts().slice(0, 5);

  return (
    <div className="hp">
      {/* ============ HERO ============ */}
      <section className="hp-hero">
        <div className="hp-hero-code-bg" aria-hidden="true">
          {[...heroCodeLines, ...heroCodeLines].map((line, i) => (
            <div key={i} className="hero-code-line">
              {line}
            </div>
          ))}
        </div>

        <div className="container-wide hp-hero-inner">
          <div className="hp-hero-text">
            <div className="hp-badge">a blog about</div>
            <h1 className="hp-title">
              BUSINESS <span className="hp-title-accent">ANALYST</span>
              <br />&amp; LEARN IN PUBLIC
            </h1>
            <div className="hp-tagline">// {site.tagline}</div>
            <p className="hp-desc">
              Nơi tôi ghi chép hành trình làm nghề BA: phân tích yêu cầu, SQL,
              quy trình, tài liệu — và những lần thử, sai, rồi lớn lên.
            </p>
            <div className="hp-actions">
              <Link href="/posts" className="btn btn-accent">
                Đọc blog →
              </Link>
              <a href="#newsletter" className="btn btn-ghost" title="Nhận bài mới">
                ✉ Nhận bài mới
              </a>
            </div>
          </div>

          <div className="hp-hero-side">
            <LoopCard />
            <ImagePlaceholder
              label="Ảnh của bạn ở đây (avatar / ảnh chân dung / ảnh bìa blog)"
              ratio="16/9"
            />
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <Ticker />

      <div className="container-wide">
        {/* ============ INTRO + FEATURED ============ */}
        <section className="hp-section">
          <div className="hp-section-head">
            <h2 className="section-title">// Intro</h2>
          </div>
          <p className="hp-intro-text">
            Đây là nơi tôi ghi lại quá trình làm nghề <strong>Business Analyst</strong>{" "}
            từ những ngày đầu: cách lấy yêu cầu, cách viết tài liệu, cách nói
            chuyện với stakeholder, cách để dữ liệu lên tiếng. Mỗi bài là một lát
            cắt — có thứ đúng, có thứ sai rồi sửa.{" "}
            <span className="hp-intro-sign">
              — {site.author} // {site.tagline}
            </span>
          </p>
        </section>

        <section className="hp-section">
          <div className="hp-section-head">
            <h2 className="section-title">// Featured</h2>
            <Link href="/posts" className="section-more">
              Xem tất cả →
            </Link>
          </div>
          <div className="hp-featured-carousel">
            {featured.map((post) => (
              <FeaturedCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* ============ LATEST ============ */}
        <section className="hp-section">
          <div className="hp-section-head">
            <h2 className="section-title">// Latest</h2>
            <Link href="/posts" className="section-more">
              Xem tất cả →
            </Link>
          </div>
          <div className="hp-list">
            {latest.map((post) => (
              <ListRow key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* ============ NEWSLETTER ============ */}
        <section className="newsletter-section" id="newsletter">
          <div className="newsletter-card">
            <div className="newsletter-copy">
              <h2 className="newsletter-title">Nhận bài mới ✉</h2>
              <p className="newsletter-desc">
                Mỗi tuần một email: bài viết mới, tài liệu/template hữu ích cho
                BA. Không spam, hủy bất cứ lúc nào.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </div>
    </div>
  );
}
