import { Switch as HeadlessSwitch, SwitchProps } from "@headlessui/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_SWITCH_TAG = "button";

const Switch = forwardRef<HTMLButtonElement, SwitchProps<typeof DEFAULT_SWITCH_TAG>>(
  (props, ref) => {
    const { className, as = DEFAULT_SWITCH_TAG, type = "button", ...otherProps } = props;

    return (
      <HeadlessSwitch
        ref={ref}
        as={as}
        type={type}
        data-slot="control"
        className={(bag) =>
          cn(
            "flex w-10 shrink-0 cursor-pointer rounded-full p-0.5 transition-all lg:w-9",
            "data-[focus]:ring-2 data-[focus]:ring-offset-2",
            "bg-surface-100 data-[checked]:bg-primary dark:bg-surface-200 dark:data-[checked]:bg-primary",
            "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]",
            "[&[data-checked]>span]:-translate-x-4",
            "lg:[&[data-checked]>span]:-translate-x-4",
            typeof className === "function" ? className(bag) : className
          )
        }
        {...otherProps}
      >
        <span className="bg-surface size-5 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.05)] transition-all duration-200 lg:size-4" />
      </HeadlessSwitch>
    );
  }
);

Switch.displayName = HeadlessSwitch.displayName;

export { Switch };
