"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="py-4 h-16 flex justify-center items-center text-center flex-col gap-1 w-full">
        <div>
          <p>
            <Link href="/" className="font-medium">
              SLEEPEE.COM
            </Link>{" "}
            &copy;Copyright {new Date().getFullYear()}. All Right Reserverd{" "}
          </p>
          <p>
            App developed by{" "}
            <Link href="#" className="font-medium">
              Vishal Kumar
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
