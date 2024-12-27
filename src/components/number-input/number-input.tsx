import { Input } from "@/components/input";
import { forwardRef } from "react";
import { InputProps } from "@headlessui/react";
import { formatNumber } from "@/lib/utils/format-number";
import { toEnglishDigits } from "@/lib/utils/to-english-digits";
import { cn } from "@/lib/utils";

type NumberInputProps = Omit<InputProps, "type" | "inputMode">;

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    const { value, onChange, className, ...otherProps } = props;

    return (
      <Input
        ref={ref}
        className={cn(
          "[&_input]:[direction:ltr] [&_input]:rtl:text-right",
          className
        )}
        type="text"
        value={formatNumber(toEnglishDigits((value || "").toString()))}
        onChange={(event) => {
          const newEvent = { ...event };
          newEvent.target.value = newEvent.target.value.replaceAll(",", "");
          if (onChange) onChange(newEvent);
        }}
        inputMode="numeric"
        {...otherProps}
      />
    );
  }
);

NumberInput.displayName = "NumberInput";

export default NumberInput;
