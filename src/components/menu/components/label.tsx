import { Label as HeadlessLabel, LabelProps } from "@headlessui/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Label = forwardRef<HTMLLabelElement, LabelProps<"label">>(
  ({ className, ...otherProps }, ref) => (
    <HeadlessLabel
      ref={ref}
      className={cn("col-start-2 row-start-1 text-start", className)}
      {...otherProps}
    />
  )
);

Label.displayName = HeadlessLabel.displayName;

export { Label };
