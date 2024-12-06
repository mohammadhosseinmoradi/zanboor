import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type HeaderProps = ComponentProps<"thead">;

const Header = forwardRef<HTMLTableSectionElement, HeaderProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <thead
        ref={ref}
        className={cn("[&>tr:last-child]:border-b-0 [&>tr]:border-b", "border-b", className)}
        {...otherProps}
      />
    );
  }
);

Header.displayName = "Header";

export { Header };
