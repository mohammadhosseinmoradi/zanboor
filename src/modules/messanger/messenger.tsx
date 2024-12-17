import { Chats } from "@/modules/messanger/components/chats";
import { Chat } from "@/modules/messanger/components/chat";
import { cn } from "@/lib/utils";
import { NoChat } from "@/modules/messanger/components/no-chat";

type MessengerProps = {
  chatId?: string;
  className?: string;
};

export function Messenger(props: MessengerProps) {
  const { chatId, className } = props;

  return (
    <div className={cn("flex h-full", className)}>
      <Chats
        className={cn("w-full lg:w-72 lg:border-e", {
          "max-lg:hidden": chatId,
        })}
      />
      {chatId && <Chat id={chatId} className="grow" />}
      {!chatId && <NoChat className="grow max-lg:hidden" />}
    </div>
  );
}
