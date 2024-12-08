"use client";

import { Toaster as Sonner } from "sonner";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { CircleAlertIcon, CircleCheckIcon } from "lucide-react";
import { useTheme } from "next-themes";

export type ToasterProps = ComponentProps<typeof Sonner>;

export function Toaster(props: ToasterProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme as "light" | "dark"}
      className="font-[iranyekan]"
      position="top-left"
      cn={cn}
      dir="rtl"
      icons={{
        success: <CircleCheckIcon className="text-success size-5" />,
        error: <CircleAlertIcon className="text-error size-5" />,
      }}
      toastOptions={{
        classNames: {
          title: "text-on-surface",
          toast: "shadow rounded-lg select-none",
        },
      }}
      {...props}
    />
  );
}
