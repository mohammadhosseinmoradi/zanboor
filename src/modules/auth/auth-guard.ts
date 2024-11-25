import { routes } from "@/lib/constants/routes";
import { auth } from "@/modules/auth/session";
import { pathname } from "@/lib/utils/pathname";
import { redirect } from "next/navigation";

/**
 * Prevent from unauthorized access protected routes.
 */
export async function authGuard() {
  const session = await auth();
  const urlPathname = await pathname();
  if (!urlPathname.startsWith(routes.auth.getPath()) && !session) redirect(routes.auth.enterPhone);
}
