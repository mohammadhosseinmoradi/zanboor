import { cn } from "@/lib/utils";
import { MouseEventHandler, ReactNode } from "react";
import { Button } from "@/components/button";
import { ArrowRightIcon } from "lucide-react";
import { Heading } from "@/components/heading";

type ContainerProps = {
  title: string;
  backButton?: {
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };
  children?: ReactNode;
  className?: string;
};

export default function AuthContainer(props: ContainerProps) {
  const { title, backButton, children, className } = props;

  return (
    <div
      className={cn(
        "flex min-w-full flex-col bg-bg max-lg:min-h-dvh lg:min-w-[26rem] lg:rounded-rounded lg:border",
        className
      )}
    >
      <div className="flex items-center gap-2 p-2">
        <Button variant="plain" color="secondary" {...backButton}>
          <ArrowRightIcon data-slot="icon" />
        </Button>
        <Heading as="h1" variant="h5" className="line-clamp-1">
          {title}
        </Heading>
      </div>
      <div className="flex grow flex-col justify-center border-t p-4">{children}</div>
    </div>
  );
}
