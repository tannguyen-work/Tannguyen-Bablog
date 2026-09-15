// ============================================================
// RESOURCE HUB — các nhóm tài nguyên hữu ích cho BA
// Thêm/sửa link thật của bạn vào đây
// ============================================================

export interface ResourceLink {
  title: string;
  description: string;
  href: string;
  badge?: string; // ví dụ: "free", "book", "tool"
}

export interface ResourceGroup {
  slug: string;
  title: string;
  icon: string;
  links: ResourceLink[];
}

export const resourceGroups: ResourceGroup[] = [
  {
    slug: "books",
    title: "Sách nên đọc",
    icon: "📚",
    links: [
      { title: "BABOK Guide v3", description: "Bộ chuẩn kiến thức Business Analysis của IIBA", href: "https://www.iiba.org/standards-and-certifications/babok-guide/", badge: "standard" },
      { title: "User Stories Applied (Mike Cohn)", description: "Kinh thánh về user story trong Agile", href: "#", badge: "book" },
      { title: "The Mom Test (Rob Fitzpatrick)", description: "Cách phỏng vấn khách hàng mà không bị nói dối", href: "#", badge: "book" },
      { title: "Lean Analytics", description: "Đo lường đúng chỉ số cho sản phẩm", href: "#", badge: "book" },
    ],
  },
  {
    slug: "tools",
    title: "Công cụ làm nghề",
    icon: "🛠️",
    links: [
      { title: "draw.io", description: "Vẽ flowchart, BPMN, UML — miễn phí, chạy trên trình duyệt", href: "https://app.diagrams.net/", badge: "free" },
      { title: "Figma", description: "Wireframe & prototype nhanh với stakeholder", href: "https://www.figma.com/", badge: "free" },
      { title: "DBeaver", description: "SQL client đa database, miễn phí", href: "https://dbeaver.io/", badge: "free" },
      { title: "Power BI Desktop", description: "Phân tích & trực quan hóa dữ liệu từ Microsoft", href: "https://powerbi.microsoft.com/", badge: "tool" },
      { title: "Notion", description: "Kho tài liệu requirement & knowledge base cá nhân", href: "https://www.notion.so/", badge: "tool" },
    ],
  },
  {
    slug: "templates",
    title: "Template & Checklist",
    icon: "📄",
    links: [
      { title: "BRD Template (rút gọn)", description: "8 mục đủ dùng cho dự án vừa và nhỏ — template của tôi", href: "#", badge: "mine" },
      { title: "User Story + AC Checklist", description: "Checklist INVEST & Given-When-Then trước khi đưa story vào sprint", href: "#", badge: "mine" },
      { title: "Elicitation Question Bank", description: "50+ câu hỏi phỏng vấn stakeholder theo từng tình huống", href: "#", badge: "mine" },
    ],
  },
  {
    slug: "learning",
    title: "Khóa học & Cộng đồng",
    icon: "🎓",
    links: [
      { title: "IIBA — CBAP/CCBA/ECBA", description: "Các chứng chỉ BA quốc tế và lộ trình thi", href: "https://www.iiba.org/", badge: "cert" },
      { title: "SQL Practice (Stratascratch)", description: "Luyện SQL trên dataset thật cho BA/Data", href: "https://www.stratascratch.com/", badge: "free" },
      { title: "Modern Business Analysis (Udemy)", description: "Khóa nhập môn BA thực chiến, thường sale còn ~15$", href: "#", badge: "course" },
      { title: "Cộng đồng BA Việt Nam", description: "Các group Facebook/LinkedIn để hỏi đáp nghề — thêm link bạn tham gia", href: "#", badge: "community" },
    ],
  },
];
