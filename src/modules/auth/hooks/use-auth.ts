"use client";

import { auth } from "@/modules/auth/session";
import { authKey } from "@/modules/auth/constants";
import { signOut as serverSignOut } from "@/modules/auth/actions/sign-out";
import useSWRImmutable from "swr/immutable";
import { useRouter } from "next/navigation";

export function useAuth() {
  const { data, mutate, ...rest } = useSWRImmutable(authKey, auth);

  const router = useRouter();

  const user = data?.user;

  const signOut = async () => {
    await serverSignOut();
    router.refresh();
  };

  return {
    user,
    mutate,
    ...rest,
    signOut,
  };
}
