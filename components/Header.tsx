"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container-wide header-inner">
        <Link href="/" className="logo" aria-label={site.name}>
          <span className="logo-slashes">//</span>
          BA.LOG
        </Link>

        <nav className="nav" aria-label="Điều hướng chính">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <a href="/#newsletter" className="header-mail" title="Nhận bài mới">
            ✉
          </a>
        </div>
      </div>
    </header>
  );
}
