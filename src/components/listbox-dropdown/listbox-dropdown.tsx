import { Listbox } from "@headlessui/react";
import { forwardRef, memo, ReactNode, Ref, useMemo, useState } from "react";
import { button, Button } from "@/components/listbox-dropdown/button";
import { Options } from "@/components/listbox-dropdown/options";
import { Option } from "@/components/listbox-dropdown/types";
import { ListboxContext, ListboxContextProps } from "@/components/listbox-dropdown/context";
import { toNormalizeOptions } from "@/components/listbox-dropdown/helpers";
import { VariantProps } from "cva";

export type ListboxDropdownProps = {
  ref?: Ref<HTMLButtonElement>;
  value: string | string[] | null | undefined;
  options: Option[];
  placeholder?: string;
  onChange?: (value: string | string[] | null | undefined) => void;
  children?: ReactNode;
  multiple?: boolean;
  name?: string;
  withSearchBox?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  className?: string;
  autoFocus?: boolean;
  disableAdaptiveWidth?: boolean;
} & VariantProps<typeof button>;

function ListboxDropdownFn(props: ListboxDropdownProps, ref: Ref<HTMLButtonElement>) {
  const {
    children,
    name,
    multiple,
    value,
    onChange,
    disabled,
    isLoading,
    options,
    disableAdaptiveWidth,
    ...otherProps
  } = props;

  const [state] = useState<ListboxContextProps>({
    children,
    name,
    multiple,
    value,
    onChange,
    disabled,
    isLoading,
    options,
    disableAdaptiveWidth,
    normalizeOptions: new Map(),
    ...otherProps,
  });

  return (
    <ListboxContext.Provider
      value={{
        ...state,
        normalizeOptions: useMemo(() => toNormalizeOptions(options), [options]),
      }}
    >
      <Listbox
        as="div"
        value={value}
        multiple={multiple}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {!!children ? (
          children
        ) : (
          <>
            <Button ref={ref} />
            <Options />
          </>
        )}
      </Listbox>
    </ListboxContext.Provider>
  );
}

const ListboxDropdown = forwardRef(ListboxDropdownFn);

ListboxDropdown.displayName = "ListboxDropdown";

export default memo(ListboxDropdown);
