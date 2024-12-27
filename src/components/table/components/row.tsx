import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type RowProps = ComponentProps<"tr">;

const Row = forwardRef<HTMLTableRowElement, RowProps>(
  ({ className, ...otherProps }, ref) => {
    return <tr ref={ref} className={cn("", className)} {...otherProps} />;
  }
);

Row.displayName = "Row";

export { Row };
