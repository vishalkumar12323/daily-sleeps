import { prisma } from "./config";
import { User } from "./definations";

export async function fetchUser() {
  const user = await prisma.user.findUnique({
    where: { email: "vishalninaniya6376@gmail.com" },
  });
  return user;
}
