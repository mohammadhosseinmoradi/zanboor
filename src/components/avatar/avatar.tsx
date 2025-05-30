"use client";

import { ElementType, ReactNode, Ref, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "cva";
import {
  forwardRefWithAs,
  HasDisplayName,
  RefProp,
  render
} from "@/lib/utils/render";
import { Props } from "@/lib/utils/render/types";
import Image, { ImageProps } from "next/image";
import { AVATAR_IMG } from "@/lib/constants/common";

const avatar = cva({
  base: "inline-grid shrink-0 align-middle *:col-start-1 *:row-start-1 rounded-full *:rounded-full",
  variants: {},
  compoundVariants: [],
  defaultVariants: {}
});

const DEFAULT_AVATAR_TAG = "span";

export type AvatarProps<TTag extends ElementType = typeof DEFAULT_AVATAR_TAG> =
  Props<
    TTag,
    object,
    never,
    {
      initials?: string;
      src?: string | null;
      alt?: string;

      children?: never;
    } & VariantProps<typeof avatar> &
      Pick<ImageProps, "sizes" | "width" | "height">
  >;

function AvatarFn<TTag extends ElementType = typeof DEFAULT_AVATAR_TAG>(
  props: AvatarProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const [imageError, setImageError] = useState(false);

  const { className, initials, src, alt, width, height, sizes, ...otherProps } =
    props as AvatarProps<"button">;

  const resolvedClassName =
    typeof className === "function" ? className : className;

  useEffect(() => {
    setImageError(false);
  }, [src]);

  const ourProps = {
    "data-slot": "avatar",
    className: cn(avatar({}), resolvedClassName),
    children: (
      <>
        {(() => {
          if (src && !imageError) {
            return (
              <Image
                ref={ref as Ref<HTMLImageElement>}
                onError={() => {
                  setImageError(true);
                }}
                className="aspect-square size-full object-cover"
                src={src}
                width={width || 500}
                height={height || 500}
                quality={75}
                sizes={sizes}
                alt={alt || ""}
              />
            );
          } else if (initials) {
            return (
              <svg
                ref={ref as Ref<SVGSVGElement>}
                className="text-on-surface fill-current text-4xl font-medium tracking-wide uppercase select-none"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <text
                  x="50%"
                  y="50%"
                  alignmentBaseline="middle"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  dy="0.125em"
                >
                  {initials}
                </text>
              </svg>
            );
          } else {
            return (
              <Image
                ref={ref as Ref<HTMLImageElement>}
                className="aspect-square size-full object-cover"
                src={AVATAR_IMG}
                width={width || 500}
                height={height || 500}
                sizes={sizes}
                alt={alt || ""}
              />
            );
          }
        })()}
      </>
    )
  };

  return render({
    ourProps,
    theirProps: otherProps,
    slot: {},
    defaultTag: DEFAULT_AVATAR_TAG,
    name: "Avatar"
  });
}

interface _internal_ComponentAvatar extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_AVATAR_TAG>(
    props: AvatarProps<TTag> & RefProp<typeof AvatarFn<TTag>>
  ): ReactNode;
}

/**
 *
 */
const Avatar = forwardRefWithAs(
  AvatarFn
) as unknown as _internal_ComponentAvatar;

export { Avatar };
