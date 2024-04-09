"use client";
import { Logo } from "../../app-logo";
import { Button } from "../button";
import Input from "../Form/input";
import InputLabel from "../Form/label";

export default function LoginForm() {
  return (
    <section className="w-full h-full flex items-center justify-center pt-11">
      <div className="w-1/3 p-4 md:p-8 h-full flex justify-center items-center flex-col bg-[#f0f0f0d3]">
        <Logo />
        <form action="#" className="w-full mt-3">
          <div className="w-full my-2">
            <div>
              <InputLabel htmlFor="email" className="text-xl m-1">
                Email
              </InputLabel>
            </div>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="w-full my-2">
            <div>
              <InputLabel htmlFor="password" className="text-xl m-1">
                Password
              </InputLabel>
            </div>
            <Input
              type="text"
              name="password"
              id="password"
              placeholder="Create Password"
            />
          </div>
          <div className="w-full mt-4">
            <Button type="submit" className="px-10">
              Login
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
