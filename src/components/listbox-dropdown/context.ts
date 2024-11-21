import { createContext, useContext } from "react";
import { ListboxDropdownProps } from "@/components/listbox-dropdown/listbox-dropdown";
import { NormalizeOptions } from "@/components/listbox-dropdown/types";

export type ListboxContextProps = ListboxDropdownProps & {
  normalizeOptions: NormalizeOptions;
};

export const ListboxContext = createContext<ListboxContextProps | null>(null);

export function useListboxContext() {
  const context = useContext(ListboxContext);
  if (!context) throw new Error("useListboxContext most be used inside ListboxContext.Provider");
  return context;
}
