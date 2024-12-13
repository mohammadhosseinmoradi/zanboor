import { cn } from "@/lib/utils";
import { UserDto } from "@/modules/user/types";

type UserCardProps = {
  data: UserDto;
  className?: string;
};

export function UserCard(props: UserCardProps) {
  const { className } = props;

  return <div className={cn("", className)}>User card</div>;
}
