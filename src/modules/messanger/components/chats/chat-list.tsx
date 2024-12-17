import { ChatItem } from "@/modules/messanger/components/chats/chat-item";
import { cn } from "@/lib/utils";
import { useMessenger } from "@/modules/messanger";

type ChatListProps = {
  className?: string;
};

export function ChatList(props: ChatListProps) {
  const { className } = props;

  const { chatId } = useMessenger();

  return (
    <div className={cn("flex flex-col", className)}>
      <ChatItem selected={!!chatId} />
    </div>
  );
}
