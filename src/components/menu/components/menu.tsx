import {
  Menu as HeadlessMenu,
  MenuProps as HeadlessMenuProps
} from "@headlessui/react";
import { MenuContext } from "@/components/menu/context";

type MenuProps = {
  /**
   * Ex: 50% or 300px
   */
  snapPoint?: string;
} & HeadlessMenuProps;

export function Menu(props: MenuProps) {
  const { snapPoint, children, ...otherProps } = props;

  return (
    <HeadlessMenu {...otherProps}>
      {(bag) => (
        <MenuContext.Provider
          value={{
            open: bag.open,
            snapPoint,
            close: bag.close
          }}
        >
          {typeof children === "function" ? children(bag) : children}
        </MenuContext.Provider>
      )}
    </HeadlessMenu>
  );
}
