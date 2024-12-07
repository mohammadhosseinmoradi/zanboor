import { forwardRef, ReactNode } from "react";
import { cva, VariantProps } from "cva";
import { cn } from "@/lib/utils";

const divider = cva({
  base: "text-on-surface-variant text-sm border-border",
  variants: {
    vertical: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      vertical: true,
      className:
        "flex flex-col items-center data-[children]:gap-3 [&>span:first-child]:border-s [&>span:last-child]:border-s",
    },
    {
      vertical: false,
      className:
        "flex items-center data-[children]:gap-3 [&>span:first-child]:border-t [&>span:last-child]:border-t",
    },
  ],
  defaultVariants: {
    vertical: false,
  },
});

export type DividerProps = {
  children?: ReactNode;
  className?: string;
} & VariantProps<typeof divider>;

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { children, className, vertical, ...otherProps } = props;

  return (
    <div
      ref={ref}
      className={cn(
        divider({
          vertical,
        }),
        className
      )}
      {...(!!children && { "data-children": "" })}
      {...otherProps}
    >
      <span className="grow" />
      {children}
      <span className="grow" />
    </div>
  );
});

Divider.displayName = "Divider";

export { Divider };
