import { ChatBubbleGroup } from "@/modules/messanger/components/chat/chat-bubble-group";
import { cn } from "@/lib/utils";

type ChatBodyProps = {
  className?: string;
};

export function ChatBody(props: ChatBodyProps) {
  const { className } = props;

  return (
    <div className={cn("flex w-full flex-col gap-2 p-4", className)}>
      <ChatBubbleGroup type="sender" className="max-w-[calc(100%-4rem)]" />
      <ChatBubbleGroup type="receiver" className="max-w-[calc(100%-4rem)] self-end" />
      <ChatBubbleGroup type="sender" className="max-w-[calc(100%-4rem)]" />
      <ChatBubbleGroup type="receiver" className="max-w-[calc(100%-4rem)] self-end" />
      <ChatBubbleGroup type="sender" className="max-w-[calc(100%-4rem)]" />
      <ChatBubbleGroup type="receiver" className="max-w-[calc(100%-4rem)] self-end" />
      <ChatBubbleGroup type="sender" className="max-w-[calc(100%-4rem)]" />
      <ChatBubbleGroup type="receiver" className="max-w-[calc(100%-4rem)] self-end" />
      <ChatBubbleGroup type="sender" className="max-w-[calc(100%-4rem)]" />
      <ChatBubbleGroup type="receiver" className="max-w-[calc(100%-4rem)] self-end" />
    </div>
  );
}
