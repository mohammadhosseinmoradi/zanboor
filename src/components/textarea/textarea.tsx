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
          "focus-within:after:border-primary after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:border-2 after:border-transparent after:transition",
        !isInputGroup && invalid && "focus-within:after:border-error"
      )}
      style={style}
    >
      <_Textarea
        ref={ref}
        className={cn(
          "placeholder:text-on-surface-disabled w-full min-w-0 appearance-none rounded-lg bg-transparent px-3 py-2 text-base/6 sm:text-sm/5",
          !isInputGroup &&
            "bg-surface-bright data-[invalid]:border-error border focus:border-transparent dark:bg-black/10"
        )}
        invalid={invalid}
        {...otherProps}
      />
    </span>
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
