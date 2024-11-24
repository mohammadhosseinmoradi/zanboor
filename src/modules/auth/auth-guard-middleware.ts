import { routes } from "@/lib/constants/routes";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/modules/auth/session";

export async function authGuardMiddleware(request: NextRequest, response: NextResponse) {
  const pathname = new URL(request.url).pathname;
  const session = request.cookies.get("session")?.value;
  const sessionPayload = session ? await decrypt(session) : null;
  if (!pathname.startsWith(routes.auth.getPath()) && !sessionPayload)
    return NextResponse.redirect(new URL(routes.auth.enterUserId, request.url));
  return response;
}
