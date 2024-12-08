import { InputField, InputFieldProps } from "@/components/input-field";
import { InputGroup } from "@/components/input-group";
import { Input } from "@/components/input";
import { InputProps } from "@headlessui/react";
import { Label } from "@/components/label";
import { toEnglishDigits } from "@/lib/utils/to-english-digits";
import ErrorMessage from "@/components/error-message";

type PasswordFieldProps = InputFieldProps &
  Omit<InputProps, "onChange"> & {
    label?: string;
    error?: string;
    onChange?: (value: string) => void;
  };

/**
 * This component extend InputField component
 *
 * @constructor
 */
export function PriceField(props: PasswordFieldProps) {
  const { label, value, onChange, className, style, error, ...otherProps } = props;

  const formatPrice = (value?: string | number) => {
    if (!value) return "";
    const numberValue = Number(value);
    return !isNaN(numberValue) ? numberValue.toLocaleString("en-US") : "";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = toEnglishDigits(e.key);
    if (!/[\dBackspaceDeleteArrowLeftArrowRight]/.test(key) && !e.ctrlKey) {
      e.preventDefault();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = toEnglishDigits(event.target.value.replaceAll(",", "")); // Strip commas
    if (onChange) onChange(rawValue);
  };

  return (
    <InputField className={className} style={style}>
      {label && <Label>{label}</Label>}
      <InputGroup>
        <Input
          className="[direction:ltr] rtl:[&_input]:text-right"
          value={formatPrice(value as string)}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          invalid={!!error}
          {...otherProps}
        />
        <div className="text-on-surface-variant m-2 flex items-center justify-center">تومان</div>
      </InputGroup>
      <ErrorMessage>{error}</ErrorMessage>
    </InputField>
  );
}
