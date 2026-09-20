import Link from "next/link";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/posts";
import Ticker from "@/components/Ticker";
import LoopCard from "@/components/LoopCard";
import NewsletterForm from "@/components/NewsletterForm";
import { FeaturedCard, ListRow } from "@/components/PostCards";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  const all = getAllPosts();
  const featured = all.filter((p) => p.featured);
  const latest = all.slice(0, 5);

  // Tagline: 4 chữ đầu màu chữ thường, chữ cuối (REPEAT.) màu accent như dấu "&"
  const tagWords = site.tagline.split(" ");
  const tagLast = tagWords.pop() ?? "";
  const tagRest = tagWords.join(" ");

  return (
    <div className="hp">
      {/* ============ HERO ============ */}
      <section className="hp-hero">
        <div className="container-wide hp-hero-inner">
          <div className="hp-hero-text">
            <div className="hp-badge">
              <span className="hp-badge-dot" aria-hidden="true" />
              a blog about
            </div>
            <h1 className="hp-title">
              BUSINESS <span className="hp-title-inv">ANALYST</span>
              <br />
              <span className="hp-title-accent">&amp;</span>
              <br />
              <span className="hp-title-inv">LEARN</span> IN PUBLIC
            </h1>
            <div className="hp-tagline">
              <span className="hp-tagline-slashes">//</span> {tagRest}{" "}
              <span className="hp-tagline-accent">{tagLast}</span>
            </div>
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

        {/* Dải chữ chạy ở ĐÁY màn hình đầu tiên — ngăn cách hero với Intro
            (đúng bố cục donniechu.com: khách lướt xuống mới thấy Intro) */}
        <Ticker />
      </section>

      {/* ============ INTRO + FEATURED ============ */}
      <div className="container-wide">
        <section className="hp-section">
          <div className="hp-section-head">
            <h2 className="section-title">
              <span className="section-title-slashes">//</span> Intro
            </h2>
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
            <h2 className="section-title">
              <span className="section-title-slashes">//</span> Featured
            </h2>
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

        {/* ============ RECENT ============ */}
        <section className="hp-section">
          <div className="hp-section-head">
            <h2 className="section-title">
              <span className="section-title-slashes">//</span> Recent
            </h2>
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
