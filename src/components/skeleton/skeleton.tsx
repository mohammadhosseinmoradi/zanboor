import styles from "./style.module.css";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

type SkeletonProps = ComponentPropsWithoutRef<"div">;

const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <span
      ref={ref}
      className={cn("relative block overflow-hidden bg-fg/5", styles.animateSkeleton, className)}
      {...otherProps}
    />
  );
});

Skeleton.displayName = "Skeleton";

export { Skeleton };
