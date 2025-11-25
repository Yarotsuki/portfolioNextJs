import { SITE_URL } from "@/lib/seo";
import type { MetadataRoute } from "next";

const baseUrl = SITE_URL.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about", "projects", "contact", "resume", "services"];

  return pages.map((p) => ({
    url: `${baseUrl}/${p}`.replace(/\/\/$/, "/"),
    lastModified: new Date().toISOString(),
  }));
}
