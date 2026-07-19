import type { MetadataRoute } from "next";

// 검색엔진에게 사이트 페이지 목록을 알려주는 파일 (자동으로 /sitemap.xml 생성)
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.swing-by.net",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
