import { cloneElement, isValidElement, ReactNode, useEffect, useRef } from "react";

export type AutoFocusProps = {
  /**
   * Focus after ms
   * @default 300
   */
  wait?: number;
  children: ReactNode;
};

export function AutoFocus(props: AutoFocusProps) {
  const { wait = 300, children } = props;

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!ref.current) return;
      ref.current?.focus();
    }, wait);
  }, []);

  if (!isValidElement(children)) return children;

  const setNodeRef = (_ref: HTMLElement | null) => {
    const childRef = (children as any).ref;
    ref.current = _ref;
    if (typeof childRef === "function") childRef(_ref);
  };

  return cloneElement(children, {
    ref: setNodeRef,
  } as any);
}
