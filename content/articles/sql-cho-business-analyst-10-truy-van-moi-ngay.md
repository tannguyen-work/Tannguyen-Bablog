---
title: "SQL cho Business Analyst: 10 truy vấn bạn sẽ dùng mỗi ngày"
date: 2026-09-02
excerpt: JOIN, GROUP BY, window function, CTE — đủ để bạn tự trả lời 80% câu hỏi của sếp mà không cần chờ data team.
tags: [sql, data]
featured: true
---

80% công việc phân tích của BA xoay quanh vài pattern SQL quen thuộc. Đây là 10 truy vấn tôi dùng nhiều nhất, xếp theo tần suất.

## 1–3. Nhóm truy vấn cơ bản

```sql
-- Doanh thu theo tháng
SELECT DATE_TRUNC('month', order_date) AS month,
       SUM(amount) AS revenue
FROM orders
GROUP BY 1
ORDER BY 1;
```

## 4–7. JOIN và lọc nâng cao

Hiểu **INNER vs LEFT JOIN** giải quyết phần lớn câu hỏi kiểu "khách hàng nào chưa từng đặt hàng?".

```sql
-- Khách chưa đặt hàng
SELECT c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.id IS NULL;
```

![Ảnh: kết quả query trên Power BI / DBeaver](placeholder)

## 8–10. Window function & CTE

ROW_NUMBER(), RANK(), LAG() giúp trả lời câu hỏi so sánh theo thời gian mà không cần export ra Excel.

> SQL không làm bạn thành data engineer — nó làm bạn thành BA không phải đợi ai cả.
