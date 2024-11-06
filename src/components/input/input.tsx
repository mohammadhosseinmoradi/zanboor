"use client";

import { Input as HeadlessInput, InputProps } from "@headlessui/react";
import { useInputGroupContext } from "@/components/input-group/context";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const { className, style, invalid, ...otherProps } = props;
  const isInInputGroup = useInputGroupContext();

  return (
    <span
      data-slot="control"
      className={cn(
        "relative flex w-full",
        !isInInputGroup &&
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-rounded after:border after:border-border after:transition after:focus-within:border-2 after:focus-within:border-primary after:has-[[data-invalid]]:border-error after:has-[[data-invalid]]:focus-within:border-error",
        className
      )}
      style={style}
    >
      <HeadlessInput
        ref={ref}
        className={cn(
          "w-full min-w-0 appearance-none bg-transparent px-3 py-2 text-base/6 placeholder:text-fg-disabled disabled:cursor-not-allowed sm:text-sm/5",
          !isInInputGroup &&
            "rounded-rounded bg-bg-50 focus:border-transparent disabled:text-fg-disabled data-[invalid]:border-error dark:bg-black/10"
        )}
        invalid={invalid}
        {...otherProps}
      />
    </span>
  );
});

Input.displayName = "Input";

export { Input };
