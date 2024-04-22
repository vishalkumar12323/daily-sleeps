"use client";
import LoginForm from "@/app/ui/forms/login-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
  const { data: session } = useSession();
  if (session) {
    return redirect("/home");
  }
  return <LoginForm />;
}
