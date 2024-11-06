import { CSSProperties, forwardRef, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimateHeightProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

const AnimateHeight = forwardRef<HTMLDivElement, AnimateHeightProps>((props, ref) => {
  const { className, children, style, ...otherProps } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const observedHeight = entries[0].contentRect.height;
      setHeight(observedHeight);
    });

    observer.observe(containerRef.current);

    return () => {
      // Cleanup the observers when the component is unmounted.
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col overflow-hidden transition-all duration-300 ease-in-out",
        className
      )}
      style={{ height, ...style }}
      {...otherProps}
    >
      <div ref={containerRef}>{children}</div>
    </div>
  );
});

AnimateHeight.displayName = "AnimateHeight";

export { AnimateHeight };
