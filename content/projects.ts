// ============================================================
// DANH SÁCH PROJECT — sửa/thêm dự án của bạn ở đây
// Khi có ảnh: đổi image: null thành image: "/images/ten-anh.jpg"
// ============================================================

export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  image: string | null;
  link: string | null; // link demo/github, null nếu chưa có
  status: "done" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    slug: "sales-dashboard-powerbi",
    title: "Sales Performance Dashboard",
    description:
      "Dashboard Power BI theo dõi doanh thu theo khu vực & kênh bán, cảnh báo bất thường bằng ngưỡng động. Xây từ dữ liệu Excel thô của một cửa hàng bán lẻ.",
    year: "2026",
    tags: ["power-bi", "dashboard", "data-analysis"],
    image: null,
    link: null,
    status: "done",
  },
  {
    slug: "brd-template",
    title: "BRD Template chuẩn hóa",
    description:
      "Bộ template Business Requirements Document rút gọn còn 8 mục, kèm checklist elicitation và thư viện acceptance criteria mẫu. Đang dùng cho dự án cá nhân.",
    year: "2026",
    tags: ["template", "documentation"],
    image: null,
    link: null,
    status: "in-progress",
  },
  {
    slug: "requirement-tracker",
    title: "Requirement Tracker nội bộ",
    description:
      "Ứng dụng nhỏ (Notion + script) theo dõi vòng đời requirement: elicited → analyzed → approved → developed → UAT. Có báo cáo traceability tự động mỗi tuần.",
    year: "2026",
    tags: ["tooling", "automation", "notion"],
    image: null,
    link: null,
    status: "in-progress",
  },
  {
    slug: "process-mapping-cafe",
    title: "Process Mapping: quy trình quán cafe",
    description:
      "Case study BPMN: mô hình hóa quy trình order–serve–payment của một quán cafe, tìm ra 3 điểm nghẽn và đề xuất cải tiến giảm 20% thời gian chờ.",
    year: "2025",
    tags: ["bpmn", "case-study", "process"],
    image: null,
    link: null,
    status: "done",
  },
];
