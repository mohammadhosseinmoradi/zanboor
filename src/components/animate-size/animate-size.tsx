import {
  CSSProperties,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState
} from "react";
import { cn } from "@/lib/utils";

type AnimateSizeProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

const AnimateSize = forwardRef<HTMLDivElement, AnimateSizeProps>(
  (props, ref) => {
    const { className, children, style, ...otherProps } = props;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number | "auto">("auto");
    const [height, setHeight] = useState<number | "auto">("auto");

    useEffect(() => {
      if (!containerRef.current) return;

      const observer = new ResizeObserver((entries) => {
        const observedWidth = entries[0].contentRect.width;
        const observedHeight = entries[0].contentRect.height;
        setWidth(observedWidth);
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
          "relative flex overflow-hidden transition-all duration-300 ease-in-out",
          className
        )}
        style={{ width, height, ...style }}
        {...otherProps}
      >
        <div className="absolute start-0 top-0" ref={containerRef}>
          {children}
        </div>
      </div>
    );
  }
);

AnimateSize.displayName = "AnimateSize";

export { AnimateSize };
