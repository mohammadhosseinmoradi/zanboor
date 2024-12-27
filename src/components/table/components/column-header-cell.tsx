import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ColumnHeaderCell = ComponentProps<"th">;

const ColumnHeaderCell = forwardRef<HTMLTableCellElement, ColumnHeaderCell>(
  ({ className, ...otherProps }, ref) => {
    return (
      <th
        ref={ref}
        className={cn(
          "text-on-surface-variant px-4 py-2 text-start font-bold",
          className
        )}
        {...otherProps}
      />
    );
  }
);

ColumnHeaderCell.displayName = "ColumnHeaderCell";

export { ColumnHeaderCell };
