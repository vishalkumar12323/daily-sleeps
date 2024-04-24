"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "./button";
import Image from "next/image";

export default function UserProfile() {
  const [active, setActive] = useState(false);
  const { data: session } = useSession();
  // console.log(session);
  return (
    <>
      {session?.user && (
        <>
          <main className=" h-auto flex gap-3 justify-center items-center ">
            <div>
              <p className="text-xs">Logged in as:</p>
              <p className="text-[1rem]"> {session?.user?.email} </p>
            </div>
            <div
              onClick={() => setActive((state) => !state)}
              className="py-0 px-0 w-10 h-10 bg-black hover:bg-slate-900 cursor-pointer rounded-[50%]"
            >
              <div className="w-full h-full rounded-[50%] flex justify-center items-center">
                {session?.user?.image ? (
                  <Image
                    src={session?.user?.image}
                    alt="user profile image"
                    className="w-full h-full rounded-full"
                    width={`${100}`}
                    height={`${100}`}
                  />
                ) : (
                  <p className="text-white uppercase">
                    {session?.user?.name?.charAt(0)}
                  </p>
                )}
              </div>
            </div>
          </main>
          {active && (
            <section className="w-auto p-3 h-auto bg-slate-100 shadow-md rounded z-50 absolute inline-block right-0 top-12">
              <ul className="flex flex-col gap-3">
                <li className="py-3 px-4 capitalize">
                  Hi, {session?.user?.name}
                </li>
                <Button
                  className="w-full py-2 px-4 hover:bg-slate-50 capitalize text-[16px] font-normal"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </Button>
              </ul>
            </section>
          )}
        </>
      )}
    </>
  );
}
