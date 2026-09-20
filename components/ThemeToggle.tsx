"use client";

/**
 * Nút chuyển DARK / LIGHT MODE ở header.
 *
 * - Theme được đánh dấu bằng thuộc tính `data-theme` trên <html>
 *   (script trong app/layout.tsx set trước khi trang vẽ để không bị nháy màu).
 * - Lựa chọn của khách được lưu vào localStorage("theme"), lần sau vào lại vẫn giữ.
 * - Chưa từng bấm thì theo hệ điều hành (prefers-color-scheme).
 * - Icon ☀/☾ và chữ dark/light hiển thị bằng CSS thuần (globals.css)
 *   nên không bao giờ bị lệch hydration trên bản static export.
 */
export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Trình duyệt chặn localStorage (private mode...) — theme vẫn đổi trong phiên này
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Chuyển chế độ sáng / tối"
      title="Bật/tắt dark mode – light mode"
    >
      <span className="theme-toggle-icon icon-moon" aria-hidden="true">
        ☾
      </span>
      <span className="theme-toggle-icon icon-sun" aria-hidden="true">
        ☀
      </span>
    </button>
  );
}
