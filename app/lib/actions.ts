"use server";
import { sql } from "@vercel/postgres";
import { v4 as uuidv4 } from "uuid";

export async function submitEntries(formData: FormData) {
  const { date, sleepTime, wakeupTime } = {
    date: formData.get("date") as string,
    sleepTime: formData.get("sleep-time") as string,
    wakeupTime: formData.get("wakeup-time") as string,
  };

  const id = uuidv4();
  try {
    await sql`
        INSERT INTO entries (id, date, sleep_time, wakeup_time)
        VALUES (${id}, ${date}, ${sleepTime}, ${wakeupTime})
    `;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error.");
  }
}
