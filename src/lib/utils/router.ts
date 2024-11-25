import { useSearchParams } from "next/navigation";

export function withCallbackUrl(href: string, callback?: string | null): string {
  const [pathname, search] = href.split("?");
  const searchParams = new URLSearchParams(search);
  if (callback) searchParams.set("callback", callback);
  const queryString = searchParams.toString();
  return `${pathname}${queryString ? "?" + queryString : ""}`;
}

export function useCallbackUrl() {
  const searchParams = useSearchParams();
  return searchParams.get("callback");
}
