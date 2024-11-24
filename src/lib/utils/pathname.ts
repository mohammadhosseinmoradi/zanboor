"use server";

import { headers } from "next/headers";

export async function pathname() {
  const headersStore = await headers();
  // We added the x-url header earlier in the middleware.
  const url = headersStore.get("x-url");
  if (!url) {
    const err = new Error("x-url is missing in request headers");
    if (Error.captureStackTrace) Error.captureStackTrace(err, pathname);
    throw err;
  }
  return new URL(url).pathname;
}
