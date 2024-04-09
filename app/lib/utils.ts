import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

export async function comparePassword(
  userPassword: string,
  password: string
): Promise<boolean> {
  return await bcrypt.compare(userPassword, password);
}
