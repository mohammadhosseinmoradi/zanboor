import { Legend as HeadlessLegend, LegendProps as HeadlessLegendProps } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "cva";

const legend = cva({
  base: "font-bold text-on-surface text-sm",
});

type LegendProps = HeadlessLegendProps<"legend"> & VariantProps<typeof legend>;

/**
 * Legend component for use within a fieldset.
 *
 * This component is used to render a legend inside a fieldset, providing a label or heading
 * for a group of related form elements. It leverages the HeadlessLegend component and applies
 * custom styles.
 *
 * @param props
 * @constructor
 */
export function Legend(props: LegendProps) {
  const { as, className, ...otherProps } = props;

  return (
    <HeadlessLegend
      as={as}
      data-slot="legend"
      className={cn(legend({}), className)}
      {...otherProps}
    />
  );
}
