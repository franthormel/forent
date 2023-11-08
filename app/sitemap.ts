import { MetadataRoute } from "next";

// For the `lastModified` properties, use the following values
//
// `always`,`hourly`,`daily = changed frequently; dynamic content
// `weekly` = changed sometimes;
// `monthly` = changed rarely; static content
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://localhost:3000/",
      lastModified: "2023-11-08",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "http://localhost:3000/api/auth/signin",
      lastModified: "2023-11-08",
      changeFrequency: "monthly",
    },
  ];
}
