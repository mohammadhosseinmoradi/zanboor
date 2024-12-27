import { useMemo } from "react";
import { UrlObject } from "url";
import { usePathname } from "next/navigation";

export type UseNavLinkProps = {
  href: string | UrlObject;
};

/**
 * Custom hook to determine the active state of a navigation link based on the current pathname.
 */
export function useNavLink({ href }: UseNavLinkProps) {
  const pathname = usePathname();
  const hrefPathname = new URL(href as string, "https://test.com").pathname;

  return useMemo(() => {
    const activeChildren =
      pathname !== hrefPathname && pathname.startsWith(hrefPathname);
    const active = pathname === hrefPathname;

    return {
      active,
      activeChildren
    };
  }, [pathname, hrefPathname]);
}
