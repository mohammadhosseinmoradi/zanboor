import { Button } from "@/components/button";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";

export function Messenger() {
  return (
    <div className="p4">
      <Button as={Link} href={routes.messages.chat("1")}>
        گفت و گو
      </Button>
    </div>
  );
}
