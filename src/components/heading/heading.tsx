"use client";

import { ElementType, ReactNode, Ref, useMemo } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "cva";
import { forwardRefWithAs, HasDisplayName, RefProp, render } from "@/lib/utils/render";
import { Props } from "@/lib/utils/render/types";

const heading = cva({
  base: "leading-relaxed text-on-surface font-bold",
  variants: {
    variant: {
      h1: "text-3xl",
      h2: "text-2xl",
      h3: "text-xl",
      h4: "text-lg",
      h5: "text-base",
      h6: "text-sm",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

const DEFAULT_HEADING_TAG = "h1";

export type HeadingProps<TTag extends ElementType = typeof DEFAULT_HEADING_TAG> = Props<
  TTag,
  object,
  never,
  {
    children?: ReactNode;
  } & VariantProps<typeof heading>
>;

type HeadingRenderPropArg = object;

function HeadingFn<TTag extends ElementType = typeof DEFAULT_HEADING_TAG>(
  props: HeadingProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const { className, variant, ...otherProps } = props as HeadingProps<typeof DEFAULT_HEADING_TAG>;

  const slot = useMemo(() => {
    return {} satisfies HeadingRenderPropArg;
  }, []);

  const resolvedClassName = typeof className === "function" ? className(slot) : className;

  const ourProps = {
    ref,
    "data-slot": "heading",
    className: cn(heading({ variant }), resolvedClassName),
  };

  return render({
    ourProps,
    theirProps: otherProps,
    slot,
    defaultTag: DEFAULT_HEADING_TAG,
    name: "Heading",
  });
}

interface _internal_ComponentHeading extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_HEADING_TAG>(
    props: HeadingProps<TTag> & RefProp<typeof HeadingFn<TTag>>
  ): ReactNode;
}

const Heading = forwardRefWithAs(HeadingFn) as unknown as _internal_ComponentHeading;

export { Heading };
