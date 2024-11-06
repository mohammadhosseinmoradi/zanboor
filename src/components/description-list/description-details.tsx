import { cva, VariantProps } from "cva";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const descriptionDetails = cva({
  base: "font-bold text-fg",
});

type DescriptionDetailsProps = {
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof descriptionDetails>;

export function DescriptionDetails(props: DescriptionDetailsProps) {
  const { className, ...otherProps } = props;

  return <dt className={cn(descriptionDetails({}), className)} {...otherProps} />;
}
