import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Slider from "@/components/Slider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thư viện thông tin",
  description: "Thư viện thông tin | densach.edu.vn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        <Slider />
        {children}
      </body>
    </html>
  );
}
