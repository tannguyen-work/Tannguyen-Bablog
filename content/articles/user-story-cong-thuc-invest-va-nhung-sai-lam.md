---
title: "User Story: công thức INVEST và 7 sai lầm tôi từng gặp"
date: 2026-09-06
excerpt: "\"Là một user, tôi muốn hệ thống hoạt động tốt\" — đó không phải user story. Phân tích từng chữ trong INVEST kèm ví dụ thật từ dự án của tôi."
tags: [agile, user-story]
featured: true
---

User story là đơn vị yêu cầu nhỏ nhất trong Agile. Công thức kinh điển: **As a [role], I want [action], so that [value]**. Nhưng viết đúng công thức chưa đủ — phải đạt INVEST.

## INVEST là gì?

- **I**ndependent — story độc lập, không chờ story khác
- **N**egotiable — còn thương lượng được, không phải hợp đồng
- **V**aluable — có giá trị với người dùng thật
- **E**stimable — team ước lượng được
- **S**mall — đủ nhỏ cho 1 sprint
- **T**estable — viết được acceptance criteria

## 7 sai lầm phổ biến

### 1. Story kỹ thuật đội lốt story người dùng

"As a developer, I want to refactor the database..." — nếu vai trò là developer, đó là technical task, không phải user story.

```text
// ❌ Sai
As a user, I want the system to be fast.

// ✅ Đúng
As a customer,
I want to see order status within 2 seconds,
so that I don't have to call the hotline.
```

![Ảnh: ví dụ board user story (Jira/Trello của bạn)](placeholder)

## Acceptance Criteria — phần bị lãng quên

Story không có AC là story chưa xong. Dùng format **Given–When–Then** để cả dev và QA cùng hiểu.

> User story là lời mời hội thoại, không phải tài liệu đóng băng.
