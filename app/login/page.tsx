import LoginForm from "@/app/ui/forms/login-form";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "/login",
  description: "daily-sleeps login/signIn page",
};
export default function Page() {
  return <LoginForm />;
}
