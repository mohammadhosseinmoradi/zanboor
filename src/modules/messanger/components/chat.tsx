import { cn } from "@/lib/utils";
import { ChatInfo } from "@/modules/messanger/components/chat/chat-info";
import { ChatBody } from "@/modules/messanger/components/chat/chat-body";
import { ChatActions } from "@/modules/messanger/components/chat/chat-actions";
import { PageLayout } from "@/components/page-layout";

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
        "bg-primary-100 dark:bg-surface bg-[url('/images/bg-pattern.svg')] dark:bg-[url('/images/bg-pattern-dark.svg')]",
        className
      )}
      header={{
        title: <ChatInfo />,
        actions: <ChatActions />,
        className: "border-b bg-surface-container",
      }}
    >
      <div className="h-0 grow overflow-auto">
        <div className="mx-auto flex w-full max-w-200 flex-col">
          <ChatBody />
          <ChatActions />
        </div>
      </div>
    </PageLayout>
  );
}
