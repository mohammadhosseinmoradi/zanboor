import { ListboxOptions, ListboxOptionsProps } from "@headlessui/react";
import { forwardRef, memo, Ref, useEffect, useState } from "react";
import { useListboxContext, useListboxSetContext } from "@/components/listbox-dropdown/context";
import { TOption } from "@/components/listbox-dropdown/types";
import { Props } from "@/lib/utils/render/types";
import { Option } from "@/components/listbox-dropdown/option";
import { cn } from "@/lib/utils";
import { cva } from "cva";
import { useIsAnchorSelection } from "@/components/listbox-dropdown/use-is-anchor-selection";

const options = cva({
  base: cn(
    "grid grid-cols-[auto_auto_auto] p-1",
    "z-50 rounded-rounded border bg-bg transition data-[closed]:opacity-0 shadow data-[transition]:pointer-events-none",
    "isolate scroll-py-1 select-none overflow-y-scroll overscroll-contain",
    "[--anchor-padding:theme(spacing.2)]"
  ),
  variants: {
    anchorSelection: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      anchorSelection: true,
      className: cn(
        "[--anchor-offset:-0.3rem] sm:[--anchor-offset:-1.8rem]",
        "min-w-[calc(var(--button-width)+0.65rem)] sm:min-w-[calc(var(--button-width)+2.12rem)]"
      ),
    },
    {
      anchorSelection: false,
      className: cn(
        "min-w-[max(var(--button-width),theme(spacing[32]))] [--anchor-gap:0.5rem]",
        "transition ease-out duration-200 data-[closed]:scale-90",
        // Top
        "data-[anchor~=top]:data-[anchor~=center]:origin-bottom",
        "data-[anchor~=top]:data-[anchor~=start]:origin-bottom-right",
        "data-[anchor~=top]:data-[anchor~=end]:origin-bottom-left",
        // Right
        "data-[anchor~=right]:data-[anchor~=center]:origin-left",
        "data-[anchor~=right]:data-[anchor~=start]:origin-top-left",
        "data-[anchor~=right]:data-[anchor~=end]:origin-bottom-left",
        // Bottom
        "data-[anchor~=bottom]:data-[anchor~=center]:origin-top",
        "data-[anchor~=bottom]:data-[anchor~=start]:origin-top-right",
        "data-[anchor~=bottom]:data-[anchor~=end]:origin-top-left",
        // Left
        "data-[anchor~=left]:data-[anchor~=center]:origin-right",
        "data-[anchor~=left]:data-[anchor~=start]:origin-top-right",
        "data-[anchor~=left]:data-[anchor~=end]:origin-bottom-right"
      ),
    },
  ],
  defaultVariants: {
    anchorSelection: true,
  },
});

type ListboxOptionsRenderPropArg = {
  open: boolean;
  options: TOption[];
};

type OptionsProps = Props<"div", ListboxOptionsRenderPropArg, never, {}> &
  Pick<ListboxOptionsProps<"div">, "anchor">;

function OptionsFn(props: OptionsProps, ref?: Ref<HTMLDivElement>) {
  const { className, children, anchor, ...otherProps } = props;

  const [query, setQuery] = useState("");

  const listboxContext = useListboxContext();
  const isAnchorSelection = useIsAnchorSelection();
  const listboxSetContext = useListboxSetContext();

  useEffect(() => {
    listboxSetContext((prevState) => ({
      ...prevState,
      filteredOptions: listboxContext.options.filter((option) =>
        (option.text || "")
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      ),
    }));
  }, [query, listboxContext.options]);

  return (
    <ListboxOptions
      ref={ref}
      transition
      anchor={{
        to: isAnchorSelection ? "selection start" : typeof anchor == "string" ? anchor : "bottom",
        ...(typeof anchor == "object" ? anchor : {}),
      }}
      className={cn(
        options({
          anchorSelection: isAnchorSelection,
        }),
        className
      )}
      {...otherProps}
    >
      {(bag) => (
        <>
          {/*{listboxContext.withSearchBox && <SearchInput value={query} onChange={setQuery} />}*/}
          {(() => {
            if (!listboxContext.options.length)
              return (
                <Option value="" disabled>
                  گزینه‌ای وجود ندارد!
                </Option>
              );

            if (!listboxContext.filteredOptions.length)
              return (
                <Option value="" disabled>
                  موردی یافت نشد!
                </Option>
              );

            if (typeof children === "function")
              return children({
                options: listboxContext.filteredOptions,
                ...bag,
              });

            return listboxContext.filteredOptions.map((option, index) => (
              <Option key={index} value={option.value}>
                {option.text}
              </Option>
            ));
          })()}
        </>
      )}
    </ListboxOptions>
  );
}

const Options = memo(forwardRef(OptionsFn));

Options.displayName = ListboxOptions.displayName;

export { Options };
