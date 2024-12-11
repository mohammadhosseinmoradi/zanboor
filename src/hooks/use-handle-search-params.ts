"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";

export class TypeSafeSearchParams<T extends Record<string, string>> extends URLSearchParams {
  set(name: keyof T, value: string): void {
    super.set(name as string, value);
  }

  append(name: keyof T, value: string): void {
    super.append(name as string, value);
  }

  delete(name: keyof T): void {
    super.delete(name as string);
  }

  has(name: keyof T): boolean {
    return super.has(name as string);
  }

  get(name: keyof T): string | null {
    return super.get(name as string);
  }

  getAll(name: keyof T): string[] {
    return super.getAll(name as string);
  }
}

export default function useHandleSearchParams<T extends Record<string, string>>() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams() as TypeSafeSearchParams<T>;
  const [isPending, startTransition] = useTransition();

  const setSearchParams = useCallback(
    (
      cb: (draftSearchParams: TypeSafeSearchParams<T>) => void,
      options?: {
        push?: boolean;
        scroll?: boolean;
        shallow?: boolean;
      }
    ) =>
      startTransition(() => {
        const updatedSearchParams = new URLSearchParams(searchParams.toString());

        cb(updatedSearchParams);

        const queryString = updatedSearchParams.toString();

        const href = pathname + (queryString ? `?${queryString}` : "");

        if (!options?.shallow) {
          router[options?.push ? "push" : "replace"](href, {
            scroll: options?.scroll,
          });
          return;
        }

        window.history[options?.push ? "pushState" : "replaceState"](null, "", href);
      }),
    [pathname, router, searchParams]
  );

  return { searchParams, setSearchParams, isPending };
}
