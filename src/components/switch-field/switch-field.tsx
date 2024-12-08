"use client";

import { Field } from "@headlessui/react";
import { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type InputFieldProps = {
  className?: string;
  children?: ReactNode;
  required?: boolean;
  style?: CSSProperties;
};

export function SwitchField(props: InputFieldProps) {
  const { className, required, ...otherProps } = props;

  return (
    <Field
      data-slot="input-field"
      className={cn(
        "grid grid-cols-[1fr_auto] place-content-start gap-2",
        "[&>[data-slot=label]]:row-start-1",
        "[&>[data-slot=control]]:row-start-1",
        "[&>[data-slot=description]]:col-span-full [&>[data-slot=description]]:row-start-2",
        required &&
          "[&>[data-slot=label]]:after:text-error [&>[data-slot=label]]:after:ms-0.5 [&>[data-slot=label]]:after:content-['*']",
        className
      )}
      {...otherProps}
    />
  );
}
