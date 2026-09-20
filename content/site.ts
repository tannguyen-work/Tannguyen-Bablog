// ============================================================
// CẤU HÌNH CHUNG CỦA WEBSITE — sửa mọi thứ ở file này
// ============================================================

export const site = {
  name: "BA.devlog",
  logo: "//BA.LOG",
  tagline: "TRY. FAIL. LEARN. GROW. REPEAT.",
  description:
    "Blog về Business Analysis — ghi chép hành trình làm nghề BA: yêu cầu, dữ liệu, quy trình và những bài học xương máu.",
  author: "Tên của bạn",
  authorRole: "Business Analyst",
  email: "your-email@example.com",
  // URL công khai của web — dùng cho SEO (sitemap, canonical, Open Graph).
  // Sau này gắn tên miền riêng thì sửa lại thành tên miền đó.
  siteUrl: "https://tannguyen-bablog.pages.dev",
};

// Menu điều hướng (5 phần theo yêu cầu)
export const nav = [
  { href: "/", label: "home" },
  { href: "/posts", label: "posts" },
  { href: "/projects", label: "projects" },
  { href: "/resources", label: "resource hub" },
  { href: "/about", label: "about" },
];

// Dải chữ chạy (ticker) ở trang chủ
export const tickerItems = [
  "TRY",
  "FAIL",
  "LEARN",
  "GROW",
  "REPEAT",
  "Business Analysis",
  "Requirements",
  "SQL",
  "Agile",
  "Scrum",
  "User Story",
  "BRD",
  "Stakeholder",
  "BABOK",
  "Power BI",
  "Data Analysis",
  "Process Modeling",
  "BPMN",
];

// 6 nhóm chủ đề hiển thị ở footer (giống mục topics của trang mẫu)
// LƯU Ý: `slug` PHẢI trùng với một tag có thật trong frontmatter bài viết
// (tags: [...]) — nếu không, bấm vào sẽ ra 0 kết quả.
export const topics = [
  { slug: "requirements", name: "Requirements", sub: "Elicitation & Hỏi đáp" },
  { slug: "documentation", name: "Documentation", sub: "BRD, SRS & Templates" },
  { slug: "data", name: "Data", sub: "SQL & BI Tools" },
  { slug: "agile", name: "Agile", sub: "Scrum & User Story" },
  { slug: "career", name: "Career", sub: "Roadmap & Growth" },
  { slug: "soft-skills", name: "Soft Skills", sub: "Stakeholder & Giao tiếp" },
];

// Mạng xã hội — thay link "#" bằng profile thật của bạn
export const socials = [
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "X / Twitter", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "TikTok", href: "#" },
];
