import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Site-wide password gate.
 *
 * Every route requires the `site-auth` cookie, which is set by
 * POST /api/unlock once the correct password ("OK") is supplied. The token is
 * the sha256 hash of "ok"; the middleware only compares strings, so it stays in
 * the edge runtime with no crypto needed.
 */
const AUTH_TOKEN =
  "2689367b205c16ce32ed4200942b8b8b1e262dfc70d9bc9fbc77c49699a4f1df";
const COOKIE_NAME = "site-auth";

export function middleware(req: NextRequest) {
  // The home page is public.
  if (req.nextUrl.pathname === "/") return NextResponse.next();

  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (token === AUTH_TOKEN) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/unlock";
  url.search = "";
  url.searchParams.set("next", req.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  // Gate everything except the unlock page, its API, Next internals, and
  // static asset requests (paths with a file extension or under public dirs).
  matcher: [
    "/((?!unlock|api/unlock|_next/static|_next/image|favicon.ico|images|videos|sounds|fonts|.*\\.).*)",
  ],
};
