import { Textarea as _Textarea, TextareaProps } from "@headlessui/react";
import { useInputGroupContext } from "@/components/input-group/context";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, style, invalid, ...otherProps } = props;
  const isInputGroup = useInputGroupContext();

  return (
    <span
      data-slot="control"
      className={cn(
        "relative flex w-full",
        !isInputGroup &&
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-rounded after:border-2 after:border-transparent after:transition focus-within:after:border-primary",
        !isInputGroup && invalid && "focus-within:after:border-error"
      )}
      style={style}
    >
      <_Textarea
        ref={ref}
        className={cn(
          "w-full min-w-0 appearance-none rounded-rounded bg-transparent px-3 py-2 text-base/6 placeholder:text-fg-disabled sm:text-sm/5",
          !isInputGroup &&
            "border bg-bg-50 focus:border-transparent data-[invalid]:border-error dark:bg-black/10"
        )}
        invalid={invalid}
        {...otherProps}
      />
    </span>
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
