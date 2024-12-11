import {
  TabPanel as HeadlessTabPanel,
  TabPanelProps as HeadlessPanelProps,
} from "@headlessui/react";
import { ElementType, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";
import { forwardRefWithAs, HasDisplayName, RefProp } from "@/lib/utils/render";

const DEFAULT_PANEL_TAG = "div";

export type TabPanelProps<TTag extends ElementType = typeof DEFAULT_PANEL_TAG> =
  HeadlessPanelProps<TTag>;

function PanelFn<TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(
  props: TabPanelProps<TTag>,
  ref: Ref<HTMLDivElement>
) {
  const {
    className,
    as = DEFAULT_PANEL_TAG,
    ...otherProps
  } = props as TabPanelProps<typeof DEFAULT_PANEL_TAG>;

  return (
    <HeadlessTabPanel
      ref={ref}
      as={as}
      static
      className={cn("w-full", className)}
      {...otherProps}
    />
  );
}

interface _internal_ComponentTabPanel extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(
    props: TabPanelProps<TTag> & RefProp<typeof PanelFn<TTag>>
  ): ReactNode;
}

const Panel = forwardRefWithAs(PanelFn) as unknown as _internal_ComponentTabPanel;

export { Panel };
