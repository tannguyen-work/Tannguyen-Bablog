---
title: Lộ trình 30 ngày trở thành Business Analyst cho người mới bắt đầu
date: 2026-09-10
excerpt: Không cần nền tảng IT hoàn hảo — chỉ cần 30 ngày học có chiến lược: tuần 1 nền tảng, tuần 2 tài liệu & công cụ, tuần 3 SQL & dữ liệu, tuần 4 dự án thực tế.
tags: [career, roadmap]
featured: true
# image: /images/lo-trinh-30-ngay.jpg
---

Nhiều người nghĩ làm BA phải giỏi code. Sự thật: BA cần giỏi **đặt câu hỏi** và **tài liệu hóa** trước đã. Đây là lộ trình 30 ngày tôi tự thiết kế cho bản thân.

## Tuần 1 — Nền tảng tư duy BA

- Đọc BABOK Guide (chỉ cần chương 1–3)
- Hiểu BA đứng ở đâu giữa business và dev team
- Phân biệt Business Requirement, Stakeholder Requirement, Solution Requirement

## Tuần 2 — Tài liệu & kỹ thuật elicitation

- Viết BRD đầu tiên theo template
- Học 5 kỹ thuật đặt câu hỏi: 5 Whys, open/closed, probing...
- Vẽ use case diagram và user flow đơn giản

![Ảnh: sơ đồ lộ trình 30 ngày (tự vẽ hoặc screenshot)](placeholder)

## Tuần 3 — SQL & phân tích dữ liệu

```sql
SELECT department, AVG(response_time) AS avg_rt
FROM tickets
WHERE created_at >= '2026-01-01'
GROUP BY department
ORDER BY avg_rt DESC;
```

BA không cần viết query tối ưu như DBA, nhưng phải **đọc được dữ liệu** để đặt câu hỏi đúng cho business.

## Tuần 4 — Dự án thực tế & portfolio

- Chọn 1 vấn đề quanh bạn (quán cafe, CLB, công ty) và phân tích nó
- Viết 5–10 user stories theo chuẩn INVEST
- Đóng gói thành case study đăng lên LinkedIn/blog này

> TRY. FAIL. LEARN. GROW. REPEAT. — 30 ngày chỉ là vòng lặp đầu tiên.
