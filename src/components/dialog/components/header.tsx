import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useDialogContext } from "@/components/dialog/context";

type HeaderProps = {
  compact?: boolean;
  className?: string;
  children?: ReactNode;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ compact, className, children, ...otherProps }, ref) => {
    const {
      state: { bodyScrollState }
    } = useDialogContext();

    return (
      <div
        ref={ref}
        data-slot="header"
        className={cn(
          "relative z-20",
          !compact && "p-4 lg:p-6",
          compact && "p-2",
          "transition [&>[data-slot=description]]:text-sm [&>[data-slot=title]+[data-slot=description]]:mt-1.5",
          {
            "shadow-lg":
              !!bodyScrollState?.isScrolled && !bodyScrollState?.isBeginning
          },
          className
        )}
        {...otherProps}
      >
        <div className="bg-fg-disabled absolute top-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full lg:hidden" />
        {children}
      </div>
    );
  }
);

Header.displayName = "Header";

export { Header };
