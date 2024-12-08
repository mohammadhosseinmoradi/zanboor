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
          "bg-surface-bright rounded-lg dark:bg-black/10",
          "after:border-border after:focus-within:border-primary after:has-[[data-invalid]]:border-error after:has-[[data-invalid]]:focus-within:border-error after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:border after:transition after:focus-within:border-2",
          className
        )}
        {...otherProps}
      />
    </InputGroupContext.Provider>
  );
}
