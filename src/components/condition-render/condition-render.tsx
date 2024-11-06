import { forwardRef, ReactNode } from "react";

export type ConditionRenderProps = {
  if: boolean;
  then: (props: any & { children?: any }) => ReactNode;
  else: (props: any & { children?: any }) => ReactNode;
  children?: any;
};

const ConditionRender = forwardRef<ReactNode, ConditionRenderProps>(
  (props: ConditionRenderProps, ref) => {
    const { if: ifProp, then: thenProp, else: elseProp, ...otherProps } = props;
    return ifProp ? thenProp({ ...otherProps, ref }) : elseProp({ ...otherProps, ref });
  }
);

ConditionRender.displayName = "ConditionRender";

export { ConditionRender };
