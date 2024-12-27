import { forwardRef, useState } from "react";
import { InputField, InputFieldProps } from "@/components/input-field";
import { InputGroup } from "@/components/input-group";
import { Input } from "@/components/input";
import { InputProps } from "@headlessui/react";
import { Label } from "@/components/label";
import { Button } from "@/components/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import ErrorMessage from "@/components/error-message";

type PasswordFieldProps = InputFieldProps &
  InputProps & {
    label?: string;
    error?: string;
  };

/**
 * This component extend InputField component and add additional functionality to it.
 *
 * @constructor
 */
export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (props, ref) => {
    const { label, className, style, error, ...otherProps } = props;

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
      <InputField className={className} style={style}>
        {label && <Label>{label}</Label>}
        <InputGroup>
          <Input
            ref={ref}
            type={isPasswordVisible ? "text" : "password"}
            className="[direction:ltr] rtl:[&_input]:text-right"
            invalid={!!error}
            {...otherProps}
          />
          <Button
            variant="plain"
            color="secondary"
            size="sm"
            onClick={() =>
              setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible)
            }
            tabIndex={-1}
            className="m-1.5"
          >
            {!isPasswordVisible && <EyeIcon data-slot="icon" />}
            {isPasswordVisible && <EyeOffIcon data-slot="icon" />}
          </Button>
        </InputGroup>
        <ErrorMessage>{error}</ErrorMessage>
      </InputField>
    );
  }
);

PasswordField.displayName = "PasswordField";
