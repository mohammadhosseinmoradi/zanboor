import {
  TabPanels as HeadlessTabPanels,
  TabPanelsProps as HeadlessTabPanelsProps,
} from "@headlessui/react";
import { ElementType, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useTabContext } from "./context";
import { usePrevious } from "@/hooks/use-previous";
import { forwardRefWithAs, HasDisplayName, RefProp } from "@/lib/utils/render";

const DEFAULT_PANEL_TAG = "div";

export type TabPanelsProps<TTag extends ElementType = typeof DEFAULT_PANEL_TAG> =
  HeadlessTabPanelsProps<TTag> & {
    /**
     * If true, can swipe panel and navigate between tabs.
     */
    swipeable?: boolean;
  };

function PanelsFn<TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(
  props: TabPanelsProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const {
    as = DEFAULT_PANEL_TAG,
    className,
    children,
    swipeable,
    ...otherProps
  } = props as TabPanelsProps<"div">;

  const { selectedIndex, onChange } = useTabContext();
  const prevSelectedIndex = usePrevious(selectedIndex);
  const swipeDirection = selectedIndex > (prevSelectedIndex || 0);

  return (
    <HeadlessTabPanels
      as={as}
      ref={ref as Ref<HTMLDivElement>}
      className={(bag) =>
        cn(
          "translate-y-[0px] overflow-hidden",
          typeof className === "function" ? className(bag) : className
        )
      }
      {...otherProps}
    >
      {(bag) => {
        const resolvedChildren = typeof children === "function" ? children(bag) : children;

        const resolvedChildrenArray = (
          Array.isArray(resolvedChildren) ? resolvedChildren : [resolvedChildren]
        ) as ReactNode[];

        if (selectedIndex >= resolvedChildrenArray.length) return <></>;
        const selectedChild = resolvedChildrenArray[selectedIndex];

        return (
          <AnimatePresence initial={false} mode="popLayout" custom={swipeDirection}>
            {(() => {
              if (swipeable) {
                return (
                  <motion.div
                    key={selectedIndex}
                    custom={swipeDirection}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={variants}
                    drag="x"
                    dragConstraints={{
                      left: 0,
                      right: 0,
                    }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipeConfidenceThreshold = 10000;

                      const swipePower = (offset: number, velocity: number) => {
                        return Math.abs(offset) * velocity;
                      };

                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe > swipeConfidenceThreshold) {
                        if (selectedIndex < resolvedChildrenArray.length - 1)
                          onChange(selectedIndex + 1);
                      } else if (swipe < -swipeConfidenceThreshold) {
                        if (selectedIndex > 0) onChange(selectedIndex - 1);
                      }
                    }}
                    className="w-full"
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 22,
                    }}
                  >
                    {selectedChild}
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={selectedIndex}
                  custom={swipeDirection}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={variants}
                  className="w-full"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                  }}
                >
                  {selectedChild}
                </motion.div>
              );
            })()}
          </AnimatePresence>
        );
      }}
    </HeadlessTabPanels>
  );
}

interface _internal_ComponentTabPanels extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(
    props: TabPanelsProps<TTag> & RefProp<typeof PanelsFn<TTag>>
  ): ReactNode;
}

const Panels = forwardRefWithAs(PanelsFn) as unknown as _internal_ComponentTabPanels;

export { Panels };

const variants = {
  enter: (direction: boolean) => {
    return {
      x: direction ? "-100%" : "100%",
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: boolean) => {
    return {
      x: direction ? "100%" : "-100%",
      opacity: 0,
    };
  },
};
