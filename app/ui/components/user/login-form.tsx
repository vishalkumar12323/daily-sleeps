"use client";
import { Logo } from "../../app-logo";
import { Button } from "../button";

export default function LoginForm() {
  return (
    <section className="w-full h-full flex items-center justify-center pt-11">
      <div className="w-1/3 p-4 md:p-8 h-full flex justify-center items-center flex-col bg-[#222121]">
        <Logo />
        <form action="#" className="w-full mt-3">
          <div className="w-full my-2">
            <div>
              <label htmlFor="email" className="text-xl m-1">
                Email
              </label>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="w-full py-2 px-2 outline-none border border-sky-300 text-black focus:border focus:border-sky-500 rounded-md"
              required
            />
          </div>
          <div className="w-full my-2">
            <div>
              <label htmlFor="password" className="text-xl m-1">
                Password
              </label>
            </div>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Create Password"
              className="w-full py-2 px-2 outline-none border border-sky-300 text-black focus:border focus:border-sky-500 rounded-md"
            />
          </div>
          <div className="w-full mt-4">
            <Button children="Login" type="submit" className="px-10" />
          </div>
        </form>
      </div>
    </section>
  );
}
