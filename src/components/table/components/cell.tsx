import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type CellProps = ComponentProps<"td">;

const Cell = forwardRef<HTMLTableCellElement, CellProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <td
        ref={ref}
        className={cn("px-4 py-3 text-start text-fg", className)}
        {...otherProps}
      />
    );
  },
);

Cell.displayName = "Cell";

export { Cell };
