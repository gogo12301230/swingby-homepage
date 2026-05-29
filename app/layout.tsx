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
  title: "SwingByProduction",
  description: "Beyond every orbit, towards you",
  icons: {
    icon: "/swingbyicon.png",
  },
  openGraph: {
    title: "SwingByProduction",
    description: "Beyond every orbit, towards you",
    url: "https://www.swing-by.net",
    siteName: "SwingByProduction",
    images: [
      {
        url: "/뒷면.png", // public 폴더에 넣은 이미지 파일명과 일치해야 함
        width: 1200,
        height: 630,
        alt: "SwingByProduction Thumbnail",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${notoSansKR.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}