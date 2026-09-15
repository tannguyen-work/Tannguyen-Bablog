"use client";

import { useState } from "react";

/**
 * Form đăng ký nhận bài mới.
 * Hiện tại là DEMO — khi muốn hoạt động thật, kết nối với
 * Buttondown / Mailchimp / Resend bằng cách đổi hàm handleSubmit.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: gọi API dịch vụ email thật tại đây
    setSent(true);
  }

  if (sent) {
    return (
      <p className="newsletter-ok">
        ✓ Đã ghi nhận <strong>{email}</strong> — cảm ơn bạn!
        <br />
        <small>(Demo: hãy kết nối dịch vụ email thật trong components/NewsletterForm.tsx)</small>
      </p>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="newsletter-label" htmlFor="nl-email">
        Email
      </label>
      <div className="newsletter-form-row">
        <input
          id="nl-email"
          className="newsletter-input"
          type="email"
          required
          placeholder="ban@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-accent newsletter-submit">
          Đăng ký →
        </button>
      </div>
    </form>
  );
}
