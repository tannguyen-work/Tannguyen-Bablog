import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
  display: "swap",
});

const ui = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-ui",
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
  return (
    <html lang="vi" className={`${mono.variable} ${ui.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
