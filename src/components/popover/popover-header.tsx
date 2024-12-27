import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { usePopoverContext } from "@/components/popover/context";

const PopoverHeader = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const { className, children, ...otherProps } = props;

  const { bodyScrollState } = usePopoverContext();

  return (
    <div
      ref={ref}
      data-slot="header"
      className={cn(
        "relative shrink-0",
        "max-lg:min-h-4 [&>[data-slot=description]]:text-sm [&>[data-slot=title]+[data-slot=description]]:mt-1.5",
        {
          "shadow-lg":
            !!bodyScrollState?.isScrolled && !bodyScrollState?.isBeginning
        },
        className
      )}
      {...otherProps}
    >
      <div className="absolute top-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-neutral-400 lg:hidden" />
      {children}
    </div>
  );
});

PopoverHeader.displayName = "PopoverHeader";

export { PopoverHeader };
