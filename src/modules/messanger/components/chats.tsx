"use client";

import { cn } from "@/lib/utils";
import { ChatList } from "@/modules/messanger/components/chats/chat-list";
import { Tab, TabList, TabGroup, TabPanel, TabPanels } from "@/components/tab";
import { Badge } from "@/components/badge";

type ChatsProps = {
  className?: string;
};

export function Chats(props: ChatsProps) {
  const { className } = props;

  return (
    <div className={cn("bg-surface-container-low flex flex-col", className)}>
      <TabGroup className="grow">
        <TabList className="bg-surface-bright [&>*]:w-full">
          <Tab className="text-on-surface-variant !w-auto text-center max-lg:grow">
            همه
            <Badge>1</Badge>
          </Tab>
          <Tab className="text-on-surface-variant !w-auto text-center max-lg:grow">
            بی‌پاسخ
            <Badge>1</Badge>
          </Tab>
        </TabList>
        <TabPanels className="flex grow flex-col p-2 [&>*]:grow" swipeable>
          <TabPanel>
            <ChatList />
          </TabPanel>
          <TabPanel>
            <ChatList />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
