import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CSSProperties, ReactNode, useEffect, useId, useRef } from "react";
import { useTabContext } from "@/components/scrollspy-tab/group";
import Tab from "@/components/scrollspy-tab/tab";
import clsx from "clsx";
import { motion } from "motion/react";

type ListProps = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};

export default function List({
  className,
  children,
  ...otherProps
}: ListProps) {
  const {
    state: { activeIndex }
  } = useTabContext();
  const swiper = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (!swiper.current) return;
    swiper.current?.slideTo(activeIndex);
  }, [activeIndex]);

  const id = useId();

  return (
    <div
      {...otherProps}
      className={clsx(
        "border-border bg-surface sticky flex w-full border-b",
        className
      )}
    >
      <Swiper
        onSwiper={(_swiper) => (swiper.current = _swiper)}
        slidesPerView="auto"
        loop={false}
        className="w-full max-w-full"
      >
        {(Array.isArray(children) ? children : [children])
          .filter((child) => !!child)
          .map((tab, index) => {
            return (
              <SwiperSlide
                key={index}
                className={clsx("relative !w-auto", {
                  "text-on-surface-hover": index === activeIndex,
                  "hover:text-on-surface-hover": index !== activeIndex
                })}
              >
                <Tab
                  onClick={() => {
                    swiper.current?.slideTo(index);
                  }}
                  {...tab.props}
                  className={clsx(
                    "min-w-[4rem] text-center transition-all",
                    tab.props?.className
                  )}
                  index={index}
                >
                  {tab.props?.children}
                </Tab>
                {index === activeIndex && (
                  <motion.div
                    layoutId={id}
                    className="bg-primary absolute bottom-0 h-0.5 w-full"
                  />
                )}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
