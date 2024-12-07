import { ListboxButton, ListboxButtonProps } from "@headlessui/react";
import { ElementType, memo, ReactNode, Ref } from "react";
import { useListboxContext } from "@/components/listbox-dropdown/context";
import { cn } from "@/lib/utils";
import { forwardRefWithAs, HasDisplayName, RefProp } from "@/lib/utils/render";
import { Loading } from "@/components/loading";
import { ChevronsUpDownIcon } from "lucide-react";
import { cva, VariantProps } from "cva";

const DEFAULT_BUTTON_TAG = "button";

export const button = cva({
  base: cn(
    "relative flex items-center gap-2",
    "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:transition after:focus-within:border-2 after:focus-within:border-primary after:has-[[data-invalid]]:border-error after:has-[[data-invalid]]:focus-within:border-error",
    "min-w-0 px-3 py-2 text-base/6 disabled:cursor-not-allowed sm:text-sm/5",
    "rounded-lg focus:border-transparent text-on-surface disabled:text-on-surface-disabled",
    "[&>*[data-slot$=icon]]:size-6 [&>*[data-slot$=icon]]:stroke-[1.5px] sm:[&>*[data-slot$=icon]]:size-5 [&>*[data-slot=dropdown-icon]]:size-4",

    // If loading indicator is child
    "[&>*[data-slot=loading]]:flex",
    "[&>*[data-slot=loading]]:items-center [&>*[data-slot=loading]]:justify-center",
    "[&>*[data-slot=loading]]:absolute",
    "[&>*[data-slot=loading]]:inset-0",
    // Hidden all button content expect loading indicator
    "[&:has([data-slot=loading])]:text-transparent",
    "[&:has([data-slot=loading])>*:not([data-slot=loading])]:opacity-0",
    "[&_div[data-slot=loading]]:text-on-secondary",
    // Badge offset
    "[&_*[data-slot=badge]]:[--badge-offset:calc(theme(spacing[4])+2px)]"
  ),
  variants: {
    variant: {
      secondary: "bg-surface-bright dark:bg-black/10 data-[invalid]:after:border-error",
      plain:
        "after:border-transparent after:focus-within:border-transparent bg-transparent data-[invalid]:text-error",
    },
    stick: {
      start: "after:rounded-s-none",
      end: "after:rounded-e-none",
    },
    edge: {
      all: "-mx-3 -my-2",
      top: "-mt-2",
      "top start": "-mt-2 -ms-3",
      "top end": "-mt-2 -me-3",
      start: "-ms-3",
      end: "-me-3",
      "bottom start": "-mb-2 -ms-3",
      "bottom end": "-mb-2 -me-3",
      y: "-my-2",
      x: "-mx-3",
    },
  },
  compoundVariants: [
    {
      variant: "secondary",
      className: "data-[invalid]:border-error",
    },
  ],
  defaultVariants: {
    variant: "secondary",
  },
});

export type ButtonProps<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG> =
  ListboxButtonProps<TTag> &
    VariantProps<typeof button> & {
      placeholder?: string;
      invalid?: boolean;
    };

function ButtonFn<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(
  props: ButtonProps<TTag>,
  ref: Ref<HTMLButtonElement>
) {
  const {
    as = DEFAULT_BUTTON_TAG,
    children,
    className,
    variant,
    stick,
    edge,
    placeholder,
    invalid,
    ...otherProps
  } = props as ButtonProps<typeof DEFAULT_BUTTON_TAG>;

  const listboxContext = useListboxContext();
  const resolvedPlaceholder = placeholder || listboxContext.placeholder || "انتخاب";

  return (
    <ListboxButton
      ref={ref}
      as={as}
      data-slot="control"
      autoFocus={listboxContext.autoFocus}
      className={cn(
        button({
          variant: variant || listboxContext.variant,
          stick: stick || listboxContext.stick,
          edge: edge || listboxContext.edge,
        }),
        listboxContext.className,
        className
      )}
      {...(invalid || listboxContext.invalid ? { "data-invalid": "" } : {})}
      {...otherProps}
    >
      {(bag) => (
        <>
          <span className="line-clamp-1 grow text-start">
            {(() => {
              const resolvedChildren = typeof children == "function" ? children(bag) : children;
              if (resolvedChildren) return resolvedChildren;
              if (
                listboxContext.normalizeOptions.has(listboxContext.value as string) ||
                (Array.isArray(listboxContext.value) && listboxContext.value.length > 0)
              ) {
                if (listboxContext.multiple) {
                  return Array.isArray(listboxContext.value) && listboxContext.value.length > 0 ? (
                    listboxContext.value
                      .filter((value) => listboxContext.normalizeOptions.has(value))
                      .map((value) => {
                        return listboxContext.normalizeOptions.get(value)?.label;
                      })
                      .join(", ")
                  ) : (
                    <span>
                      {listboxContext?.placeholder ? listboxContext.placeholder : "انتخاب"}
                    </span>
                  );
                } else {
                  return listboxContext.normalizeOptions.has(listboxContext.value as string)
                    ? listboxContext.normalizeOptions.get(listboxContext.value as string)?.label
                    : resolvedPlaceholder;
                }
              } else {
                return <span>{resolvedPlaceholder}</span>;
              }
            })()}
          </span>
          {listboxContext.isLoading && <Loading />}
          <ChevronsUpDownIcon data-slot="dropdown-icon" />
        </>
      )}
    </ListboxButton>
  );
}

interface _internal_ComponentButton extends HasDisplayName {
  <TTag extends ElementType = typeof DEFAULT_BUTTON_TAG>(
    props: ButtonProps<TTag> & RefProp<typeof ButtonFn<TTag>>
  ): ReactNode;
}

const Button = memo(forwardRefWithAs(ButtonFn) as unknown as _internal_ComponentButton);

Button.displayName = "Button";

export { Button };
