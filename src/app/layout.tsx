import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// 셀프호스팅 가변 폰트 (SIL OFL) — 외부 CDN 의존 없음
const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="bg-cream text-ink flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
          {children}
        </main>
        <Footer />
        {/*
          Cloudflare Web Analytics (무료) — Cloudflare 대시보드에서 토큰 발급 후
          아래 주석을 해제하고 "YOUR_TOKEN"을 교체할 것.
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "YOUR_TOKEN"}'
          />
        */}
      </body>
    </html>
  );
}
