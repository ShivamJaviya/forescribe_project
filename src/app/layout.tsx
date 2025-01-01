"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define routes where the Header and Footer should not appear
  const noHeaderFooterRoutes = ["/login", "/register"];

  const showHeaderFooter = !noHeaderFooterRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {showHeaderFooter && <Header />}
        <main>{children}</main>
        {showHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
