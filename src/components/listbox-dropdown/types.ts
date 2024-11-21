import { ReactNode } from "react";

export type Option = {
  value: string;
  label: string;
  icon?: ReactNode;
  description?: string;
  disabled?: boolean;
};

/**
 * Key is Option's value
 */
export type NormalizeOptions = Map<string, Option>;
