import { ReactNode, useEffect, useState } from "react";
import Panel from "@/components/scrollspy-tab/panel";
import { InView } from "react-intersection-observer";
import { useTabContext } from "@/components/scrollspy-tab/group";

type PanelsProps = {
  className?: string;
  children: ReactNode;
};

export default function Panels({ className, children, ...otherProps }: PanelsProps) {
  const { state, dispatch } = useTabContext();
  const [entries, setEntries] = useState<{
    [index: number]: IntersectionObserverEntry;
  }>({});

  useEffect(() => {
    for (const index in entries) {
      if (entries[index].isIntersecting) {
        dispatch((prevState) => ({
          ...prevState,
          activeIndex: +index,
        }));
        break;
      }
    }
  }, [dispatch, entries]);

  return (
    <div {...otherProps} className={`flex flex-col ${className}`}>
      {(Array.isArray(children) ? children : [children])
        .filter((child) => !!child)
        .map((panel, index) => {
          return (
            <InView
              key={index}
              threshold={state.threshold}
              rootMargin={`${state.offsetTop}px 0px 0px 0px`}
              onChange={(inView, entry) => {
                setEntries((prevState) => ({
                  ...prevState,
                  [index]: entry,
                }));
              }}
            >
              {({ ref }) => <Panel ref={ref} {...panel.props} index={index} />}
            </InView>
          );
        })}
    </div>
  );
}
