import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ListboxDropdownProps } from "@/components/listbox-dropdown/listbox-dropdown";
import { NormalizeOption, TOption } from "@/components/listbox-dropdown/types";

export type ListboxContextProps = ListboxDropdownProps & {
  normalizeOptions: NormalizeOption;
  filteredOptions: TOption[];
  isButtonAsFragment: boolean;
};

export const ListboxContext = createContext<ListboxContextProps | null>(null);

export function useListboxContext() {
  const context = useContext(ListboxContext);
  if (!context) throw new Error("useListboxContext most be used inside ListboxContext.Provider");
  return context;
}

export type ListboxSetContextProps = Dispatch<SetStateAction<ListboxContextProps>>;

export const ListboxSetContext = createContext<ListboxSetContextProps | null>(null);

export function useListboxSetContext() {
  const context = useContext(ListboxSetContext);
  if (!context)
    throw new Error("useListboxSetContext most be used inside ListboxSetContext.Provider");
  return context;
}
