import { InputGroup } from "@/components/input-group";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { SearchIcon } from "lucide-react";

export function SearchBox() {
  return (
    <InputGroup>
      <Input />
      <Button size="sm" className="m-1.5">
        <SearchIcon data-slot="icon" />
      </Button>
    </InputGroup>
  );
}
