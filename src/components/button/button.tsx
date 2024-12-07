"use client";

import { Button as HeadlessButton, ButtonProps as HeadlessButtonProps } from "@headlessui/react";
import { ElementType, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "cva";
import { forwardRefWithAs, HasDisplayName, RefProp } from "@/lib/utils/render";

const button = cva({
  base: cn(
    "relative flex justify-center items-center rounded-lg",
    "transition-colors select-none",
    "data-[focus]:ring-2 focus:ring-offset-2",

    // If loading indicator is child
    "[&>*[data-slot=loading]]:flex",
    "[&>*[data-slot=loading]]:items-center [&>*[data-slot=loading]]:justify-center",
    "[&>*[data-slot=loading]]:absolute",
    "[&>*[data-slot=loading]]:inset-0",
    // Hidden all button content expect loading indicator
    "[&:has([data-slot=loading])]:text-transparent",
    "[&:has([data-slot=loading])>*:not([data-slot=loading])]:opacity-0",

    // Chevron
    "[&_*[data-slot=dropdown-icon]]:transition",
    "[&[data-open]_*[data-slot=dropdown-icon]]:rotate-180"
  ),
  variants: {
    variant: {
      filled: "",
      filledTonal: "",
      outlined: "",
      plain: "focus:ring-offset-0",
    },
    color: {
      primary: "",
      secondary: "",
      error: "",
      warning: "",
      success: "",
      info: "",
    },
    size: {
      sm: cn(
        "px-2 py-1 text-sm/5 sm:text-xs/4 gap-1.5 [&>*[data-slot$=icon]]:size-5 sm:[&>*[data-slot$=icon]]:size-4 [&:has([data-slot=icon])]:px-1 [&>*[data-slot=dropdown-icon]]:size-3.5 [&>*[data-slot$=icon]]:stroke-[1.5px]",
        // Badge offset
        "[&_*[data-slot=badge]]:[--badge-offset:theme(spacing[4])]"
      ),
      md: cn(
        "px-3 py-2 text-base/6 sm:text-sm/5 gap-2 [&:has([data-slot=icon])]:px-2 [&>*[data-slot=dropdown-icon]]:size-4 [&>*[data-slot$=icon]]:size-6 sm:[&>*[data-slot$=icon]]:size-5 [&>*[data-slot$=icon]]:stroke-[1.5px]",
        // Badge offset
        "[&_*[data-slot=badge]]:[--badge-offset:calc(theme(spacing[4])+2px)]"
      ),
    },
    edge: {
      all: "-mx-3 -my-2",
      top: "-mt-2",
      "top start": "-mt-2 -ms-3",
      "top end": "-mt-2 -me-3",
      start: "-ms-3",
      end: "-me-3",
      "bottom start": "-mb-2 -ms-3",
      "bottom end": "-mb-2 -me-3",
      y: "-my-2",
      x: "-mx-3",
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer",
    },
  },
  compoundVariants: [
    // -----------------------------------------------------------------------------------------------------------------
    {
      variant: "filled",
      color: "primary",
      disabled: false,
      className:
        "bg-primary text-on-primary [&_div[data-slot=loading]]:text-on-primary [&_*[data-slot=dropdown-icon]]:text-on-primary-muted",
    },
    {
      variant: "filled",
      color: "primary",
      disabled: true,
      className:
        "bg-primary/60 text-on-primary-disabled [&_div[data-slot=loading]]:text-on-primary cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-on-primary-disabled",
    },
    {
      variant: "filled",
      color: "secondary",
      disabled: false,
      className:
        "bg-secondary text-on-secondary [&_div[data-slot=loading]]:text-on-secondary [&_*[data-slot=dropdown-icon]]:text-on-secondary-muted",
    },
    {
      variant: "filled",
      color: "secondary",
      disabled: true,
      className:
        "bg-secondary/60 text-on-secondary-disabled [&_div[data-slot=loading]]:text-on-secondary cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-on-secondary-disabled",
    },
    {
      variant: "filled",
      color: "error",
      disabled: false,
      className:
        "bg-error text-on-error [&_div[data-slot=loading]]:text-on-error [&_*[data-slot=dropdown-icon]]:text-on-error-muted",
    },
    {
      variant: "filled",
      color: "error",
      disabled: true,
      className:
        "bg-error/60 text-on-error-disabled [&_div[data-slot=loading]]:text-on-error cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-on-error-disabled",
    },
    {
      variant: "filled",
      color: "warning",
      disabled: false,
      className:
        "bg-warning text-on-warning [&_div[data-slot=loading]]:text-on-warning [&_*[data-slot=dropdown-icon]]:text-on-warning-muted",
    },
    {
      variant: "filled",
      color: "warning",
      disabled: true,
      className:
        "bg-warning/60 text-on-warning-disabled [&_div[data-slot=loading]]:text-on-warning cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-on-warning-disabled",
    },
    {
      variant: "filled",
      color: "success",
      disabled: false,
      className:
        "bg-success text-on-success [&_div[data-slot=loading]]:text-on-success [&_*[data-slot=dropdown-icon]]:text-on-success-muted",
    },
    {
      variant: "filled",
      color: "success",
      disabled: true,
      className:
        "bg-success/60 text-on-success-disabled [&_div[data-slot=loading]]:text-on-success cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-on-success-disabled",
    },
    {
      variant: "filled",
      color: "info",
      disabled: false,
      className:
        "bg-info text-on-info [&_div[data-slot=loading]]:text-on-info [&_*[data-slot=dropdown-icon]]:text-on-info-muted",
    },
    {
      variant: "filled",
      color: "info",
      disabled: true,
      className:
        "bg-info/60 text-on-info-disabled [&_div[data-slot=loading]]:text-on-info cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-on-info-disabled",
    },
    // -----------------------------------------------------------------------------------------------------------------
    {
      variant: "plain",
      color: "primary",
      disabled: false,
      className:
        "text-primary [&_div[data-slot=loading]]:text-primary [&_*[data-slot=dropdown-icon]]:text-primary/60",
    },
    {
      variant: "plain",
      color: "primary",
      disabled: true,
      className:
        "text-primary/60 [&_div[data-slot=loading]]:text-primary cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-primary/60",
    },
    {
      variant: "plain",
      color: "secondary",
      disabled: false,
      className:
        "text-on-surface [&_div[data-slot=loading]]:text-on-surface [&_*[data-slot=dropdown-icon]]:text-on-surface-variant",
    },
    {
      variant: "plain",
      color: "secondary",
      disabled: true,
      className:
        "text-on-surface-disabled [&_div[data-slot=loading]]:text-on-surface cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-on-surface-disabled",
    },
    {
      variant: "plain",
      color: "error",
      disabled: false,
      className:
        "text-error [&_div[data-slot=loading]]:text-error [&_*[data-slot=dropdown-icon]]:text-error/60",
    },
    {
      variant: "plain",
      color: "error",
      disabled: true,
      className:
        "text-error/60 [&_div[data-slot=loading]]:text-error cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-error/60",
    },
    {
      variant: "plain",
      color: "warning",
      disabled: false,
      className:
        "text-warning [&_div[data-slot=loading]]:text-warning [&_*[data-slot=dropdown-icon]]:text-warning/60",
    },
    {
      variant: "plain",
      color: "warning",
      disabled: true,
      className:
        "text-warning/60 [&_div[data-slot=loading]]:text-warning cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-warning/60",
    },
    {
      variant: "plain",
      color: "success",
      disabled: false,
      className:
        "text-success [&_div[data-slot=loading]]:text-success [&_*[data-slot=dropdown-icon]]:text-success/60",
    },
    {
      variant: "plain",
      color: "success",
      disabled: true,
      className:
        "text-success/60 [&_div[data-slot=loading]]:text-success cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-success/60",
    },
    {
      variant: "plain",
      color: "info",
      disabled: false,
      className:
        "text-info [&_div[data-slot=loading]]:text-info [&_*[data-slot=dropdown-icon]]:text-info/60",
    },
    {
      variant: "plain",
      color: "info",
      disabled: true,
      className:
        "text-info/60 [&_div[data-slot=loading]]:text-info cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-info/60",
    },
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary",
    size: "md",
    disabled: false,
  },
});

type DEFAULT_BUTTON_TAG = "button";

export type ButtonProps<TTag extends ElementType = DEFAULT_BUTTON_TAG> = HeadlessButtonProps<TTag> &
  VariantProps<typeof button>;

function ButtonFn<TTag extends ElementType = DEFAULT_BUTTON_TAG>(
  props: ButtonProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const {
    variant,
    color,
    size,
    disabled,
    className,
    type = "button",
    edge,
    ...otherProps
  } = props as ButtonProps<"button">;

  return (
    <HeadlessButton
      ref={ref as Ref<HTMLButtonElement>}
      data-slot="button"
      className={cn(
        button({
          variant,
          color,
          size,
          edge,
          disabled,
        }),
        className
      )}
      disabled={disabled}
      type={type}
      {...otherProps}
    />
  );
}

interface _internal_ComponentButton extends HasDisplayName {
  <TTag extends ElementType = DEFAULT_BUTTON_TAG>(
    props: ButtonProps<TTag> & RefProp<typeof ButtonFn<TTag>>
  ): ReactNode;
}

const Button = forwardRefWithAs(ButtonFn) as unknown as _internal_ComponentButton;

export { Button };
