import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/entry"],
};

export default async function middleware(req: NextRequest) {
  const session = req.cookies.get("session_token")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
