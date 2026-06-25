import { NextResponse } from "next/server";
import { createHash } from "node:crypto";

/** sha256("ok") — password is compared lowercased + trimmed. */
const OK_HASH =
  "2689367b205c16ce32ed4200942b8b8b1e262dfc70d9bc9fbc77c49699a4f1df";
const COOKIE_NAME = "site-auth";

export async function POST(req: Request) {
  let password = "";
  try {
    const body = await req.json();
    if (typeof body?.password === "string") password = body.password;
  } catch {
    // ignore malformed body
  }

  const hash = createHash("sha256")
    .update(password.toLowerCase().trim())
    .digest("hex");

  if (hash !== OK_HASH) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, OK_HASH, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}
