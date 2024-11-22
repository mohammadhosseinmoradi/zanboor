import type { Metadata } from "next";
import { iranYekan } from "@/styles/fonts/iran-yekan";
import Providers from "@/app/providers/providers";
import { cn } from "@/lib/utils";
import "swiper/css";
import "@/styles/globals.css";

const APP_NAME = "زنبور";

export async function generateMetadata(): Promise<Metadata> {
  return {
    applicationName: APP_NAME,
    title: {
      template: `%s | ${APP_NAME}`,
      default: "زنبور | ازدواج دائم و موقت ،قرار ملاقات، چت، آشنایی با افراد جدید",
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
