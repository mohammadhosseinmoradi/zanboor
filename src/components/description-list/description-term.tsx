import { cva, VariantProps } from "cva";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const descriptionTerm = cva({
  base: "text-on-surface-variant",
});

type DescriptionTermProps = {
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof descriptionTerm>;

export function DescriptionTerm(props: DescriptionTermProps) {
  const { className, ...otherProps } = props;

  return <dt className={cn(descriptionTerm({}), className)} {...otherProps} />;
}
