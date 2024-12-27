"use server";

import { auth } from "@/modules/auth/session";
import { unstable_serialize } from "swr";
import { SWRConfig } from "@/app/swr-config";
import { authKey } from "@/modules/auth/constants";

type SessionProviderProps = {
  children: React.ReactNode;
};

/**
 * Provide fallback data for useAuth hook.
 * @param props
 * @constructor
 */
export async function SessionProvider(props: SessionProviderProps) {
  const { children } = props;

  const session = await auth();

  return (
    <SWRConfig
      value={{
        fallback: {
          [unstable_serialize(authKey)]: session
        }
      }}
    >
      {children}
    </SWRConfig>
  );
}
