import { MenuButton } from "@headlessui/react";
import { Menu as _Menu } from "./components/menu";
import { Items } from "./components/items";
import { Item } from "./components/item";
import { Label } from "./components/label";
import { Shortcut } from "./components/shortcut";
import { Description } from "./components/description";
import { Separator } from "@/components/menu/components/separator";

const Menu = Object.assign(_Menu, {
  Button: MenuButton,
  Items,
  Item,
  Label,
  Shortcut,
  Description,
  Separator,
});

export { Menu };
