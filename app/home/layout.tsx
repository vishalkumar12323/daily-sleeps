"use client";

import Navbar from "@/app/ui/components/navbar";
import Footer from "../ui/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={`max-w-screen-lg mx-auto`}>
        <header className="pt-4">
          <Navbar />
        </header>
        {children}
        <footer className="mb-4 bg-[#f1f1f1bd] dark:bg-slate-900 dark:text-white rounded-md">
          <Footer />
        </footer>
      </div>
    </>
  );
}
