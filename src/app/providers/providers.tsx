import { ReactNode } from "react";
import { SWRProvider } from "@/app/providers/swr-provider";
import TopLoading from "@/app/providers/top-loading";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Toaster } from "@/components/sonner";
import { SessionProvider } from "@/modules/auth/session-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SWRProvider>
      <SessionProvider>
        <TopLoading />
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </SessionProvider>
    </SWRProvider>
  );
}
