import { ElementType, ReactNode, Ref, useMemo } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "cva";
import { forwardRefWithAs, HasDisplayName, RefProp, render } from "@/lib/utils/render";
import { Props } from "@/lib/utils/render/types";

const badge = cva({
  base: cn(
    "relative flex z-10 justify-center min-w-max items-center shrink-0 rounded-lg font-bold",
    "[--badge-offset:theme(spacing[2.5])]"
  ),
  variants: {
    variant: {
      filled: "",
      filledTonal: "",
      outlined:
        "after:pointer-events-none after:absolute after:inset-0 after:border after:rounded-lg",
    },
    color: {
      primary: "",
      success: "",
      warning: "",
      error: "",
    },
    size: {
      sm: cn(
        "py-1 px-1.5 min-w-5 gap-1 text-xs/3 [&:has([data-slot=icon])]:px-1 [&_[data-slot$=icon]]:size-3"
      ),
      lg: "px-2 py-1.5 gap-1.5 min-w-4 text-xs/3 [&:has([data-slot=icon])]:p-1.5 [&_[data-slot$=icon]]:size-4",
      dot: "size-2",
    },
    anchor: {
      topStart: "absolute bottom-full end-full",
      topEnd: "absolute bottom-full start-full",
      bottomStart: "absolute top-full end-full",
      bottomEnd: "absolute top-full start-full",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      anchor: "topStart",
      className: "translate-y-[--badge-offset] -translate-x-[--badge-offset]",
    },
    {
      size: "sm",
      anchor: "topEnd",
      className: "translate-y-[--badge-offset] translate-x-[--badge-offset]",
    },
    {
      size: "sm",
      anchor: "bottomStart",
      className: "-translate-y-[--badge-offset] -translate-x-[--badge-offset]",
    },
    {
      size: "sm",
      anchor: "bottomEnd",
      className: "-translate-y-[--badge-offset] translate-x-[--badge-offset]",
    },
    // -----------------------------------------------------------------------------------------------------------------
    {
      size: "dot",
      anchor: "topStart",
      className:
        "translate-y-[calc(var(--badge-offset)-0.25rem)] -translate-x-[calc(var(--badge-offset)-0.25rem)]",
    },
    {
      size: "dot",
      anchor: "topEnd",
      className:
        "translate-y-[calc(var(--badge-offset)-0.25rem)] translate-x-[calc(var(--badge-offset)-0.25rem)]",
    },
    {
      size: "dot",
      anchor: "bottomStart",
      className:
        "-translate-y-[calc(var(--badge-offset)-0.25rem)] -translate-x-[calc(var(--badge-offset)-0.25rem)]",
    },
    {
      size: "dot",
      anchor: "bottomEnd",
      className:
        "-translate-y-[calc(var(--badge-offset)-0.25rem)] translate-x-[calc(var(--badge-offset)-0.25rem)]",
    },
    // -----------------------------------------------------------------------------------------------------------------
    {
      variant: "filled",
      color: "primary",
      className: "bg-primary text-primary-fg",
    },
    {
      variant: "filled",
      color: "success",
      className: "bg-success text-success-fg",
    },
    {
      variant: "filled",
      color: "warning",
      className: "bg-warning text-warning-fg",
    },
    {
      variant: "filled",
      color: "error",
      className: "bg-error text-error-fg",
    },
    // -----------------------------------------------------------------------------------------------------------------
    {
      variant: "filledTonal",
      color: "primary",
      className: "bg-primary/15 text-primary",
    },
    {
      variant: "filledTonal",
      color: "success",
      className: "bg-success/15 text-success",
    },
    {
      variant: "filledTonal",
      color: "warning",
      className: "bg-warning/15 text-warning",
    },
    {
      variant: "filledTonal",
      color: "error",
      className: "bg-error/15 text-error",
    },
    // -----------------------------------------------------------------------------------------------------------------
    {
      variant: "outlined",
      color: "primary",
      className: "bg-primary/5 text-primary after:border-primary",
    },
    {
      variant: "outlined",
      color: "success",
      className: "bg-success/5 text-success after:border-success",
    },
    {
      variant: "outlined",
      color: "warning",
      className: "bg-warning/5 text-warning after:border-warning",
    },
    {
      variant: "outlined",
      color: "error",
      className: "bg-error/5 text-error after:border-error",
    },
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary",
    size: "sm",
  },
});

const DEFAULT_BADGE_TAG = "div";

export type BadgeProps<TTag extends ElementType = typeof DEFAULT_BADGE_TAG> = Props<
  TTag,
  {},
  never,
  {
    children?: ReactNode;
  } & VariantProps<typeof badge>
>;

type BadgeRenderPropArg = {};

function BadgeFn<TTag extends ElementType = typeof DEFAULT_BADGE_TAG>(
  props: BadgeProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const { className, variant, color, size, anchor, ...theirProps } = props as BadgeProps<
    typeof DEFAULT_BADGE_TAG
  >;

  const slot = useMemo(() => {
    return {} satisfies BadgeRenderPropArg;
  }, []);

  const resolvedClassName = typeof className === "function" ? className(slot) : className;

  const ourProps = {
    ref,
    "data-slot": "badge",
    className: cn(badge({ variant, color, size, anchor }), resolvedClassName),
  };

  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_BADGE_TAG,
    name: "Badge",
  });
}

interface _internal_ComponentBadge extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_BADGE_TAG>(
    props: BadgeProps<TTag> & RefProp<typeof BadgeFn<TTag>>
  ): ReactNode;
}

const Badge = forwardRefWithAs(BadgeFn) as unknown as _internal_ComponentBadge;

export { Badge };
