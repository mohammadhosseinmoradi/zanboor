import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type TableProps = ComponentProps<"table">;

const Table = forwardRef<HTMLTableElement, TableProps>(function (
  { className, ...otherProps },
  ref
) {
  return (
    <table
      ref={ref}
      className={cn("border-collapse text-sm", className)}
      {...otherProps}
    />
  );
});

Table.displayName = "Table";

export { Table };
