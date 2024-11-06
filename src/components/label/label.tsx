import { Label as HeadlessLabel, LabelProps } from "@headlessui/react";
import { cn } from "@/lib/utils";

export function Label(props: LabelProps<"label">) {
  const { className, ...otherProps } = props;

  return (
    <HeadlessLabel
      data-slot="label"
      className={cn("cursor-pointer select-none text-sm text-fg", className)}
      {...otherProps}
    />
  );
}
