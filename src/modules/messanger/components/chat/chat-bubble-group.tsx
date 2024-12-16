import { cn } from "@/lib/utils";
import { getInitials } from "@/lib/utils/get-initials";
import { Avatar } from "@/components/avatar";
import { ChatBubble } from "@/modules/messanger/components/chat/chat-bubble";

type ChatBubbleGroupProps = {
  type: "sender" | "receiver";
  className?: string;
};

export function ChatBubbleGroup(props: ChatBubbleGroupProps) {
  const { type, className } = props;

  return (
    <div className={cn("flex w-full gap-2", className)}>
      <div className="flex grow flex-col gap-0.5">
        <ChatBubble type={type} className="w-full max-w-[calc(100%-6rem)]" />
        <ChatBubble type={type} className="w-full max-w-[calc(100%-6rem)]" />
        <ChatBubble type={type} className="w-full max-w-[calc(100%-6rem)]" />
      </div>
      {type == "receiver" && (
        <Avatar
          className={cn(
            "sticky bottom-0",
            "bg-bg bg-surface-bright size-12 shrink-0 self-end border drop-shadow-xs lg:size-11"
          )}
          width={50}
          height={50}
          initials={getInitials("محمد حسین")}
        />
      )}
    </div>
  );
}
