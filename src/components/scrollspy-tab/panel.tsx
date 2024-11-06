import { forwardRef, ReactNode } from "react";
import { useTabContext } from "@/components/scrollspy-tab/group";
import clsx from "clsx";

type PanelProps = {
  className?: string;
  children?: ReactNode;
  index?: number;
};

const Panel = forwardRef<HTMLDivElement, PanelProps>(function Panel(
  { className, index, ...otherProps },
  ref
) {
  const { state } = useTabContext();
  return (
    <div
      id={state.id + index}
      ref={ref}
      {...otherProps}
      className={clsx("flex flex-col", className)}
    />
  );
});

export default Panel;
