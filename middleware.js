import { NextResponse } from "next/server";

export function middleware(request) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  const cookie = request.cookies.get("admin_session")?.value;

  // Both being undefined must never read as a match, or a missing env var
  // would let anyone straight into the admin panel.
  const isLoggedIn = Boolean(secret) && cookie === secret;
  const isLoginRoute = request.nextUrl.pathname === "/admin/login";

  if (!isLoginRoute && !isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  if (isLoginRoute && isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/products";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
