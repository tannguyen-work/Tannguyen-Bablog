// ============================================================
// DANH SÁCH BÀI VIẾT — thêm bài mới vào đầu mảng `posts`
// Mỗi bài: slug (đường dẫn), number (số thứ tự hiển thị),
// title, excerpt, date, readingTime, tags, featured, image, content
//
// content là mảng các "block":
//   { t: "h2" | "h3", text }        → tiêu đề mục (h2 hiện trong mục lục)
//   { t: "p", text }                → đoạn văn (hỗ trợ **in đậm**)
//   { t: "ul", items: [...] }       → danh sách gạch đầu dòng
//   { t: "code", text }             → khối code
//   { t: "quote", text }            → trích dẫn nổi bật
//   { t: "img", label }             → CHỖ CHÈN ẢNH (thay label mô tả ảnh)
//
// Khi có ảnh thật: đổi `image: null` thành `image: "/images/ten-anh.jpg"`
// (thả file ảnh vào thư mục public/images/)
// ============================================================

export type Block =
  | { t: "h2" | "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "code"; text: string }
  | { t: "quote"; text: string }
  | { t: "img"; label: string };

export interface Post {
  slug: string;
  number: number;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  readingTime: number; // phút
  tags: string[];
  featured: boolean;
  image: string | null; // "/images/xxx.jpg" hoặc null
  content: Block[];
}

export const posts: Post[] = [
  {
    slug: "lo-trinh-30-ngay-tro-thanh-business-analyst",
    number: 5,
    title: "Lộ trình 30 ngày trở thành Business Analyst cho người mới bắt đầu",
    excerpt:
      "Không cần nền tảng IT hoàn hảo — chỉ cần 30 ngày học có chiến lược: tuần 1 nền tảng, tuần 2 tài liệu & công cụ, tuần 3 SQL & dữ liệu, tuần 4 dự án thực tế.",
    date: "2026-09-10",
    readingTime: 9,
    tags: ["career", "roadmap"],
    featured: true,
    image: null,
    content: [
      { t: "p", text: "Nhiều người nghĩ làm BA phải giỏi code. Sự thật: BA cần giỏi **đặt câu hỏi** và **tài liệu hóa** trước đã. Đây là lộ trình 30 ngày tôi tự thiết kế cho bản thân." },
      { t: "h2", text: "Tuần 1 — Nền tảng tư duy BA" },
      { t: "ul", items: ["Đọc BABOK Guide (chỉ cần chương 1–3)", "Hiểu BA đứng ở đâu giữa business và dev team", "Phân biệt Business Requirement, Stakeholder Requirement, Solution Requirement"] },
      { t: "h2", text: "Tuần 2 — Tài liệu & kỹ thuật elicitation" },
      { t: "ul", items: ["Viết BRD đầu tiên theo template", "Học 5 kỹ thuật đặt câu hỏi: 5 Whys, open/closed, probing...", "Vẽ use case diagram và user flow đơn giản"] },
      { t: "img", label: "Ảnh: sơ đồ lộ trình 30 ngày (tự vẽ hoặc screenshot)" },
      { t: "h2", text: "Tuần 3 — SQL & phân tích dữ liệu" },
      { t: "code", text: "SELECT department, AVG(response_time) AS avg_rt\nFROM tickets\nWHERE created_at >= '2026-01-01'\nGROUP BY department\nORDER BY avg_rt DESC;" },
      { t: "p", text: "BA không cần viết query tối ưu như DBA, nhưng phải **đọc được dữ liệu** để đặt câu hỏi đúng cho business." },
      { t: "h2", text: "Tuần 4 — Dự án thực tế & portfolio" },
      { t: "ul", items: ["Chọn 1 vấn đề quanh bạn (quán cafe, CLB, công ty) và phân tích nó", "Viết 5–10 user stories theo chuẩn INVEST", "Đóng gói thành case study đăng lên LinkedIn/blog này"] },
      { t: "quote", text: "TRY. FAIL. LEARN. GROW. REPEAT. — 30 ngày chỉ là vòng lặp đầu tiên." },
    ],
  },
  {
    slug: "user-story-cong-thuc-invest-va-nhung-sai-lam",
    number: 4,
    title: "User Story: công thức INVEST và 7 sai lầm tôi từng gặp",
    excerpt:
      "\"Là một user, tôi muốn hệ thống hoạt động tốt\" — đó không phải user story. Phân tích từng chữ trong INVEST kèm ví dụ thật từ dự án của tôi.",
    date: "2026-09-06",
    readingTime: 7,
    tags: ["agile", "user-story"],
    featured: true,
    image: null,
    content: [
      { t: "p", text: "User story là đơn vị yêu cầu nhỏ nhất trong Agile. Công thức kinh điển: **As a [role], I want [action], so that [value]**. Nhưng viết đúng công thức chưa đủ — phải đạt INVEST." },
      { t: "h2", text: "INVEST là gì?" },
      { t: "ul", items: ["**I**ndependent — story độc lập, không chờ story khác", "**N**egotiable — còn thương lượng được, không phải hợp đồng", "**V**aluable — có giá trị với người dùng thật", "**E**stimable — team ước lượng được", "**S**mall — đủ nhỏ cho 1 sprint", "**T**estable — viết được acceptance criteria"] },
      { t: "h2", text: "7 sai lầm phổ biến" },
      { t: "h3", text: "1. Story kỹ thuật đội lốt story người dùng" },
      { t: "p", text: "\"As a developer, I want to refactor the database...\" — nếu vai trò là developer, đó là technical task, không phải user story." },
      { t: "code", text: "// ❌ Sai\nAs a user, I want the system to be fast.\n\n// ✅ Đúng\nAs a customer,\nI want to see order status within 2 seconds,\nso that I don't have to call the hotline." },
      { t: "img", label: "Ảnh: ví dụ board user story (Jira/Trello của bạn)" },
      { t: "h2", text: "Acceptance Criteria — phần bị lãng quên" },
      { t: "p", text: "Story không có AC là story chưa xong. Dùng format **Given–When–Then** để cả dev và QA cùng hiểu." },
      { t: "quote", text: "User story là lời mời hội thoại, không phải tài liệu đóng băng." },
    ],
  },
  {
    slug: "sql-cho-business-analyst-10-truy-van-moi-ngay",
    number: 3,
    title: "SQL cho Business Analyst: 10 truy vấn bạn sẽ dùng mỗi ngày",
    excerpt:
      "JOIN, GROUP BY, window function, CTE — đủ để bạn tự trả lời 80% câu hỏi của sếp mà không cần chờ data team.",
    date: "2026-09-02",
    readingTime: 10,
    tags: ["sql", "data"],
    featured: true,
    image: null,
    content: [
      { t: "p", text: "80% công việc phân tích của BA xoay quanh vài pattern SQL quen thuộc. Đây là 10 truy ván tôi dùng nhiều nhất, xếp theo tần suất." },
      { t: "h2", text: "1–3. Nhóm truy vấn cơ bản" },
      { t: "code", text: "-- Doanh thu theo tháng\nSELECT DATE_TRUNC('month', order_date) AS month,\n       SUM(amount) AS revenue\nFROM orders\nGROUP BY 1\nORDER BY 1;" },
      { t: "h2", text: "4–7. JOIN và lọc nâng cao" },
      { t: "p", text: "Hiểu **INNER vs LEFT JOIN** giải quyết phần lớn câu hỏi kiểu \"khách hàng nào chưa từng đặt hàng?\"." },
      { t: "code", text: "-- Khách chưa đặt hàng\nSELECT c.name\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nWHERE o.id IS NULL;" },
      { t: "img", label: "Ảnh: kết quả query trên Power BI / DBeaver" },
      { t: "h2", text: "8–10. Window function & CTE" },
      { t: "p", text: "ROW_NUMBER(), RANK(), LAG() giúp trả lời câu hỏi so sánh theo thời gian mà không cần export ra Excel." },
      { t: "quote", text: "SQL không làm bạn thành data engineer — nó làm bạn thành BA không phải đợi ai cả." },
    ],
  },
  {
    slug: "brd-srs-frd-phan-biet-ba-tai-lieu-yeu-cau",
    number: 2,
    title: "BRD, SRS, FRD — phân biệt 3 tài liệu yêu cầu kinh điển",
    excerpt:
      "Ba cái tên hay bị dùng lẫn lộn. Bài này bóc tách: ai viết, viết cho ai, viết gì, và khi nào thì công ty bạn thật sự cần nó.",
    date: "2026-08-28",
    readingTime: 8,
    tags: ["documentation", "requirements"],
    featured: false,
    image: null,
    content: [
      { t: "p", text: "Trong dự án truyền thống (waterfall), yêu cầu đi qua 3 tầng tài liệu trước khi đến tay dev. Hiểu đúng 3 tầng này giúp bạn không bao giờ viết nhầm chỗ." },
      { t: "h2", text: "BRD — Business Requirements Document" },
      { t: "ul", items: ["**Ai viết:** BA làm việc với business/sponsor", "**Trả lời:** WHY — tại sao cần dự án này, mục tiêu kinh doanh là gì", "**Độc giả:** ban lãnh đạo, stakeholder phi kỹ thuật"] },
      { t: "h2", text: "SRS — Software Requirements Specification" },
      { t: "ul", items: ["**Ai viết:** BA + Solution Architect", "**Trả lời:** WHAT — hệ thống phải làm gì (functional + non-functional)", "**Độc giả:** dev team, QA"] },
      { t: "h2", text: "FRD — Functional Requirements Document" },
      { t: "ul", items: ["**Ai viết:** BA", "**Trả lời:** HOW (về mặt chức năng) — luồng xử lý chi tiết, màn hình, rule nghiệp vụ", "**Độc giả:** dev, QA, UX"] },
      { t: "img", label: "Ảnh: bảng so sánh BRD/SRS/FRD (tự thiết kế)" },
      { t: "h2", text: "Agile thì sao?" },
      { t: "p", text: "Agile gộp cả ba vào backlog: epic ≈ BRD, user story ≈ SRS, acceptance criteria ≈ FRD. Tài liệu nhẹ hơn nhưng **tư duy 3 tầng vẫn còn nguyên**." },
      { t: "quote", text: "Tài liệu là phương tiện, không phải mục đích. Viết đủ để giảm hiểu lầm, không viết để đẹp hồ sơ." },
    ],
  },
  {
    slug: "stakeholder-kho-tinh-nghe-thuat-elicitation",
    number: 1,
    title: "Stakeholder \"khó tính\": nghệ thuật đặt câu hỏi trong buổi elicitation",
    excerpt:
      "Họ nói \"tôi biết tôi cần gì\" rồi mô tả một giải pháp thay vì vấn đề. Đây là cách tôi lái buổi phỏng vấn về đúng gốc rễ yêu cầu.",
    date: "2026-08-20",
    readingTime: 6,
    tags: ["soft-skills", "requirements"],
    featured: false,
    image: null,
    content: [
      { t: "p", text: "Buổi elicitation thất bại không phải vì stakeholder khó tính — mà vì BA hỏi sai loại câu hỏi." },
      { t: "h2", text: "Quy tắc 1: Hỏi vấn đề trước, giải pháp sau" },
      { t: "p", text: "Khi ai đó nói \"tôi cần một nút export Excel\", đừng ghi nhận ngay. Hãy hỏi: **\"Sau khi export xong, anh/chị làm gì với file đó?\"** — câu trả lời thường lộ ra yêu cầu thật (ví dụ: báo cáo tự động gửi mỗi sáng)." },
      { t: "h2", text: "Quy tắc 2: Kỹ thuật 5 Whys có kiểm soát" },
      { t: "ul", items: ["Hỏi \"tại sao\" tối đa 3 lần liên tiếp — hơn nữa thành tra khảo", "Xen kẽ câu hỏi mở và câu hỏi xác nhận", "Kết thúc mỗi chuỗi bằng một tóm tắt: \"Vậy vấn đề gốc là... đúng không ạ?\""] },
      { t: "h2", text: "Quy tắc 3: Cho họ thấy, đừng bắt họ mô tả" },
      { t: "p", text: "Wireframe nháp, flow vẽ tay, thậm chí... bảng Excel giả — stakeholder phản ứng với thứ nhìn thấy được tốt hơn nhiều so với câu hỏi trừu tượng." },
      { t: "img", label: "Ảnh: mockup quy trình elicitation hoặc sơ đồ 5 Whys" },
      { t: "quote", text: "Yêu cầu thật nằm sau yêu cầu được nói ra. Nhiệm vụ của BA là đào tới đó." },
    ],
  },
];

// Helpers
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function sortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function allTags() {
  return Array.from(new Set(posts.flatMap((p) => p.tags)));
}
