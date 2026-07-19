import type { MetadataRoute } from "next";

// 검색엔진에게 "이 사이트는 전부 봐도 됩니다"라고 알려주는 파일 (자동으로 /robots.txt 생성)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.swing-by.net/sitemap.xml",
  };
}
