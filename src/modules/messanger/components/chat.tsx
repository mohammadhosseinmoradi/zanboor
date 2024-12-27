import { cn } from "@/lib/utils";
import { ChatInfo } from "@/modules/messanger/components/chat/chat-info";
import { ChatBody } from "@/modules/messanger/components/chat/chat-body";
import { ChatActions } from "@/modules/messanger/components/chat/chat-actions";
import { PageLayout } from "@/components/page-layout";
import { ChatInput } from "@/modules/messanger/components/chat/chat-input";

type ChatProps = {
  id: string;
  className?: string;
};

export function Chat(props: ChatProps) {
  const { className } = props;

  return (
    <PageLayout
      className={cn(
        "h-full",
        "bg-surface-dim bg-[url('/images/bg-pattern.svg')] dark:bg-[url('/images/bg-pattern-dark.svg')]",
        className
      )}
      header={{
        title: <ChatInfo />,
        actions: <ChatActions />,
        backButton: {
          className: "lg:hidden"
        },
        className: "border-b bg-surface-bright lg:ps-4"
      }}
    >
      <ChatBody className="h-0 grow overflow-auto p-2 pb-0.5" />
      <ChatInput className="p-2 lg:mb-2" />
    </PageLayout>
  );
}
