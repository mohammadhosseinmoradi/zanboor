import {
  TabGroup as HeadlessTabGroup,
  TabGroupProps as HeadlessGroupProps,
} from "@headlessui/react";
import { ComponentRef, ElementType, Fragment, ReactNode, Ref, useId } from "react";
import { cn } from "@/lib/utils";
import { TabContext } from "./context";
import { useControllable } from "@/hooks/use-controllable";
import { TabVariant } from "@/components/tab/types";
import { forwardRefWithAs, HasDisplayName, RefProp } from "@/lib/utils/render";
import { ConditionRender } from "@/components/condition-render";

const DEFAULT_TABS_TAG = "div";

export type TabGroupProps<TTag extends ElementType = typeof DEFAULT_TABS_TAG> =
  HeadlessGroupProps<TTag> & {
    /**
     * Tab variant
     */
    variant?: TabVariant;
  };

/**
 *
 */
function GroupFn<TTag extends ElementType = typeof DEFAULT_TABS_TAG>(
  props: TabGroupProps<TTag>,
  ref: Ref<ComponentRef<TTag>>
) {
  const {
    className,
    selectedIndex,
    defaultIndex = 0,
    onChange,
    as = "div",
    variant = "underline",
    ...otherProps
  } = props as TabGroupProps<"div">;

  const [selected, setSelected] = useControllable(selectedIndex, onChange, defaultIndex);

  const id = useId();

  return (
    <TabContext.Provider
      value={{
        id,
        selectedIndex: selected,
        onChange: setSelected,
        variant,
      }}
    >
      <ConditionRender
        if={(as as any) === Fragment}
        then={(props) => {
          return (
            <HeadlessTabGroup
              as={as}
              ref={ref as Ref<HTMLDivElement>}
              selectedIndex={selected}
              onChange={setSelected}
              {...props}
            />
          );
        }}
        else={(props) => {
          return (
            <HeadlessTabGroup
              as={as}
              ref={ref as Ref<HTMLDivElement>}
              className={cn("flex flex-col", className)}
              selectedIndex={selected}
              onChange={setSelected}
              {...props}
            />
          );
        }}
        {...otherProps}
      />
    </TabContext.Provider>
  );
}

export interface _internal_ComponentTabGroup extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_TABS_TAG>(
    props: TabGroupProps<TTag> & RefProp<typeof GroupFn<TTag>>
  ): ReactNode;
}

const Group = forwardRefWithAs(GroupFn) as unknown as _internal_ComponentTabGroup;

export { Group };
