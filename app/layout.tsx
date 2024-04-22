import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "@/app/ui/components/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily-Sleeps",
  description: "Track Your Daily Sleeps Record",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head />
        <SessionProvider>
          <body className={`${inter.className}`}>{children}</body>
        </SessionProvider>
      </html>
    </>
  );
}
