"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { ArrowRightIcon } from "lucide-react";
import { Heading } from "@/components/heading";
import { useRouter } from "next/navigation";

type PageLayoutProps = {
  title: string;
  actions?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function PageLayout(props: PageLayoutProps) {
  const { title, actions, className, children } = props;

  const router = useRouter();

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-2 p-2">
        <div className="flex grow items-center gap-2">
          <Button variant="plain" color="secondary" onClick={() => router.back()}>
            <ArrowRightIcon data-slot="icon" />
          </Button>
          <Heading as="h2" variant="h5">
            {title}
          </Heading>
        </div>
        {actions}
      </div>
      <div className="flex grow flex-col">{children}</div>
    </div>
  );
}
