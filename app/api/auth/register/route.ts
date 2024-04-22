import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/app/lib/data";
import { prisma } from "@/app/lib/config";
import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
  const user = await req.json();

  try {
    const isUserExists = await prisma.user.findUnique({
      where: { email: user.email },
    });
    if (isUserExists) {
      return NextResponse.json({
        message: "email is already taken.",
        status: 400,
      });
    }
    const id = uuid();
    const hashedPassword = await hashPassword(user.password);
    const newUser = await prisma.user.create({
      data: {
        id,
        email: user.email,
        name: user.name,
        password: hashedPassword,
      },
    });
  } catch (error) {
    //for dev.
    console.error(error);
    return NextResponse.json({ message: "internal server error", status: 500 });
  }

  return NextResponse.json({ message: "success", status: 200 });
}
