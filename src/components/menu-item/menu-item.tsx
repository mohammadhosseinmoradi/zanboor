import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";

type MenuItemRenderPropArg = {
  className?: string;
};

type MenuItemProps = {
  as?: "div" | "label";
  title: string;
  description?: string;
  startSlot?: (props: MenuItemRenderPropArg) => ReactNode;
  endSlot?: (props: MenuItemRenderPropArg) => ReactNode;
  className?: string;
};

export default function MenuItem(props: MenuItemProps) {
  const { as = "div", title, description, startSlot, endSlot, className } = props;

  const Comp = as;

  return (
    <Comp
      className={cn(
        "grid grid-cols-[auto_1fr_auto] rounded-lg transition select-none hover:bg-white/10",
        className
      )}
    >
      {startSlot && startSlot({ className: "col-start-1 me-4" })}
      <Heading
        as="h5"
        variant="h6"
        className={cn("col-start-2 flex items-center", !description && "row-span-2")}
      >
        {title}
      </Heading>
      {description && <Text className="col-start-2 row-start-2 line-clamp-1">{description}</Text>}
      {endSlot && endSlot({ className: "col-start-3 row-span-2 ms-2" })}
    </Comp>
  );
}
