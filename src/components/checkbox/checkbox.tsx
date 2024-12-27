import { forwardRef } from "react";
import { Checkbox as HeadlessCheckbox, CheckboxProps } from "@headlessui/react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva } from "cva";

const checkbox = cva({
  base: cn(
    "flex justify-center items-center border-2 rounded size-4 cursor-pointer",
    "data-[focus]:ring-2 focus:ring-offset-2"
  ),
  variants: {
    color: {
      primary: ""
    },
    disabled: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      color: "primary",
      disabled: false,
      className: cn(
        "border-primary",
        "data-[checked]:bg-primary data-[checked]:text-on-primary",
        // data-slot=check
        "[&>[data-slot=check]]:hidden",
        "[&>[data-slot=check]]:text-primary/40",
        "[&:hover>[data-slot=check]]:flex",
        "[&[data-checked]>[data-slot=check]]:flex",
        "[&[data-checked]>[data-slot=check]]:text-bg"
      )
    },
    {
      disabled: true,
      className: cn(
        "border-neutral-400 cursor-not-allowed",
        "data-[checked]:bg-neutral-400 data-[checked]:text-white",
        // data-slot=check
        "[&>[data-slot=check]]:hidden",
        "[&[data-checked]>[data-slot=check]]:flex",
        "[&[data-checked]>[data-slot=check]]:text-white"
      )
    }
  ],
  defaultVariants: {
    color: "primary",
    disabled: false
  }
});

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps<"button">>(
  (props, ref) => {
    const { className, disabled, as = "button", ...otherProps } = props;

    return (
      <HeadlessCheckbox
        ref={ref}
        as={as}
        data-slot="control"
        className={cn(
          checkbox({
            disabled
          }),
          className
        )}
        disabled={disabled}
        {...otherProps}
        type="button"
      >
        <CheckIcon data-slot="check" className="size-3.5 stroke-[2.5px]" />
      </HeadlessCheckbox>
    );
  }
);

Checkbox.displayName = HeadlessCheckbox.displayName;

export { Checkbox };
