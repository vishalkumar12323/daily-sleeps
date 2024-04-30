import { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "@/app/ui/components/provider";
import "./globals.css";
import Footer from "./ui/components/footer";
import Navbar from "./ui/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Daily-Sleeps",
    template: "%s | Daily-Sleeps",
  },
  description:
    "welcome to daily-sleeps make  your day more expensive and sleep better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <SessionProvider>
          <body className={`${inter.className} antialiased`}>
            <header className="shadow">
              <Navbar />
            </header>
            {children}
            <footer>
              <Footer />
            </footer>
          </body>
        </SessionProvider>
      </html>
    </>
  );
}
