import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type FieldGroupProps = ComponentProps<"div">;

export function FieldGroup(props: FieldGroupProps) {
  const { className, ...otherProps } = props;

  return (
    <div data-slot="control" className={cn("", className)} {...otherProps} />
  );
}
