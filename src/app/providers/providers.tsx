import { ReactNode } from "react";
import { SWRProvider } from "@/app/providers/swr-provider";
import TopLoading from "@/app/providers/top-loading";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Toaster } from "@/components/sonner";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SWRProvider>
      <TopLoading />
      <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
    </SWRProvider>
  );
}
