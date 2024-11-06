import {
  Fieldset as HeadlessFieldset,
  FieldsetProps as HeadlessFieldsetProps,
} from "@headlessui/react";
import { cva, VariantProps } from "cva";
import { cn } from "@/lib/utils";

const fieldset = cva({});

type FieldsetProps = HeadlessFieldsetProps & VariantProps<typeof fieldset>;

export function Fieldset(props: FieldsetProps) {
  const { as, className, ...otherProps } = props;

  return <HeadlessFieldset as="fieldset" className={cn(fieldset({}), className)} {...otherProps} />;
}
