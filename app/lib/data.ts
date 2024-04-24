import bcrypt from "bcryptjs";
import { prisma } from "./config";
import { UserSleepData, User } from "./definitions";

// function to hash password
export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

// function to compare password
export async function comparePassword(
  userPassword: string,
  previousPassword: string
): Promise<boolean> {
  return await bcrypt.compare(userPassword, previousPassword);
}

// function to fetch user sleep record from database
export async function fetchUserSleepRecord(
  id: string
): Promise<UserSleepData[] | undefined> {
  try {
    const data = await prisma.entries.findMany({
      where: { authorId: id },
      select: { id: true, date: true, sleepTime: true, wakeupTime: true },
    });
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchCurrentUser(email: string): Promise<User> {
  try {
    const currentUser = await prisma.user.findUnique({ where: { email } });
    return currentUser;
  } catch (error) {
    console.log("user not found ", { error });
    return null;
  }
}
