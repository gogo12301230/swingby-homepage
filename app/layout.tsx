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
        url: "/og-image.jpg", // 공유용 썸네일 (1200x630, 압축본)
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