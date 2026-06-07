import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "秦善成 | パーソナルコーチング",
  description: "忙しい毎日の中で、あなたのペースで前に進む。オンライン学習伴走コーチング。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
