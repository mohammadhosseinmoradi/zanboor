import { ListboxDropdownProps } from "@/components/listbox-dropdown/listbox-dropdown";
import { forwardRef } from "react";
import ListboxDropdown from "@/components/listbox-dropdown";
import { InputField } from "@/components/input-field";
import { Label } from "@/components/label";
import ErrorMessage from "@/components/error-message";

type ListboxDropdownField = Omit<ListboxDropdownProps, "invalid"> & {
  label?: string;
  error?: string;
};

const ListboxDropdownField = forwardRef<HTMLButtonElement, ListboxDropdownField>((props, ref) => {
  const { label, error, className, ...otherProps } = props;

  return (
    <InputField className={className}>
      {label && <Label>{label}</Label>}
      <ListboxDropdown ref={ref} invalid={!!error} {...otherProps} />
      {<ErrorMessage>{error}</ErrorMessage>}
    </InputField>
  );
});

ListboxDropdownField.displayName = "ListboxDropdownField";

export { ListboxDropdownField };
