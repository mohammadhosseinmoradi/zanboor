import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type BodyProps = ComponentProps<"tbody">;

const Body = forwardRef<HTMLTableSectionElement, BodyProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <tbody
        ref={ref}
        className={cn(
          "[&>tr:last-child]:border-b-0 [&>tr]:border-b",
          className,
        )}
        {...otherProps}
      />
    );
  },
);

Body.displayName = "Body";

export { Body };
