import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";

const baseUrl = "https://najottalim.uz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/kurslar`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${baseUrl}/savollar`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${baseUrl}/kurslar/${course.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}
