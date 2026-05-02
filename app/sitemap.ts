import type { MetadataRoute } from "next";
import { SITE_CANONICAL_ORIGIN } from "./lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CANONICAL_ORIGIN,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
