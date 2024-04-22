import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/config";
import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
  const entry = await req.json();
  const id = uuid();
  try {
    await prisma.entries.create({
      data: {
        id,
        date: entry.date,
        sleepTime: entry.sleepTime,
        wakeupTime: entry.wakeupTime,
        authorId: entry.id,
      },
    });

    return NextResponse.json({
      message: "successfully created",
      statusCode: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal server error",
      statusCode: 500,
    });
  }
}
