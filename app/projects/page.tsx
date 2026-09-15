import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Projects — Dự án & Case study",
  description:
    "Các dự án phân tích, dashboard, template và case study Business Analyst.",
};

const statusLabel: Record<string, { text: string; cls: string }> = {
  done: { text: "✓ DONE", cls: "status-done" },
  "in-progress": { text: "▶ IN PROGRESS", cls: "status-wip" },
  planned: { text: "… PLANNED", cls: "status-planned" },
};

export default function ProjectsPage() {
  return (
    <div className="container-wide page">
      <div className="page-head">
        <div className="page-head-badge">~/projects</div>
        <h1 className="page-title">PROJECTS</h1>
        <p className="page-desc">
          // Những thứ tôi đã và đang xây: dashboard, template, case study phân tích quy trình.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => {
          const st = statusLabel[p.status];
          return (
            <article key={p.slug} className="project-card">
              <div className="project-thumb">
                <ImagePlaceholder
                  src={p.image}
                  label={`Ảnh dự án: ${p.title}`}
                  ratio="16/9"
                />
                <span className={`project-status ${st.cls}`}>{st.text}</span>
              </div>
              <div className="project-body">
                <div className="project-year">{p.year}</div>
                <h2 className="project-title">{p.title}</h2>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                {p.link ? (
                  <a
                    href={p.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Xem chi tiết ↗
                  </a>
                ) : (
                  <span className="project-link muted">// link coming soon</span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <p className="projects-note">
        💡 Muốn thêm dự án? Mở file <code>content/projects.ts</code>, copy một
        khối và sửa thông tin. Ảnh dự án thả vào <code>public/images/</code>.
      </p>
    </div>
  );
}
