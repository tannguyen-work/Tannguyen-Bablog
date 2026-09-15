import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/content/site";

export const dynamic = "force-static";

/**
 * Sitemap tự sinh: trang tĩnh + toàn bộ bài viết markdown.
 * Xem tại: /sitemap.xml — gửi file này cho Google Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/posts", priority: 0.9, changeFrequency: "daily" },
    { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  ] as const;

  const staticRoutes: MetadataRoute.Sitemap = pages.map((r) => ({
    url: `${site.siteUrl}${r.path}`,
    lastModified: new Date(),
    priority: r.priority,
    changeFrequency: r.changeFrequency,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${site.siteUrl}/posts/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...postRoutes];
}
