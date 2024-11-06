"use client";

import { ThemeProvider as _ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  return (
    <_ThemeProvider
      attribute="class"
      enableSystem
      themes={["light", "dark"]}
      storageKey="theme"
    >
      {children}
    </_ThemeProvider>
  );
}
