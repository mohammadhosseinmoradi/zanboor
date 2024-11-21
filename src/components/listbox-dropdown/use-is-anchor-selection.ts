import { useListboxContext } from "@/components/listbox-dropdown/context";

export function useIsAnchorSelection() {
  const listboxContext = useListboxContext();

  return !listboxContext.disableAdaptiveWidth && !listboxContext.multiple;
}
