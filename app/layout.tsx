import type { Metadata } from "next";
import { Outfit, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swing-by.net"),
  title: "SWINGBY Production | 영상 프로덕션 스윙바이",
  description:
    "기획부터 촬영, 편집, 색보정, D.I.T까지 — 영상의 모든 여정에 동행하는 영상 프로덕션 스윙바이. CF, 뮤직비디오, 영화, 숏폼 제작.",
  keywords: [
    "영상 프로덕션", "영상 제작", "색보정", "컬러 그레이딩", "D.I.T", "DIT",
    "CF 제작", "뮤직비디오 제작", "숏폼 제작", "스윙바이", "SWINGBY",
  ],
  icons: {
    icon: "/swingbyicon.png",
  },
  openGraph: {
    title: "SWINGBY Production | 영상 프로덕션 스윙바이",
    description: "기획부터 포스트까지, 영상의 모든 여정에 동행합니다. Beyond every orbit, towards you.",
    url: "https://www.swing-by.net",
    siteName: "SWINGBY Production",
    images: [
      {
        url: "/og-image.jpg", // 공유용 썸네일 (1200x630, 압축본)
        width: 1200,
        height: 630,
        alt: "SWINGBY Production",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWINGBY Production | 영상 프로덕션 스윙바이",
    description: "기획부터 포스트까지, 영상의 모든 여정에 동행합니다.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${outfit.variable} ${notoSansKR.variable} antialiased`}
      >
        {children}
        {/* Vercel 방문자 통계 스크립트 (대시보드에서 Web Analytics 활성화 필요) */}
        <script defer src="/_vercel/insights/script.js" />
      </body>
    </html>
  );
}