import { NormalizeOption, TOption } from "@/components/listbox-dropdown/types";

export function toNormalizeOptions(options: TOption[]): NormalizeOption {
  const normalizedOptions: Map<string, any> = new Map();

  options.forEach((option) => {
    normalizedOptions.set(option.value, option);
  });

  return normalizedOptions;
}
