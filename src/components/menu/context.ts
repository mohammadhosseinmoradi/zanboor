import { createContext, useContext } from "react";

export type MenuContextProps = {
  open: boolean;
  snapPoint?: string;
  close: () => void;
};

export const MenuContext = createContext<MenuContextProps | null>(null);

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("Not found parent Popover");
  return context;
}
