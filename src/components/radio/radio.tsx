import { forwardRef } from "react";
import { Radio as HeadlessRadio, RadioProps as HeadlessRadioProps } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "cva";

const radio = cva({
  base: cn(
    "relative flex justify-center items-center border-2 rounded-full size-4 shrink-0 cursor-pointer",
    "data-[focus]:ring-2 focus:ring-offset-2"
  ),
  variants: {
    color: {
      primary: "",
      secondary: "",
    },
    disabled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      disabled: false,
      className: cn(
        "border-primary",
        // data-slot=check
        "[&>[data-slot=check]]:hidden",
        "[&>[data-slot=check]]:bg-primary/40",
        "[&:hover>[data-slot=check]]:flex",
        "[&[data-checked]>[data-slot=check]]:flex",
        "[&[data-checked]>[data-slot=check]]:bg-primary"
      ),
    },
    {
      color: "secondary",
      disabled: false,
      className: cn(
        "border-secondary",
        // data-slot=check
        "[&>[data-slot=check]]:hidden",
        "[&>[data-slot=check]]:bg-secondary-fg",
        "[&:hover>[data-slot=check]]:flex",
        "[&[data-checked]>[data-slot=check]]:flex",
        "[&[data-checked]>[data-slot=check]]:bg-secondary"
      ),
    },
    {
      disabled: true,
      className: cn(
        "border-fg-disabled cursor-not-allowed",
        // data-slot=check
        "[&>[data-slot=check]]:hidden",
        "[&[data-checked]>[data-slot=check]]:flex",
        "[&[data-checked]>[data-slot=check]]:bg-fg-disabled"
      ),
    },
  ],
  defaultVariants: {
    color: "primary",
    disabled: false,
  },
});

type RadioProps = HeadlessRadioProps<"button"> & VariantProps<typeof radio>;

const Radio = forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const { className, as = "button", disabled, color, ...otherProps } = props;
  return (
    <HeadlessRadio
      ref={ref}
      data-slot="control"
      type="button"
      as={as}
      className={cn(
        radio({
          color,
          disabled,
        }),
        className
      )}
      disabled={disabled}
      {...otherProps}
    >
      <span data-slot="check" className="absolute inset-[2.5px] rounded-full" />
    </HeadlessRadio>
  );
});

Radio.displayName = HeadlessRadio.displayName;

export { Radio };
