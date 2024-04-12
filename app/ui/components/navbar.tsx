"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" py-4 px-5 bg-gray-100 rounded-md h-16 max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center h-full">
        <div className="">
          <Link href="/" className="uppercase text-2xl font-medium select-none">
            sleepee.com
          </Link>
        </div>
        <div className="flex gap-2 items-center"></div>
      </div>
    </nav>
  );
}
