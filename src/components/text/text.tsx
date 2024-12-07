"use client";

import { ElementType, ReactNode, Ref, useMemo } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "cva";
import { forwardRefWithAs, HasDisplayName, RefProp, render } from "@/lib/utils/render";
import { Props } from "@/lib/utils/render/types";

const text = cva({
  base: "leading-relaxed text-on-surface-variant",
  variants: {
    variant: {
      body: "text-base",
      regular: "text-sm",
      caption: "text-xs",
    },
  },
  defaultVariants: {
    variant: "regular",
  },
});

const DEFAULT_TEXT_TAG = "p";

export type TextProps<TTag extends ElementType = typeof DEFAULT_TEXT_TAG> = Props<
  TTag,
  {},
  never,
  {
    children: ReactNode;
  } & VariantProps<typeof text>
>;

type TextRenderPropArg = {};

function TextFn<TTag extends ElementType = typeof DEFAULT_TEXT_TAG>(
  props: TextProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const { className, variant, ...otherProps } = props as TextProps<typeof DEFAULT_TEXT_TAG>;

  const slot = useMemo(() => {
    return {} satisfies TextRenderPropArg;
  }, []);

  const resolvedClassName = typeof className === "function" ? className(slot) : className;

  const ourProps = {
    ref,
    "data-slot": "text",
    className: cn(text({ variant }), resolvedClassName),
  };

  return render({
    ourProps,
    theirProps: otherProps,
    slot,
    defaultTag: DEFAULT_TEXT_TAG,
    name: "Text",
  });
}

interface _internal_ComponentText extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_TEXT_TAG>(
    props: TextProps<TTag> & RefProp<typeof TextFn<TTag>>
  ): ReactNode;
}

const Text = forwardRefWithAs(TextFn) as unknown as _internal_ComponentText;

export { Text };
