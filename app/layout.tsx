import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

// Tên biến phải khớp với globals.css: --font-mono: var(--font-jetbrains), ...
// (trước đây khai báo "--font-mono" bị :root ghi đè bằng var(--font-jetbrains)
//  không tồn tại → font không bao giờ được áp dụng, rơi về font hệ thống)
const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jetbrains",
  display: "swap",
});

const ui = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — Business Analyst blog`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "business analyst",
    "BA",
    "phân tích nghiệp vụ",
    "yêu cầu phần mềm",
    "BRD",
    "user story",
    "SQL cho BA",
    "học business analyst",
  ],
  authors: [{ name: site.author }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — Business Analyst blog`,
    description: site.description,
    url: site.siteUrl,
    locale: "vi_VN",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Business Analyst blog`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Áp theme TRƯỚC khi trang vẽ (chống nháy màu):
  // 1) dùng lựa chọn đã lưu trong localStorage("theme")
  // 2) chưa lưu thì theo hệ điều hành (prefers-color-scheme)
  // 3) mặc định cuối: dark
  const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

  return (
    <html
      lang="vi"
      data-theme="dark"
      suppressHydrationWarning
      className={`${mono.variable} ${ui.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
