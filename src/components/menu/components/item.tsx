"use client";

import { MenuItem, MenuItemProps } from "@headlessui/react";
import { ComponentRef, ElementType, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";
import { forwardRefWithAs } from "@/lib/utils/render";
import { HasDisplayName, RefProp } from "@/lib/utils/render";
import { cva, VariantProps } from "cva";

const DEFAULT_ITEM_TAG = "button" as const;

const item = cva({
  base: cn(
    "w-full group cursor-pointer rounded-lg px-4 px-3.5 py-2 focus:outline-none",
    "text-start text-base/6 lg:text-sm/5",
    "text-fg",
    "forced-colors:text-[CanvasText] data-[focus]:bg-primary data-[focus]:text-primary-fg",
    "data-[disabled]:opacity-50 forced-color-adjust-none col-span-full",
    "data-[disabled]:cursor-not-allowed",
    "grid grid-cols-[auto_1fr_auto] items-center",
    "supports-[grid-template-columns:subgrid]:grid-cols-subgrid",

    "[&>*[data-slot$=icon]]:stroke-[1.5px]",
    // Start icon
    "[&>[data-slot=start-icon]]:col-start-1 [&>[data-slot=start-icon]]:row-start-1 [&>[data-slot=start-icon]]:row-span-2",
    "[&>[data-slot=start-icon]]:me-4 lg:[&>[data-slot=start-icon]]:me-2.5 [&>[data-slot=start-icon]]:size-6 lg:[&>[data-slot=start-icon]]:size-5",
    "[&>[data-slot=start-icon]]:data-[focus]:text-primary-fg",
    // End icon
    "[&>[data-slot=end-icon]]:col-start-3 [&>[data-slot=end-icon]]:row-start-1 [&>[data-slot=end-icon]]:row-span-2",
    "[&>[data-slot=end-icon]]:ms-2.5 [&>[data-slot=end-icon]]:size-6 lg:[&>[data-slot=end-icon]]:size-5",
    "[&>[data-slot=end-icon]]:data-[focus]:text-primary-fg"
  ),
  variants: {
    variant: {
      outlined: "border",
      plain: "",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "plain",
  },
});

export type ItemProps<TTag extends ElementType = typeof DEFAULT_ITEM_TAG> = MenuItemProps<TTag> &
  VariantProps<typeof item> & {};

function ItemFn<TTag extends ElementType = typeof DEFAULT_ITEM_TAG>(
  props: ItemProps<TTag>,
  ref: Ref<ComponentRef<TTag>>
) {
  const {
    as = DEFAULT_ITEM_TAG,
    className,
    children,
    variant,
    ...otherProps
  } = props as ItemProps<"button">;

  return (
    <MenuItem
      ref={ref as Ref<HTMLButtonElement>}
      as={as}
      className={(bag) =>
        cn(item({ variant }), typeof className === "function" ? className(bag) : className)
      }
      {...otherProps}
    >
      {(bag) => <>{typeof children === "function" ? children(bag) : children}</>}
    </MenuItem>
  );
}

interface _internal_ComponentItem extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_ITEM_TAG>(
    props: ItemProps<TTag> & RefProp<typeof ItemFn<TTag>>
  ): ReactNode;
}

const Item = forwardRefWithAs(ItemFn) as unknown as _internal_ComponentItem;

export { Item };
