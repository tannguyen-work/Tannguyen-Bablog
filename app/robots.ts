import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

/** robots.txt tự sinh — cho phép mọi bot thu thập toàn bộ web */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/"],
      },
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
  };
}
