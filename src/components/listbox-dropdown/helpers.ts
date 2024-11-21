import { NormalizeOptions, Option } from "@/components/listbox-dropdown/types";

export function toNormalizeOptions(options: Option[]): NormalizeOptions {
  const normalizedOptions: NormalizeOptions = new Map();

  options.forEach((option) => {
    normalizedOptions.set(option.value, option);
  });

  return normalizedOptions;
}
