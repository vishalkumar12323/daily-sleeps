"use client";
import { SplashScreen } from "@/app/ui/splash-screen";
import Image from "next/image";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="w-full h-[100vh] flex items-center gap-5 bg-slate-50 text-black dark:bg-slate-950 dark:text-white">
        <div className="w-[25%] bg-black h-full p-3">
          <SplashScreen />
        </div>
        <div className="relative">
          <Image
            src="/Daily-Sleeps.jpg"
            width={850}
            height={600}
            alt="daily-sleeps-screenshot"
            className="ml-5"
          />
        </div>
      </main>
    </ThemeProvider>
  );
}
