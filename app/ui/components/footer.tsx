"use client";
import Link from "next/link";
import ThemeMenu from "./theme-menu";

export default function Footer() {
  return (
    <>
      <ThemeMenu />
      <div className="flex justify-center items-center text-center flex-col gap-1 w-full">
        <div>
          <p>
            <Link href="/" className="text-sky-500">
              SLEEPEE.COM
            </Link>{" "}
            &copy;Copyright {new Date().getFullYear()}. All Right Reserverd{" "}
          </p>
          <p>
            App developed by{" "}
            <Link href="#" className="text-sky-500">
              Vishal Kumar
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
