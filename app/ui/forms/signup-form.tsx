"use client";
import { useState } from "react";
import Input from "./input";
import Label from "./label";
import { lusitana } from "@/app/lib/fonts";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Button } from "../components/button";
import InputError from "./input-error";
import { errorMessageProps, FormSchema } from "@/app/lib/definitions";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function SignupForm() {
  const [errorMessage, setErrorMessage] = useState<errorMessageProps>();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const validateForm = FormSchema.safeParse({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (!validateForm.success) {
      return setErrorMessage(validateForm.error.flatten().fieldErrors);
    }

    const { name, email, password } = validateForm?.data;
    const response = await fetch("api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (response.ok) {
      router.replace("/login");
      router.refresh();
    }
  };

  return (
    <section
      className={`${lusitana.className} w-full h-[100vh] flex justify-center items-center`}
    >
      <div className="w-[90%] md:w-[34%] h-auto bg-gray-100 rounded-md p-3">
        <h3 className="text-2xl capitalize font-medium mt-1">create account</h3>

        <form onSubmit={handleSubmit} className=" w-full">
          <div className="py-2">
            <Label htmlFor="name">name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your name"
              aria-describedby="name"
              errormessage={errorMessage?.name}
            />
            <InputError id="name" error={errorMessage?.name} />
          </div>
          <div className="py-2">
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
          <div className="py-2">
            <Button
              type="submit"
              className="w-full flex justify-between items-center"
            >
              <span>Signup</span>
              <ArrowLongRightIcon width={30} />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
