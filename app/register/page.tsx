"use client";
import SignupForm from "../ui/forms/signup-form";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

export default function Page() {
  // const { data: session } = useSession();
  // if (session) {
  //   return redirect("/home");
  // }
  return <SignupForm />;
}
