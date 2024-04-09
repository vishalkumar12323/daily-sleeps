"use server";

import { z } from "zod";
import { prisma } from "./config";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "./utils";

const FromSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(4, { message: "name must be contains minimum 4-5 letter" }),
  email: z.string().email({ message: "email is required" }),
  password: z
    .string()
    .min(8, { message: "password must be contains minimum 8 letter" }),
});

type State = {
  message: null;
  errors: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
};

const Signup = FromSchema.omit({ id: true });
export async function signup(preState: State, formData: FormData) {
  const validateFrom = Signup.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (!validateFrom.success) {
    return {
      message: "Missing Feilds, Failds to Signup user",
      errors: validateFrom.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validateFrom.data;
  const newPassword = await hashPassword(password);
  const uuid = uuidv4();

  try {
    await sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${uuid}, ${name}, ${email}, ${newPassword})
    `;
  } catch (error) {
    console.error(error);
  }

  redirect("/home");
}
