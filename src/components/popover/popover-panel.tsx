import {
  PopoverPanel as HeadlessPopoverPanel,
  Transition,
  PopoverPanelProps,
  PopoverBackdrop,
  TransitionChild,
} from "@headlessui/react";
import { ForwardedRef, forwardRef, Fragment, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";
import useBreakpoint from "@/hooks/use-breakpoint";
import { Drawer, DrawerChildren, DrawerRenderArgs } from "@/components/drawer/drawer";
import { usePopoverContext } from "@/components/popover/context";
import { useDrawerContext } from "@/components/drawer";
import { syncRefs } from "@/lib/utils/sync-refs";
import InlineComponent from "@/components/inline-component";

const PopoverPanel = forwardRef<HTMLDivElement, PopoverPanelProps>((props, ref) => {
  const { anchor, className, children, ...otherProps } = props;

  const isMobile = useBreakpoint("max-lg");
  const { snapPoint, open, close } = usePopoverContext();

  return (
    <Transition as={Fragment} show={open}>
      <ConditionDrawer
        ref={ref}
        snapPoint={snapPoint}
        open={open}
        onClose={close}
        isDrawer={isMobile}
        // Only on small screens
        className="z-50 flex h-dvh flex-col transition duration-300 ease-in-out data-[closed]:opacity-0"
        overlay={
          isMobile ? (
            <TransitionChild
              as={Fragment}
              enter="transition duration-300 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition duration-200 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <PopoverBackdrop className="bg-fg/50 fixed inset-0 z-10" />
            </TransitionChild>
          ) : undefined
        }
        {...otherProps}
      >
        {({ isFullscreen, ref, forwardedProps }) => (
          <InlineComponent>
            {() => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const drawer = useDrawerContext();

              return (
                <TransitionChild as={Fragment}>
                  <HeadlessPopoverPanel
                    ref={syncRefs(ref, drawer?.dragHandler?.setNodeRef)}
                    as="div"
                    anchor={
                      isMobile
                        ? undefined
                        : typeof anchor === "string"
                          ? anchor
                          : {
                              to: "bottom start",
                              gap: "0.5rem",
                              padding: "1.5rem",
                              ...anchor,
                            }
                    }
                    className={cn(
                      "transition duration-300 ease-out lg:duration-200",
                      "data-[closed]:opacity-0 max-lg:data-[closed]:translate-y-full lg:data-[closed]:scale-90",
                      // Top
                      "data-[anchor~=top]:data-[anchor~=center]:origin-bottom",
                      "data-[anchor~=top]:data-[anchor~=start]:origin-bottom-right",
                      "data-[anchor~=top]:data-[anchor~=end]:origin-bottom-left",
                      // Right
                      "data-[anchor~=right]:data-[anchor~=center]:origin-left",
                      "data-[anchor~=right]:data-[anchor~=start]:origin-top-left",
                      "data-[anchor~=right]:data-[anchor~=end]:origin-bottom-left",
                      // Bottom
                      "data-[anchor~=bottom]:data-[anchor~=center]:origin-top",
                      "data-[anchor~=bottom]:data-[anchor~=start]:origin-top-right",
                      "data-[anchor~=bottom]:data-[anchor~=end]:origin-top-left",
                      // Left
                      "data-[anchor~=left]:data-[anchor~=center]:origin-right",
                      "data-[anchor~=left]:data-[anchor~=start]:origin-top-right",
                      "data-[anchor~=left]:data-[anchor~=end]:origin-bottom-right",

                      "bg-surface dark:bg-surface-bright z-50 flex max-h-full flex-col overflow-hidden",
                      "pointer-events-auto border lg:shadow",
                      {
                        "max-lg:rounded-t-xl lg:rounded-lg": !isFullscreen,
                      },
                      className
                    )}
                    modal
                    {...drawer?.dragHandler?.listeners}
                    {...drawer?.dragHandler?.attributes}
                    {...forwardedProps}
                  >
                    {children}
                  </HeadlessPopoverPanel>
                </TransitionChild>
              );
            }}
          </InlineComponent>
        )}
      </ConditionDrawer>
    </Transition>
  );
});

PopoverPanel.displayName = HeadlessPopoverPanel.displayName;

const ConditionDrawer = forwardRef<
  HTMLDivElement,
  {
    open: boolean;
    onClose: () => void;
    children?: (
      args: DrawerRenderArgs & {
        ref: ForwardedRef<HTMLDivElement>;
        forwardedProps: object;
      }
    ) => ReactNode;
    className?: string;
    isDrawer?: boolean;
    snapPoint?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    overlay?: ReactNode;
  }
>((props, ref) => {
  const { isDrawer, children, open, onClose, snapPoint, className, ...otherProps } = props;

  return isDrawer ? (
    <Drawer
      ref={ref}
      snapPoint={snapPoint}
      open={open}
      onClose={onClose}
      className={className}
      {...otherProps}
    >
      {children as DrawerChildren}
    </Drawer>
  ) : typeof children === "function" ? (
    children({ isFullscreen: false, ref, forwardedProps: otherProps })
  ) : (
    children
  );
});

ConditionDrawer.displayName = "ConditionDrawer";

export { PopoverPanel };
