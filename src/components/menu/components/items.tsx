import { MenuItems, Transition, MenuItemsProps, TransitionChild } from "@headlessui/react";
import { ForwardedRef, forwardRef, Fragment, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";
import useBreakpoint from "@/hooks/use-breakpoint";
import { Drawer, DrawerChildren, DrawerRenderArgs } from "@/components/drawer/drawer";
import { useMenuContext } from "@/components/menu/context";
import { useDrawerContext } from "@/components/drawer";
import { ScrollArea } from "@/components/scroll-area";
import InlineComponent from "@/components/deprecated/inline-component";
import { syncRefs } from "@/lib/utils/sync-refs";

const Items = forwardRef<HTMLDivElement, MenuItemsProps<"div">>((props, ref) => {
  const { anchor, className, children, static: staticProp, ...otherProps } = props;

  const isMobile = useBreakpoint("max-lg");
  const { open, snapPoint, close } = useMenuContext();

  return (
    <Transition as={Fragment} show={open}>
      <ConditionDrawer
        snapPoint={snapPoint}
        open={open}
        onClose={close}
        isDrawer={isMobile}
        // Only on small screens
        className="z-50 flex h-dvh flex-col transition duration-300 ease-in-out data-[closed]:opacity-0"
        onClick={(e) => {
          if (!isMobile) return;
          e.preventDefault();
          close();
        }}
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
              <div className="fixed inset-0 z-10 bg-backdrop backdrop-blur-sm" />
            </TransitionChild>
          ) : undefined
        }
      >
        {({ isFullscreen, ref, forwardedProps }) => (
          <InlineComponent>
            {() => {
              const drawer = useDrawerContext();

              return (
                <ScrollArea>
                  {({ setNodeRef, isScrolled }) => (
                    <TransitionChild as={Fragment}>
                      <MenuItems
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

                          "z-50 flex flex-col overflow-hidden bg-bg max-lg:max-h-full lg:dark:bg-bg-200",
                          "pointer-events-auto border lg:shadow",
                          {
                            "max-lg:rounded-t-xl lg:rounded-rounded": !isFullscreen,
                          },
                          className
                        )}
                        {...drawer?.dragHandler?.listeners}
                        {...drawer?.dragHandler?.attributes}
                        {...forwardedProps}
                      >
                        {(bag) => (
                          <>
                            <div
                              className={cn("relative shrink-0 transition max-lg:h-6", {
                                "shadow-lg": isScrolled,
                              })}
                            >
                              <div className="absolute left-1/2 top-2 h-1 w-6 -translate-x-1/2 rounded-full bg-fg/50 lg:hidden" />
                            </div>
                            <div
                              ref={setNodeRef}
                              className={cn(
                                "overflow-y-auto",
                                "w-full p-1 outline outline-1 outline-transparent focus:outline-none supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto] max-lg:pb-4"
                              )}
                              // Prevent to onClick event to reach parent for close menu in mobile.
                              onClick={(event) => event.stopPropagation()}
                            >
                              {typeof children === "function" ? children(bag) : children}
                            </div>
                          </>
                        )}
                      </MenuItems>
                    </TransitionChild>
                  )}
                </ScrollArea>
              );
            }}
          </InlineComponent>
        )}
      </ConditionDrawer>
    </Transition>
  );
});

Items.displayName = MenuItems.displayName;

const ConditionDrawer = forwardRef<
  HTMLDivElement,
  {
    open: boolean;
    onClose: () => void;
    children?: (
      args: DrawerRenderArgs & {
        ref: ForwardedRef<HTMLDivElement>;
        forwardedProps: any;
      }
    ) => ReactNode;
    className?: string;
    isDrawer?: boolean;
    snapPoint?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    overlay?: ReactNode;
  }
>(({ isDrawer, children, open, onClose, snapPoint, className, ...otherProps }, ref) => {
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

export { Items };
