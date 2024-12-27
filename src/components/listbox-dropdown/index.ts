import _ListboxDropdown from "@/components/listbox-dropdown/listbox-dropdown";
import { Button } from "@/components/listbox-dropdown/button";
import { Options } from "@/components/listbox-dropdown/options";
import { Option } from "@/components/listbox-dropdown/option";

const ListboxDropdown = Object.assign(_ListboxDropdown, {
  Button,
  Options,
  Option
});

export default ListboxDropdown;
