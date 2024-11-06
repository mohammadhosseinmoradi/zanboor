import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/heading";

const Title = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"h3">>(
  ({ className, ...otherProps }, ref) => {
    return (
      <Heading
        ref={ref}
        as="h3"
        variant="h6"
        data-slot="title"
        className={cn("text-base/6 font-bold", className)}
        {...otherProps}
      />
    );
  }
);

Title.displayName = "Title";

export { Title };
