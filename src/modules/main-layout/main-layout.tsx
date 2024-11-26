"use client";

import { ReactNode } from "react";
import NavBar from "@/modules/main-layout/components/nav-bar";
import Footer from "@/modules/main-layout/components/footer";
import { cn } from "@/lib/utils";
import SideBar from "@/modules/main-layout/components/side-bar";

type MainLayoutProps = {
  children?: ReactNode;
  className?: string;
};

export function MainLayout(props: MainLayoutProps) {
  const { children, className } = props;

  return (
    <div className={cn("flex min-h-dvh grow flex-col", className)}>
      <div className="flex grow">
        <SideBar className="static top-0 max-lg:hidden" />
        <main className="flex grow flex-col">{children}</main>
      </div>
      <Footer />
      <NavBar className="sticky inset-0 bottom-0 z-30 lg:hidden" />
    </div>
  );
}
