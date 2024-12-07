"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { InputGroupContext } from "@/components/input-group/context";

type InputGroupProps = {
  className?: string;
  children?: ReactNode;
};

export function InputGroup(props: InputGroupProps) {
  const { className, ...otherProps } = props;

  return (
    <InputGroupContext.Provider value={true}>
      <div
        data-slot="control"
        className={cn(
          "relative flex overflow-hidden",
          "rounded-lg bg-bg-50 dark:bg-black/10",
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:transition after:focus-within:border-2 after:focus-within:border-primary after:has-[[data-invalid]]:border-error after:has-[[data-invalid]]:focus-within:border-error",
          className
        )}
        {...otherProps}
      />
    </InputGroupContext.Provider>
  );
}
