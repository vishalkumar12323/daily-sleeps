import { z } from "zod";
export type User = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
};

export type UserSleepData = {
  id?: string;
  date?: string;
  sleepTime?: string;
  wakeupTime?: string;
};

export type FormattedSleepData = {
  currentDay: string[];
  nextDay: string[];
  sleepDuration: { hours: number; minutes: number, timeInMinutes:number };

};

export type errorMessageProps = {
  name?: string[] | undefined;
  email?: string[] | undefined;
  password?: string[] | undefined;
};

export const FormSchema = z.object({
  name: z.string().min(4, { message: "name contain min. 4 letters" }),
  email: z.string().email({ message: "email is required." }),
  password: z.string().min(8, { message: "password should be min. 8 letters" }),
});
