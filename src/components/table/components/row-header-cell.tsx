import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type RowHeaderCellProps = ComponentProps<"th">;

const RowHeaderCell = forwardRef<HTMLTableCellElement, RowHeaderCellProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <th ref={ref} scope="row" className={cn("px-4 py-3 text-start", className)} {...otherProps} />
    );
  }
);

RowHeaderCell.displayName = "RowHeaderCell";

export { RowHeaderCell };
