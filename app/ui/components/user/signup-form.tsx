"use client";
import { Logo } from "@/app/ui/app-logo";
import { Button } from "../button";
import { useFormState } from "react-dom";
import { signup } from "@/app/lib/actions";
import InputLabel from "../Form/label";
import Input from "../Form/input";
import FeildError from "../Form/input-field-error";

export default function SignupForm() {
  const initialState = { message: null, errors: {} };
  const [message, dispatch] = useFormState(signup, initialState);
  return (
    <section className="w-full h-full flex items-center justify-center py-1 mt-2">
      <div className="w-1/3 p-2 md:p-4 h-full flex justify-center items-center flex-col bg-[#f0f0f0d3]">
        <Logo />
        <form action={dispatch} className="w-full mt-2">
          <div className="w-full my-2 flex flex-col">
            <div>
              <div>
                <InputLabel htmlFor="name" className="text-xl m-1">
                  Name
                </InputLabel>
              </div>

              <Input
                type="text"
                name="name"
                id="name"
                aria-describedby="input-name"
                placeholder="Enter Name"
                validationerror={message?.errors.name}
              />
            </div>
            <FeildError id="input-name" error={message?.errors.name} />
          </div>
          <div className="w-full my-4 flex flex-col">
            <div>
              <div>
                <InputLabel htmlFor="email" className="text-xl m-1">
                  Email
                </InputLabel>
              </div>
              <Input
                type="email"
                name="email"
                id="email"
                aria-describedby="input-email"
                placeholder="Enter Email"
                validationerror={message?.errors.email}
              />
            </div>
            <FeildError id="input-email" error={message?.errors.email} />
          </div>
          <div className="w-full my-2">
            <div>
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
                aria-describedby="input-password"
                validationerror={message?.errors.password}
              />
            </div>
            <FeildError id="input-password" error={message?.errors.password} />
          </div>
          <div className="w-full mt-5">
            <Button type="submit" className="px-10 text-white">
              Create account
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
