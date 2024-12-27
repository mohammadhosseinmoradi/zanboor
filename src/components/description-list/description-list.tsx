import { cva, VariantProps } from "cva";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const descriptionList = cva({
  base: "grid text-sm"
});

type DescriptionListProps = {
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof descriptionList>;

export function DescriptionList(props: DescriptionListProps) {
  const { className, ...otherProps } = props;

  return (
    <dl
      data-slot="description-list"
      className={cn(descriptionList({}), className)}
      {...otherProps}
    />
  );
}
