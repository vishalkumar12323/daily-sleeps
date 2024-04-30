import { Metadata } from "next";
import SignupForm from "../ui/forms/signup-form";

export const metaData: Metadata = {
  title: "register",
};

export default function Page() {
  return <SignupForm />;
}
