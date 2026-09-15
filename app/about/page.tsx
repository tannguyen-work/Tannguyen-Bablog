import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/content/site";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About — Giới thiệu",
  description: `Giới thiệu về ${site.author} — ${site.authorRole} và blog ${site.name}.`,
};

export default function AboutPage() {
  return (
    <div className="container-wide page">
      <div className="page-head">
        <div className="page-head-badge">~/about</div>
        <h1 className="page-title">ABOUT ME</h1>
        <p className="page-desc">// {site.tagline}</p>
      </div>

      <div className="about-layout">
        <div className="about-photo">
          <ImagePlaceholder
            label="Ảnh chân dung của bạn (gợi ý: 4/3 hoặc 1/1)"
            ratio="4/3"
          />
        </div>

        <div className="about-body">
          <h2 className="about-h2">
            <span className="h2-hash">##</span> Xin chào, tôi là {site.author}
          </h2>
          <p>
            Tôi là <strong>{site.authorRole}</strong>. Blog này là nơi tôi ghi
            chép công khai hành trình làm nghề: những yêu cầu đã phân tích,
            những tài liệu đã viết, những lần hỏng việc và những gì học được
            sau đó.
          </p>
          <p>
            Tôi tin vào việc <em>learn in public</em> — viết ra không phải vì đã
            giỏi, mà để hiểu sâu hơn và để người đi sau đỡ mất thời gian hơn
            tôi ngày trước.
          </p>

          <h2 className="about-h2">
            <span className="h2-hash">##</span> Tôi đang tập trung vào
          </h2>
          <ul className="about-list">
            <li>📋 Elicitation & tài liệu hóa yêu cầu (BRD, user stories)</li>
            <li>🗃️ SQL & phân tích dữ liệu cho quyết định kinh doanh</li>
            <li>🔄 Process modeling: BPMN, flow as-is/to-be</li>
            <li>📊 Trực quan hóa: Power BI, dashboard vận hành</li>
            <li>🤖 Ứng dụng AI vào công việc BA hằng ngày</li>
          </ul>

          <h2 className="about-h2">
            <span className="h2-hash">##</span> Nguyên tắc làm việc
          </h2>
          <blockquote className="pull-quote">
            {site.tagline.split(". ").join(" → ").replace(/ \.$/, ".")}
          </blockquote>

          <div className="about-actions">
            <Link href="/posts" className="btn btn-accent">
              Đọc bài viết →
            </Link>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">
              ✉ Liên hệ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
