"use client";

import { ReactNode, useState } from "react";
import { AuthContext, AuthContextProps, AuthSetContext } from "@/modules/auth/context";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  const [context, setContext] = useState<AuthContextProps>({});

  return (
    <AuthContext.Provider value={context}>
      <AuthSetContext.Provider value={setContext}>{children}</AuthSetContext.Provider>
    </AuthContext.Provider>
  );
}
