"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="h-16 flex justify-center max-w-screen-lg mx-auto text-center flex-col gap-1 w-full">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; Copyright {new Date().getFullYear()}. All Right Reserverd{" "}
          </p>
          <Link href="#" className="text-sm capitalize">
            daily-sleeps
          </Link>
        </div>
      </div>
    </>
  );
}
