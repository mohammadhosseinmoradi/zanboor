import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ScrollStateProps } from "@/components/scroll-area";

export type PopoverContextProps = {
  snapPoint?: string;
  open: boolean;
  close: () => void;
  bodyScrollState?: ScrollStateProps | null;
  setBodyScrollState: Dispatch<SetStateAction<ScrollStateProps | null>>;
};

export const PopoverContext = createContext<PopoverContextProps | null>(null);

export function usePopoverContext() {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("Not found parent Popover");
  return context;
}
