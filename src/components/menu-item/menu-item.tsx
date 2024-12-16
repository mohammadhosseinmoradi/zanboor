import { ElementType, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";
import { Text } from "@/components/text";
import { Props } from "@/lib/utils/render/types";
import { render } from "@/lib/utils/render";

const DEFAULT_MENU_ITEM_TAG = "div";

type MenuItemRenderPropArg = {
  className?: string;
};

export type MenuItemProps<TTag extends ElementType = typeof DEFAULT_MENU_ITEM_TAG> = Props<
  TTag,
  object,
  never,
  {
    ref?: Ref<HTMLElement>;
    title: string;
    description?: string;
    startSlot?: (props: MenuItemRenderPropArg) => ReactNode;
    endSlot?: (props: MenuItemRenderPropArg) => ReactNode;
    className?: string;
  }
>;

export default function MenuItem<TTag extends ElementType = typeof DEFAULT_MENU_ITEM_TAG>(
  props: MenuItemProps<TTag>
) {
  const {
    ref,
    as = DEFAULT_MENU_ITEM_TAG,
    title,
    description,
    startSlot,
    endSlot,
    className,
    ...theirProps
  } = props;

  const ourProps = {
    ref,
    as: as as ElementType,
    className: cn(
      "hover:bg-surface-container-highest grid [&>svg]:stroke-[1.5px] grid-cols-[auto_1fr_auto] items-center rounded-xl transition select-none",
      "cursor-pointer",
      className
    ),
    children: (
      <>
        {startSlot && startSlot({ className: "col-start-1 row-span-2 me-4" })}
        <div
          className={cn(
            "text-on-surface col-start-2 flex items-center text-base",
            !description && "row-span-2"
          )}
        >
          {title}
        </div>
        {description && (
          <Text className="col-start-2 row-start-2 mt-1 line-clamp-1 text-sm">{description}</Text>
        )}
        {endSlot && endSlot({ className: "col-start-3 row-span-2 ms-2" })}
      </>
    ),
  };

  return render({
    ourProps,
    theirProps,
    slot: {},
    defaultTag: DEFAULT_MENU_ITEM_TAG,
    name: "MenuItem",
  });
}
