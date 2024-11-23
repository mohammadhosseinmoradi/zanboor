"use client";

import { auth } from "@/modules/auth/session";
import useSWRImmutable from "swr/immutable";
import { authKey } from "@/modules/auth/constants";
import { mutate } from "swr";

export function useAuth() {
  const { data, ...rest } = useSWRImmutable(authKey, auth);

  return {
    user: data?.user,
    ...rest,
  };
}

export async function revalidateUseAuth() {
  return mutate(key => Array.isArray(key) && key?.[0] == authKey[0]);
}
