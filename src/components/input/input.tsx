"use client";

import { Input as HeadlessInput, InputProps } from "@headlessui/react";
import { useInputGroupContext } from "@/components/input-group/context";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { className, style, invalid, ...otherProps } = props;
    const isInInputGroup = useInputGroupContext();

    return (
      <span
        data-slot="control"
        className={cn(
          "relative flex w-full",
          !isInInputGroup &&
            "after:border-border after:focus-within:border-primary after:has-[[data-invalid]]:border-error after:has-[[data-invalid]]:focus-within:border-error after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:border after:transition after:focus-within:border-2",
          className
        )}
        style={style}
      >
        <HeadlessInput
          ref={ref}
          className={cn(
            "text-on-surface placeholder:text-on-surface-disabled w-full min-w-0 appearance-none bg-transparent px-3 py-2 text-base/6 disabled:cursor-not-allowed sm:text-sm/5",
            !isInInputGroup &&
              "bg-surface-bright disabled:text-on-surface-disabled data-[invalid]:border-error rounded-lg focus:border-transparent dark:bg-black/10"
          )}
          invalid={invalid}
          {...otherProps}
        />
      </span>
    );
  }
);

Input.displayName = "Input";

export { Input };
