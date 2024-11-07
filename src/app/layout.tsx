import type { Metadata } from "next";
import "@/styles/globals.css";
import { iranYekan } from "@/styles/fonts/iran-yekan";
import Providers from "@/app/providers/providers";
import { cn } from "@/lib/utils";

const APP_NAME = "همسرجو";

export async function generateMetadata(): Promise<Metadata> {
  return {
    applicationName: APP_NAME,
    title: {
      template: `%s | ${APP_NAME}`,
      default: APP_NAME,
    },
    openGraph: {
      siteName: APP_NAME,
      type: "website",
      locale: "rtl",
    },
    manifest: "/manifest.json",
    icons: {
      shortcut: "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <body className={cn(iranYekan.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
