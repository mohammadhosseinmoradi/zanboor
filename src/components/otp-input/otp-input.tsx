"use client";

import {
  OTPInput,
  OTPInputProps,
  SlotProps as InputOtpSlotProps
} from "input-otp";
import { cn } from "@/lib/utils";
import { forwardRef, Fragment } from "react";

type OtpInputProps = {
  value?: string | number;
  onChange?: (value: string) => void;
  className?: string;
  invalid?: boolean;
} & Pick<
  OTPInputProps,
  | "onComplete"
  | "inputMode"
  | "autoFocus"
  | "name"
  | "type"
  | "required"
  | "onBlur"
  | "id"
>;

const OtpInput = forwardRef<HTMLInputElement, OtpInputProps>((props, ref) => {
  const { className, value, invalid, ...otherProps } = props;

  return (
    <OTPInput
      ref={ref}
      data-slot="control"
      maxLength={5}
      containerClassName={cn(
        "group flex items-center has-[:disabled]:opacity-30 [direction:ltr]",
        className
      )}
      render={({ slots }) => (
        <div className="flex items-center gap-1.5">
          {slots.map((slot, index) => (
            <Fragment key={index}>
              {index !== 0 && (
                <div className="bg-border h-px w-2 rounded-full" />
              )}
              <Slot key={index} {...slot} invalid={invalid} />
            </Fragment>
          ))}
        </div>
      )}
      value={value?.toString()}
      {...otherProps}
    />
  );
});

OtpInput.displayName = "OtpInput";

export default OtpInput;

type SlotProps = InputOtpSlotProps & {
  invalid?: boolean;
};

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "text-on-surface relative h-10 w-8",
        "flex items-center justify-center",
        "transition-all duration-300",
        "rounded-lg border-2",
        {
          "group-hover:border-border": !props.isActive && !props.invalid,
          "border-primary": props.isActive && !props.invalid,

          "border-error/50": props.invalid,
          "border-error": props.isActive && props.invalid
        }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

function FakeCaret() {
  return (
    <div className="animate-caret-blink pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="bg-fg-muted h-4 w-px" />
    </div>
  );
}
