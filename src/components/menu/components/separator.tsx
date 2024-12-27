import {
  MenuSeparator as HeadlessMenuSeparator,
  MenuSeparatorProps
} from "@headlessui/react";
import { cn } from "@/lib/utils";

export function Separator(props: MenuSeparatorProps<"div">) {
  const { className, ...otherProps } = props;

  return (
    <HeadlessMenuSeparator
      className={cn(
        "border-border col-span-5 col-start-1 mx-2 my-1 border-t",
        className
      )}
      {...otherProps}
    />
  );
}
