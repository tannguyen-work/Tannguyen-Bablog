import type { Metadata } from "next";
import { resourceGroups } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resource Hub — Tài nguyên cho BA",
  description:
    "Sách, công cụ, template và khóa học hữu ích cho Business Analyst — được tuyển chọn.",
};

export default function ResourcesPage() {
  return (
    <div className="container-wide page">
      <div className="page-head">
        <div className="page-head-badge">~/resources</div>
        <h1 className="page-title">RESOURCE HUB</h1>
        <p className="page-desc">
          // Kho tài nguyên tôi thực sự dùng: sách, công cụ, template, khóa học.
        </p>
      </div>

      {resourceGroups.map((group) => (
        <section key={group.slug} className="res-group">
          <div className="hp-section-head">
            <h2 className="section-title">
              {group.icon} {group.title}
            </h2>
            <span className="res-count">{group.links.length} mục</span>
          </div>

          <div className="res-grid">
            {group.links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="res-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="res-card-head">
                  <span className="res-card-title">{link.title}</span>
                  {link.badge && <span className="res-badge">{link.badge}</span>}
                </div>
                <p className="res-card-desc">{link.description}</p>
                <span className="res-card-go">mở ↗</span>
              </a>
            ))}
          </div>
        </section>
      ))}

      <p className="projects-note">
        💡 Thêm tài nguyên của bạn tại <code>content/resources.ts</code> — các
        link <code>href=&quot;#&quot;</code> là chỗ để bạn thay bằng link thật.
      </p>
    </div>
  );
}
