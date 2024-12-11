import { Fragment } from "react";
import { CloseButton, CloseButtonProps } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { Button } from "@/components/button";

type ButtonProps = CloseButtonProps<"button">;

function Close(props: ButtonProps) {
  const { className, ...otherProps } = props;

  return (
    <CloseButton as={Fragment} {...otherProps}>
      <Button className={cn("shrink-0", className)} variant="plain" color="secondary">
        <XIcon data-slot="icon" />
      </Button>
    </CloseButton>
  );
}

export { Close };
