import { Field } from "@headlessui/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CheckboxFieldProps = {
  className?: string;
  children?: ReactNode;
};

export function CheckboxField(props: CheckboxFieldProps) {
  const { className, children, ...otherProps } = props;

  return (
    <Field
      className={cn(
        "grid grid-cols-[auto_1fr] items-start gap-2",
        // Checkbox slot
        "[&>[data-slot=control]]:row-start-1",
        "[&>[data-slot=control]]:col-start-1",
        // label slot
        "[&>[data-slot=label]]:font-bold",
        "[&>[data-slot=label]]:row-start-1",
        "[&>[data-slot=label]]:col-start-2",
        // Description slot
        "[&>[data-slot=description]]:row-start-2",
        "[&>[data-slot=description]]:col-start-2",
        // Error slot
        "[&>[data-slot=error-message]]:row-start-2",
        "[&>[data-slot=error-message]]:col-start-2",
        className
      )}
      {...otherProps}
    >
      {children}
    </Field>
  );
}
