import { Label as HeadlessLabel, LabelProps } from "@headlessui/react";
import { cn } from "@/lib/utils";

export function Label(props: LabelProps<"label">) {
  const { className, ...otherProps } = props;

  return (
    <HeadlessLabel
      data-slot="label"
      className={cn("text-on-surface cursor-pointer text-sm select-none", className)}
      {...otherProps}
    />
  );
}
