"use client";

import { ListboxOption, ListboxOptionProps } from "@headlessui/react";
import { ElementType, Ref } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { useIsAnchorSelection } from "@/components/listbox-dropdown/use-is-anchor-selection";

const DEFAULT_OPTION_TAG = "button";

type OptionProps<TTag extends ElementType = typeof DEFAULT_OPTION_TAG> =
  ListboxOptionProps<
    TTag,
    any // eslint-disable-line
  > & {
    ref?: Ref<HTMLElement>;
  };

function Option<TTag extends ElementType = typeof DEFAULT_OPTION_TAG>(
  props: OptionProps<TTag>
) {
  const {
    ref,
    className,
    as = DEFAULT_OPTION_TAG,
    children,
    ...otherProps
  } = props as OptionProps<typeof DEFAULT_OPTION_TAG>;

  const isAnchorSelection = useIsAnchorSelection();

  return (
    <ListboxOption
      ref={ref}
      as={as}
      className={(bag) =>
        cn(
          "group/option rounded-lg focus:outline-none",
          "px-3 py-2 text-start text-base/6 sm:text-sm/5",
          "text-on-surface data-[focus]:bg-primary data-[focus]:text-on-primary",
          "cursor-pointer data-[disabled]:cursor-not-allowed",
          "col-span-full forced-color-adjust-none data-[disabled]:opacity-50",
          "grid",
          isAnchorSelection
            ? "grid-cols-[0px_1fr] sm:grid-cols-[1.5rem,1fr]"
            : "grid-cols-[1.5rem,1fr]",
          "[&>*[data-slot$=icon]]:stroke-[1.5px]",
          "[&>[data-slot=icon]]:col-start-1 [&>[data-slot=icon]]:row-start-1",
          "[&>[data-slot=icon]]:me-2.5 [&>[data-slot=icon]]:size-5 sm:[&>[data-slot=icon]]:me-2",
          "[&>[data-slot=icon]]:sm:size-4",
          "[&>[data-slot=icon]]:text-on-surface-variant [&>[data-slot=icon]]:data-[focus]:text-on-primary-muted",
          typeof className === "function" ? className(bag) : className
        )
      }
      {...otherProps}
    >
      {(bag) => (
        <>
          <span
            className={cn({
              "max-sm:hidden": isAnchorSelection
            })}
          >
            <CheckIcon
              data-slot="icon"
              className={cn(
                "hidden size-4 translate-y-0.5 self-center stroke-2",
                "group-data-[selected]/option:block"
              )}
            />
          </span>
          <span
            className={cn(
              "flex min-w-0 items-start [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0",
              "[&>[data-slot=icon]]:text-zinc-500 [&>[data-slot=icon]]:group-data-[focus]/option:text-white",
              "sm:[&>[data-slot=icon]]:size-4 forced-colors:[&>[data-slot=icon]]:text-[CanvasText]",
              "forced-colors:[&>[data-slot=icon]]:group-data-[focus]/option:text-[Canvas]",
              "col-start-2 [&>[data-slot=avatar]]:size-6 sm:[&>[data-slot=avatar]]:size-5"
            )}
          >
            {typeof children === "function" ? children(bag) : children}
          </span>
        </>
      )}
    </ListboxOption>
  );
}

Option.displayName = ListboxOption.displayName;

export { Option };
