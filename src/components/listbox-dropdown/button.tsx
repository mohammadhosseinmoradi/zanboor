import { ListboxButton, ListboxButtonProps } from "@headlessui/react";
import { ElementType, Fragment, memo, ReactNode, Ref, useLayoutEffect } from "react";
import { useListboxContext, useListboxSetContext } from "@/components/listbox-dropdown/context";
import { cn } from "@/lib/utils";
import { forwardRefWithAs, HasDisplayName, RefProp } from "@/lib/utils/render";
import { Loading } from "@/components/loading";
import { ChevronsUpDownIcon } from "lucide-react";

const DEFAULT_BUTTON_TAG = "button";

export type ButtonProps<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG | typeof Fragment> =
  ListboxButtonProps<TTag>;

function ButtonFn<TTag extends ElementType = typeof DEFAULT_BUTTON_TAG | typeof Fragment>(
  props: ButtonProps<TTag>,
  ref: Ref<HTMLButtonElement>
) {
  const {
    as = DEFAULT_BUTTON_TAG,
    children,
    className,
    ...otherProps
  } = props as ButtonProps<typeof DEFAULT_BUTTON_TAG>;

  const listboxContext = useListboxContext();
  const listboxSetContext = useListboxSetContext();

  useLayoutEffect(() => {
    listboxSetContext((prevState) => ({
      ...prevState,
      isButtonAsFragment: as == (Fragment as any),
    }));
  }, [as]);

  return (
    <ListboxButton ref={ref} as={Fragment}>
      {(bag): any => {
        if (as == (Fragment as any) && typeof children === "function") return children(bag);
        if (as == (Fragment as any)) return children;
        return (
          <button
            data-slot="control"
            autoFocus={listboxContext.autoFocus}
            className={cn(
              "relative flex w-full items-center gap-2",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-rounded after:border after:border-border after:transition after:focus-within:border-2 after:focus-within:border-primary after:has-[[data-invalid]]:border-error after:has-[[data-invalid]]:focus-within:border-error",
              "w-full min-w-0 px-3 py-2 text-base/6 placeholder:text-fg-disabled disabled:cursor-not-allowed sm:text-sm/5",
              "rounded-rounded bg-bg-50 focus:border-transparent disabled:text-fg-disabled data-[invalid]:border-error dark:bg-black/10",
              "[&>*[data-slot$=icon]]:size-6 [&>*[data-slot$=icon]]:stroke-[1.5px] sm:[&>*[data-slot$=icon]]:size-5 [&>*[data-slot=dropdown-icon]]:size-4",

              // If loading indicator is child
              "[&>*[data-slot=loading]]:flex",
              "[&>*[data-slot=loading]]:items-center [&>*[data-slot=loading]]:justify-center",
              "[&>*[data-slot=loading]]:absolute",
              "[&>*[data-slot=loading]]:inset-0",
              // Hidden all button content expect loading indicator
              "[&:has([data-slot=loading])]:text-transparent",
              "[&:has([data-slot=loading])>*:not([data-slot=loading])]:opacity-0",
              // Badge offset
              "[&_*[data-slot=badge]]:[--badge-offset:calc(theme(spacing[4])+2px)]",
              className
            )}
            {...otherProps}
          >
            <span className="line-clamp-1 grow text-start">
              {(() => {
                const resolvedChildren = typeof children == "function" ? children(bag) : children;
                if (resolvedChildren) return resolvedChildren;
                if (
                  listboxContext.normalizeOptions.has(listboxContext.value) ||
                  (Array.isArray(listboxContext.value) && listboxContext.value.length > 0)
                ) {
                  if (listboxContext.multiple) {
                    return Array.isArray(listboxContext.value) &&
                      listboxContext.value.length > 0 ? (
                      listboxContext.value
                        .filter((value) => value in listboxContext.normalizeOptions)
                        .map((value) => {
                          return listboxContext.normalizeOptions.get(value)?.text;
                        })
                        .join(", ")
                    ) : (
                      <span>
                        {listboxContext?.placeholder ? listboxContext.placeholder : "انتخاب"}
                      </span>
                    );
                  } else {
                    return listboxContext.normalizeOptions.has(listboxContext.value)
                      ? listboxContext.normalizeOptions.get(listboxContext.value)?.text
                      : listboxContext?.placeholder
                        ? listboxContext.placeholder
                        : "انتخاب";
                  }
                } else {
                  return (
                    <span>
                      {listboxContext?.placeholder ? listboxContext.placeholder : "انتخاب"}
                    </span>
                  );
                }
              })()}
            </span>
            {listboxContext.isLoading && <Loading />}
            <ChevronsUpDownIcon data-slot="dropdown-icon" />
          </button>
        );
      }}
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
