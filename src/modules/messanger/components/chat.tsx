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
        "bg-neutral-300 bg-[url('/images/bg-pattern.svg')] dark:bg-black dark:bg-[url('/images/bg-pattern-dark.svg')]",
        className
      )}
      header={{
        title: <ChatInfo />,
        actions: <ChatActions />,
        className: "border-b bg-surface-container",
      }}
    >
      <ChatBody className="h-0 grow overflow-auto" />
      <ChatInput className="mx-auto w-full max-w-200 p-2 lg:mb-2" />
    </PageLayout>
  );
}
