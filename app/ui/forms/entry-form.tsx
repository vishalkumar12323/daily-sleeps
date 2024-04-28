"use client";
import { FormEvent } from "react";
import Input from "./input";
import Label from "./label";
import { lusitana } from "@/app/lib/fonts";
import { useRouter } from "next/navigation";
import { Button } from "../components/button";
import { useSession } from "next-auth/react";

export default function EntriesForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const newData = {
      ...data,
      id: session?.user?.id,
    };
    const response = await fetch("/api/entries", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newData),
    });
    if (response.ok) {
      router.push("/");
      router.refresh();
    }
  };
  return (
    <section
      className={`${lusitana.className} flex justify-center items-center w-full h-[80vh] p-2 my-10`}
    >
      <div className="bg-gray-100 w-[90%] md:w-[40%] h-full rounded-md">
        <div className="pt-8 px-4">
          <h3 className="text-2xl font-medium capitalize">create new entry</h3>
          <form className="w-full mt-3" onSubmit={handleSubmit}>
            <div className="w-full my-4">
              <Label htmlFor="date">Date</Label>
              <Input type="date" name="date" id="date" required />
            </div>
            <div className="w-full my-2">
              <Label htmlFor="sleep-time">Sleep Time</Label>
              <Input type="time" name="sleepTime" id="sleep-time" required />
            </div>
            <div className="w-full my-4">
              <Label htmlFor="wakeup-time" className="py-1">
                Wakeup Time
              </Label>
              <Input type="time" name="wakeupTime" id="wakeup-time" required />
            </div>
            <div className="my-3">
              <Button type="submit" className="w-full">
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
