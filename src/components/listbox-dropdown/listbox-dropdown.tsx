import { Listbox } from "@headlessui/react";
import { forwardRef, Fragment, memo, ReactNode, Ref, useState } from "react";
import { Button } from "@/components/listbox-dropdown/button";
import { Options } from "@/components/listbox-dropdown/options";
import useUpdateEffect from "@/hooks/use-update-effect";
import { TOption } from "@/components/listbox-dropdown/types";
import {
  ListboxContext,
  ListboxContextProps,
  ListboxSetContext,
} from "@/components/listbox-dropdown/context";
import { toNormalizeOptions } from "@/components/listbox-dropdown/helpers";

export type ListboxDropdownProps = {
  ref?: Ref<HTMLButtonElement>;
  value: any | any[] | null | undefined;
  options: TOption[];
  placeholder?: string;
  onChange?: (value: any | any[] | null | undefined) => void;
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
};

function ListboxDropdownFn(props: ListboxDropdownProps, ref: Ref<HTMLButtonElement>) {
  const {
    children,
    name,
    multiple,
    value,
    onChange,
    disabled,
    options,
    disableAdaptiveWidth,
    ...otherProps
  } = props;

  const [context, setContext] = useState<ListboxContextProps>({
    children,
    name,
    multiple,
    value,
    onChange,
    disabled,
    options,
    disableAdaptiveWidth,
    normalizeOptions: toNormalizeOptions(options),
    filteredOptions: options,
    isButtonAsFragment: false,
    ...otherProps,
  });

  useUpdateEffect(() => {
    setContext((prevState) => ({
      ...prevState,
      name,
      value,
      onChange,
      disabled,
      ...otherProps,
    }));
  }, [name, value, onChange, disabled]);

  useUpdateEffect(() => {
    setContext((prevState) => ({
      ...prevState,
      multiple,
      options,
      disableAdaptiveWidth,
      normalizeOptions: toNormalizeOptions(options),
      filteredOptions: options,
      ...otherProps,
    }));
  }, [multiple, options, disableAdaptiveWidth]);

  return (
    <ListboxContext.Provider value={context}>
      <ListboxSetContext.Provider value={setContext}>
        <Listbox
          as={Fragment}
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
      </ListboxSetContext.Provider>
    </ListboxContext.Provider>
  );
}

const ListboxDropdown = forwardRef(ListboxDropdownFn);

ListboxDropdown.displayName = "ListboxDropdown";

export default memo(ListboxDropdown);
