import {
  Popover as HeadlessPopover,
  PopoverProps as HeadlessPopoverProps,
} from "@headlessui/react";
import { PopoverContext } from "@/components/popover/context";
import { useState } from "react";
import { ScrollStateProps } from "@/components/scroll-area";

type PopoverProps = {
  /**
   * Ex: 50% or 300px
   */
  snapPoint?: string;
} & HeadlessPopoverProps;

export function Popover(props: PopoverProps) {
  const { snapPoint, children, ...otherProps } = props;

  const [bodyScrollState, setBodyScrollState] = useState<ScrollStateProps | null>(null);

  return (
    <HeadlessPopover {...otherProps}>
      {(bag) => (
        <PopoverContext.Provider
          value={{
            open: bag.open,
            snapPoint,
            close: bag.close,
            bodyScrollState,
            setBodyScrollState,
          }}
        >
          {typeof children === "function" ? children(bag) : children}
        </PopoverContext.Provider>
      )}
    </HeadlessPopover>
  );
}
