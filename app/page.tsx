"use client";
import { lusitana } from "@/app/lib/fonts";
import { Button } from "./ui/components/button";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return redirect("/home");
  }
  return (
    <section
      className={`${lusitana.className} w-full h-[100vh] flex items-center`}
    >
      <div className="w-full md:max-w-screen-lg flex justify-center items-center flex-col gap-8 mx-auto">
        <h1 className="text-[2.5rem] md:text-7xl md:px-0 text-start md:text-center  w-[90%] md:w-full font-semibold capitalize md:leading-[1.3]">
          welcome to sleepee. <br /> com make your day more expensive and <br />
          sleep better.
        </h1>
        <div className="mt-3 flex gap-4 flex-col md:flex-row w-[90%] md:w-full justify-start md:justify-center">
          <Link
            href="/register"
            className="font-medium flex w-full md:w-48 justify-between items-center py-3 px-10 text-white capitalize rounded-md bg-black hover:bg-slate-900 focus:bg-slate-900 shadow-md "
          >
            <span className="text-xl">Register</span>{" "}
            <ArrowLongRightIcon width={30} />
          </Link>
          <Button
            className="py-3 flex justify-center items-center gap-2 font-medium text-xl"
            onClick={() =>
              signIn("google", {
                redirect: false,
                callbackUrl: "/home",
              })
            }
          >
            {" "}
            <Image
              src="/google.svg"
              width={20}
              height={20}
              alt="google icon"
            />{" "}
            login with google
          </Button>
        </div>
      </div>
    </section>
  );
}
