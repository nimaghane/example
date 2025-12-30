import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "فروشگاه و بلاگ",
  description: "پروژه فروشگاهی و بلاگ با Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazir.variable} font-sans antialiased bg-gradient-to-br from-black via-zinc-900 to-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
