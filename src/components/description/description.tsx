import {
  Description as HeadlessDescription,
  DescriptionProps
} from "@headlessui/react";
import { cn } from "@/lib/utils";
import { cva } from "cva";

const description = cva({
  base: "leading-relaxed text-on-surface-variant data-[disabled]:opacity-50 text-sm",
  variants: {
    variant: {
      regular: "text-sm",
      caption: "text-xs"
    }
  },
  defaultVariants: {
    variant: "regular"
  }
});

/**
 * Description component for providing additional context or information.
 *
 * This component can be used in multiple contexts, such as fields, dialogs, popovers, and other
 * UI elements where an auxiliary description is required. It utilizes the HeadlessDescription component
 * and applies specific styling.
 */
export function Description(props: DescriptionProps<"p">) {
  const { as, className, children, ...otherProps } = props;

  if (!children) return null;

  return (
    <HeadlessDescription
      as={as}
      data-slot="description"
      className={cn(description({}), className)}
      {...otherProps}
    >
      {children}
    </HeadlessDescription>
  );
}
