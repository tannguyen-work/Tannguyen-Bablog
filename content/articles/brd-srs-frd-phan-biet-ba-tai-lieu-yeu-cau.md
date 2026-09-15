---
title: BRD, SRS, FRD — phân biệt 3 tài liệu yêu cầu kinh điển
date: 2026-08-28
excerpt: Ba cái tên hay bị dùng lẫn lộn. Bài này bóc tách: ai viết, viết cho ai, viết gì, và khi nào thì công ty bạn thật sự cần nó.
tags: [documentation, requirements]
featured: false
---

Trong dự án truyền thống (waterfall), yêu cầu đi qua 3 tầng tài liệu trước khi đến tay dev. Hiểu đúng 3 tầng này giúp bạn không bao giờ viết nhầm chỗ.

## BRD — Business Requirements Document

- **Ai viết:** BA làm việc với business/sponsor
- **Trả lời:** WHY — tại sao cần dự án này, mục tiêu kinh doanh là gì
- **Độc giả:** ban lãnh đạo, stakeholder phi kỹ thuật

## SRS — Software Requirements Specification

- **Ai viết:** BA + Solution Architect
- **Trả lời:** WHAT — hệ thống phải làm gì (functional + non-functional)
- **Độc giả:** dev team, QA

## FRD — Functional Requirements Document

- **Ai viết:** BA
- **Trả lời:** HOW (về mặt chức năng) — luồng xử lý chi tiết, màn hình, rule nghiệp vụ
- **Độc giả:** dev, QA, UX

![Ảnh: bảng so sánh BRD/SRS/FRD (tự thiết kế)](placeholder)

## Agile thì sao?

Agile gộp cả ba vào backlog: epic ≈ BRD, user story ≈ SRS, acceptance criteria ≈ FRD. Tài liệu nhẹ hơn nhưng **tư duy 3 tầng vẫn còn nguyên**.

> Tài liệu là phương tiện, không phải mục đích. Viết đủ để giảm hiểu lầm, không viết để đẹp hồ sơ.
