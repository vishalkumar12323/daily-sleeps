"use client";
import Input from "./input";
import Label from "./label";
import Image from "next/image";
import { lusitana } from "@/app/lib/fonts";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../components/button";
import { errorMessageProps, FormSchema } from "@/app/lib/definitions";
import InputError from "./input-error";

export default function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<errorMessageProps>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const validateForm = FormSchema.omit({ name: true }).safeParse({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (!validateForm.success) {
      return setErrorMessage(validateForm.error.flatten().fieldErrors);
    }

    const { email, password } = validateForm.data;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/home",
    });

    if (response?.error) {
      setErrorMessage((preError) => {
        return {
          ...preError,
          message: "invalid email or password",
        };
      });
    }
  };
  return (
    <section
      className={`${lusitana.className} w-full h-[100vh] flex justify-center items-center`}
    >
      <div className="w-[90%] md:w-[34%] h-auto bg-gray-100 rounded-md p-3">
        <h3 className="text-2xl font-normal mt-3">Log in to continue</h3>

        <form onSubmit={handleSubmit} method="POST" className="mt-2 w-full">
          <div className="py-3">
            <Label htmlFor="email">email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email"
              aria-describedby="email"
              errormessage={errorMessage?.email}
            />
            <InputError id="email" error={errorMessage?.email} />
          </div>
          <div className="py-2">
            <Label htmlFor="password">password</Label>
            <Input
              type="text"
              id="password"
              name="password"
              placeholder="password"
              aria-describedby="password"
              errormessage={errorMessage?.password}
            />
            <InputError id="password" error={errorMessage?.password} />
          </div>
          {errorMessage?.message && (
            <p className="text-sm text-red-500 pl-2">{errorMessage.message}</p>
          )}
          <div className="py-3 mt-1">
            <Button type="submit" className=" w-full">
              Login
            </Button>
          </div>
        </form>
        <div className="py-3 w-full">
          <Button
            className="w-full flex justify-center items-center gap-2"
            onClick={() =>
              signIn("google", {
                redirect: false,
                callbackUrl: "/home",
              })
            }
          >
            <Image src="/google.svg" width={20} height={20} alt="google icon" />{" "}
            continue with google
          </Button>
        </div>
      </div>
    </section>
  );
}
