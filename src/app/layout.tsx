import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "株式会社シンコーテック｜現場起点のものづくりパートナー",
  description:
    "株式会社シンコーテックは、設備保全・ライン改善・制御自動化を一貫支援する技術会社です。",
  metadataBase: new URL("https://shinkotec.example.com"),
  openGraph: {
    title: "株式会社シンコーテック",
    description:
      "現場起点のものづくりで未来のインフラを支える技術会社。",
    url: "https://shinkotec.example.com",
    siteName: "株式会社シンコーテック",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社シンコーテック",
    description:
      "設備保全・改善提案・制御自動化を支援する技術パートナー。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans">{children}</body>
    </html>
  );
}
