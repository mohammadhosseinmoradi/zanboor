import { Input } from "@/components/input";
import { forwardRef } from "react";
import { InputProps } from "@headlessui/react";
import { formatNumber } from "@/lib/utils/format-number";
import { toEnglishDigits } from "@/lib/utils/to-english-digits";
import { cn } from "@/lib/utils";

const NumberInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { value, onChange, inputMode, type, className, ...otherProps } = props;

  return (
    <Input
      ref={ref}
      className={cn("[&_input]:[direction:ltr] [&_input]:rtl:text-right", className)}
      type="text"
      value={formatNumber(toEnglishDigits((value || "").toString()))}
      onChange={(event) => {
        const newEvent = { ...event };
        newEvent.target.value = newEvent.target.value.replaceAll(",", "");
        onChange && onChange(newEvent);
      }}
      inputMode="numeric"
      {...otherProps}
    />
  );
});

NumberInput.displayName = "NumberInput";

export default NumberInput;
