"use client";

import { ChatBubbleGroup } from "@/modules/messanger/components/chat/chat-bubble-group";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

type ChatBodyProps = {
  className?: string;
};

export function ChatBody(props: ChatBodyProps) {
  const { className } = props;

  const bodyRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll({
    container: bodyRef,
  });

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    console.log(latestValue);
  });

  return (
    <div ref={bodyRef} className={cn("relative", className)}>
      <div className="mx-auto flex w-full max-w-200 flex-col gap-2">
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
      {/*<Button size='lg' color='secondary' className='fixed bottom-16 end-2 rounded-full'>*/}
      {/*  <ArrowDownIcon data-slot='icon' />*/}
      {/*</Button>*/}
    </div>
  );
}
