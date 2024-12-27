import { cn } from "@/lib/utils";
import { Avatar } from "@/components/avatar";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Badge } from "@/components/badge";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";

type ChatItemProps = {
  selected?: boolean;
  className?: string;
};

export function ChatItem(props: ChatItemProps) {
  const { selected, className } = props;

  return (
    <Link
      href={routes.messages.chat("1")}
      className={cn(
        "flex w-full items-center gap-4 select-none",
        "cursor-pointer rounded-lg p-2",
        "not-data-selected:hover:bg-surface-container-highest",
        "dark:data-selected:bg-primary-900 data-selected:bg-primary-500/25",
        className
      )}
      {...(selected && { "data-selected": "" })}
    >
      <Avatar
        src="/images/users/07.jpg"
        className="border-surface-container size-12 border-2"
      />
      <div className="flex grow flex-col">
        <div className="flex gap-2">
          <Heading as="h3" variant="h5" className="line-clamp-1 grow">
            زهرا کریمی
          </Heading>
          <Text variant="caption">10:00</Text>
        </div>
        <div className="mt-1 flex gap-2">
          <Text className="line-clamp-1 grow">سلام خوبی عزیزم؟</Text>
          <Badge>1</Badge>
        </div>
      </div>
    </Link>
  );
}
