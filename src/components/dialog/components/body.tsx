import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/scroll-area";
import { useDialogContext } from "@/components/dialog/context";
import { syncRefs } from "@/lib/utils/sync-refs";

const Body = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>((props, ref) => {
  const { className, ...otherProps } = props;

  const { setState } = useDialogContext();

  return (
    <ScrollArea
      onScroll={(data) => {
        setState((prevState) => ({
          ...prevState,
          bodyScrollState: data,
        }));
      }}
    >
      {({ setNodeRef }) => {
        return (
          <div
            ref={syncRefs(ref, setNodeRef)}
            data-slot="body"
            className={cn("grow overflow-y-auto p-4 lg:p-6", className)}
            {...otherProps}
          />
        );
      }}
    </ScrollArea>
  );
});

Body.displayName = "Dialog.Body";

export { Body };
