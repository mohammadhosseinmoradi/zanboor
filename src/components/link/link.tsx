import _Link, { LinkProps as _LinkProps } from "next/link";
import { cva, VariantProps } from "cva";
import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";

const link = cva({
  base: "transition-colors [&:focus-visible]:ring-2 [&:focus-visible]:ring-offset-1 font-bold rounded",
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-on-surface",
      error: "text-error",
      warning: "text-warning",
      success: "text-success",
      info: "text-info"
    }
  },
  defaultVariants: {
    color: "primary"
  }
});

type LinkProps = _LinkProps &
  VariantProps<typeof link> & {
    className?: string;
    children?: ReactNode;
  };

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, color, ...otherProps } = props;

  return (
    <_Link
      ref={ref}
      {...otherProps}
      className={cn(
        link({
          color
        }),
        className
      )}
    />
  );
});

Link.displayName = "Link";

export { Link };
