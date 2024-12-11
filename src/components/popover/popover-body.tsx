import { ComponentPropsWithoutRef, forwardRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/scroll-area";
import { syncRefs } from "@/lib/utils/sync-refs";
import { usePopoverContext } from "@/components/popover/context";

const PopoverBody = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...otherProps }, ref) => {
    const { open, setBodyScrollState } = usePopoverContext();

    useEffect(() => {
      if (!open) return;
      setBodyScrollState(null);
    }, [open, setBodyScrollState]);

    return (
      <ScrollArea onScroll={(data) => setBodyScrollState(data)}>
        {({ setNodeRef }) => (
          <div
            ref={syncRefs(ref, setNodeRef)}
            data-slot="body"
            className={cn("grow overflow-y-auto", className)}
            {...otherProps}
          />
        )}
      </ScrollArea>
    );
  }
);

PopoverBody.displayName = "PopoverBody";

export { PopoverBody };
