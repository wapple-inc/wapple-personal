"use client";
// ヘッダー・フッターの配色をページに合わせる（/journaling はインクブルー）
import { usePathname } from "next/navigation";

export default function ThemeVars({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div className={pathname.startsWith("/journaling") ? "journaling-vars" : ""}>{children}</div>;
}
