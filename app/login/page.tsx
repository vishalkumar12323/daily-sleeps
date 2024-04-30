import LoginForm from "@/app/ui/forms/login-form";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "/login",
};
export default function Page() {
  return <LoginForm />;
}
