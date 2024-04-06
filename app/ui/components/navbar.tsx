"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./button";
import ThemeMenu from "./theme";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <nav className=" py-3 px-5 border border-sky-400 rounded-md h-16 max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center h-full">
        <div className="">
          <Link href="/" className="uppercase text-2xl font-medium">
            sleepee.com
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            href="/home/entries"
            className="py-[0.7rem] px-6 uppercase rounded-md bg-gradient-to-r from-yellow-600 to-red-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500 transition-colors"
          >
            create entry
          </Link>
          <Button
            type="button"
            className="py-[0.7rem] px-10"
            children="logout"
          />
        </div>
      </div>
    </nav>
  );
}
