import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type CellProps = ComponentProps<"td">;

const Cell = forwardRef<HTMLTableCellElement, CellProps>(({ className, ...otherProps }, ref) => {
  return (
    <td
      ref={ref}
      className={cn("text-on-surface px-4 py-3 text-start", className)}
      {...otherProps}
    />
  );
});

Cell.displayName = "Cell";

export { Cell };
