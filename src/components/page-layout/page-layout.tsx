"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { ArrowRightIcon } from "lucide-react";
import { Heading } from "@/components/heading";
import { useRouter } from "next/navigation";

type PageLayoutProps = {
  header: {
    title: string | ReactNode;
    actions?: ReactNode;
    backButton?: {
      className?: string;
    };
    className?: string;
  };
  className?: string;
  children?: ReactNode;
};

export function PageLayout(props: PageLayoutProps) {
  const { header, className, children } = props;

  const router = useRouter();

  return (
    <div className={cn("flex flex-col", className)}>
      <div className={cn("flex items-center gap-2 p-2", header.className)}>
        <div className="flex shrink-0 grow items-center gap-2">
          <Button
            variant="plain"
            color="secondary"
            onClick={() => router.back()}
            className={header?.backButton?.className}
          >
            <ArrowRightIcon data-slot="icon" />
          </Button>
          {typeof header.title == "string" ? (
            <Heading as="h2" variant="h5">
              {header.title}
            </Heading>
          ) : (
            header.title
          )}
        </div>
        {header.actions}
      </div>
      <div className="flex grow flex-col">{children}</div>
    </div>
  );
}
