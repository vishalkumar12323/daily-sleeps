import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/home", "/home/:path*"],
};

export default async function middleware(req: NextRequest) {
  const session = req.cookies.get("authjs.session-token")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
