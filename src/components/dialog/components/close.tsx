import { Fragment, Ref } from "react";
import { CloseButton, CloseButtonProps } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { forwardRefWithAs } from "@/lib/utils/render";
import { XIcon } from "lucide-react";
import { Button } from "@/components/button";

type ButtonProps = CloseButtonProps<"button">;

function CloseFn(props: ButtonProps, ref: Ref<HTMLElement>) {
  const { className, children, type, as, ...otherProps } = props;

  return (
    <CloseButton ref={ref} as={Fragment} {...otherProps}>
      <Button className={cn("shrink-0", className)} variant="plain" color="secondary">
        <XIcon data-slot="icon" />
      </Button>
    </CloseButton>
  );
}

const Close = forwardRefWithAs(CloseFn);

export { Close };
