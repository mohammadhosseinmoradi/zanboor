"use client";

import { ReactNode } from "react";
import { AuthProvider } from "@/modules/auth/context";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <AuthProvider>
      <div className="bg-surface my-auto flex min-h-dvh items-center justify-center p-4 lg:p-6">
        {children}
      </div>
    </AuthProvider>
  );
}
