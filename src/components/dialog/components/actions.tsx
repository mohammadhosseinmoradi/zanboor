import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionsProps = {
  compact?: boolean;
  className?: string;
  children?: ReactNode;
};

const Actions = forwardRef<HTMLDivElement, ActionsProps>(
  ({ compact, className, ...otherProps }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="actions"
        className={cn(
          "shrink-0",
          !compact && "p-4 lg:p-6",
          compact && "p-2",
          "flex flex-col gap-2 lg:flex-row-reverse lg:justify-start",
          className
        )}
        {...otherProps}
      />
    );
  }
);

Actions.displayName = "Actions";

export { Actions };
