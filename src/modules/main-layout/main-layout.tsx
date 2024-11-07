"use client";

import { ReactNode } from "react";
import BottomNavBar from "@/modules/main-layout/components/bottom-nav-bar";
import Footer from "@/modules/main-layout/components/footer";
import { cn } from "@/lib/utils";

type MainLayoutProps = {
  children?: ReactNode;
  className?: string;
};

export function MainLayout(props: MainLayoutProps) {
  const { children, className } = props;

  return (
    <div className={cn("flex min-h-dvh grow flex-col", className)}>
      <main className="flex grow flex-col">{children}</main>
      <Footer />
      <BottomNavBar />
    </div>
  );
}
