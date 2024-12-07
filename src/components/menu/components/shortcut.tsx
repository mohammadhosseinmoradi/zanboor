import { Description, DescriptionProps } from "@headlessui/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ShortcutProps = DescriptionProps<"kbd"> & {
  keys: string;
};

const Shortcut = forwardRef<HTMLElement, ShortcutProps>((props, ref) => {
  const { className, keys, ...otherProps } = props;

  return (
    <kbd
      ref={ref}
      className={cn("col-start-5 row-start-1 flex justify-self-end text-on-surface-variant", className)}
      {...otherProps}
    >
      {keys.split("").map((key, index) => {
        return (
          <kbd
            key={index}
            className="text-zinc-400 group-data-[focus]:text-white min-w-[2ch] text-center font-sans capitalize"
          >
            {key}
          </kbd>
        );
      })}
    </kbd>
  );
});

Shortcut.displayName = Description.displayName;

export { Shortcut };
