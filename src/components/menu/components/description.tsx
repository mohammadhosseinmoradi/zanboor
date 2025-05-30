import { Description as HeadlessDescription } from "@headlessui/react";
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Description = forwardRef<
  ComponentRef<typeof HeadlessDescription>,
  ComponentPropsWithoutRef<typeof HeadlessDescription>
>(({ className, ...otherProps }, ref) => (
  <HeadlessDescription
    ref={ref}
    data-slot="description"
    className={cn(
      "col-span-2 col-start-2 row-start-2 text-start text-sm/5 text-zinc-500 group-data-[focus]:text-white lg:text-xs/5 dark:text-zinc-400",
      className
    )}
    {...otherProps}
  />
));

Description.displayName = HeadlessDescription.displayName;

export { Description };
