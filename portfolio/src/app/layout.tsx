import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    images: SITE.ogImage ? [{ url: SITE.ogImage }] : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Navbar />
          <main className="pb-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
