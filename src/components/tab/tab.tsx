import { Tab as HeadlessTab, TabProps } from "@headlessui/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useTabContext } from "./context";
import { cva } from "cva";

const tab = cva({
  base: cn(
    "relative w-auto transition-all duration-300",
    "!flex gap-2 justify-center items-center",
    "px-4 py-3 text-sm/5 data-[selected]:font-bold",
    "text-on-surface data-[selected]:text-primary",
    "cursor-pointer",
    "[&>*[data-slot$=icon]]:size-5"
  ),
  variants: {
    variant: {
      highlight: "py-1",
      underline: "",
      none: "",
    },
    selected: {
      true: "",
      false: "z-10",
    },
  },
  compoundVariants: [
    {
      variant: "highlight",
      selected: false,
      className: "text-on-surface-variant",
    },
  ],
});

const tabIndicator = cva({
  base: "absolute bottom-0 inset-x-0 h-0.5 bg-primary",
  variants: {
    variant: {
      highlight: "bg-primary-200 h-full z-[-1]",
      underline: "",
      none: "h-[0px] bg-[transparent]",
    },
  },
});

const Tab = forwardRef<HTMLDivElement, TabProps<"div">>((props, ref) => {
  const { className, children, ...otherProps } = props;
  const { id, variant } = useTabContext();

  return (
    <HeadlessTab
      as={SwiperSlide}
      // @ts-expect-error ...
      tag="div"
      ref={ref}
      className={(bag) =>
        cn(
          variant !== "none" &&
            tab({
              variant,
              selected: bag.selected,
            }),
          typeof className === "function" ? className(bag) : className
        )
      }
      {...otherProps}
    >
      {(bag) => {
        return (
          <>
            {typeof children === "function" ? children(bag) : children}
            {variant !== "none" && bag.selected && (
              <motion.div
                className={cn(
                  tabIndicator({
                    variant,
                  })
                )}
                style={{ borderRadius: 9999 }}
                layoutId={id}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              />
            )}
          </>
        );
      }}
    </HeadlessTab>
  );
});

Tab.displayName = SwiperSlide.displayName;

export { Tab };
