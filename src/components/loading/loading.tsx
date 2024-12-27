import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";

type LoadingProps = {
  size?: Size;
  className?: string;
};

const sizes: Record<Size, string> = {
  sm: "w-[0.25rem] h-[0.25rem]",
  md: "w-[0.3rem] h-[0.3rem]",
  lg: "w-[0.35rem] h-[0.35rem]"
};

const gaps: Record<Size, string> = {
  sm: "gap-[0.12rem]",
  md: "gap-[0.15rem]",
  lg: "gap-[0.2rem]"
};

/**
 *
 * @param size
 * @param color background-color class for change dot color.
 * @param className
 * @constructor
 */
export function Loading({ size = "md", className }: LoadingProps) {
  const renderDot = ({ className }: { className?: string }) => (
    <span
      className={cn(
        "animate-in fill-mode-backwards direction-alternate repeat-infinite rounded-full bg-current duration-500",
        sizes[size],
        className
      )}
    />
  );
  return (
    <div
      data-slot="loading"
      className={cn("flex items-center justify-center", gaps[size], className)}
    >
      {renderDot({ className: "fade-in-25" })}
      {renderDot({ className: "fade-in-25 delay-100" })}
      {renderDot({ className: "fade-in-25 delay-200" })}
    </div>
  );
}
