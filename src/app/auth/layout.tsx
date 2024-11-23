"use client";

import { ReactNode } from "react";
import { AuthProvider } from "@/modules/auth/context";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return <AuthProvider>{children}</AuthProvider>;
}
