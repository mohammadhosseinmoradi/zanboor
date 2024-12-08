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
      className={cn(
        "text-on-surface-variant col-start-5 row-start-1 flex justify-self-end",
        className
      )}
      {...otherProps}
    >
      {keys.split("").map((key, index) => {
        return (
          <kbd
            key={index}
            className="min-w-[2ch] text-center font-sans text-zinc-400 capitalize group-data-[focus]:text-white"
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
