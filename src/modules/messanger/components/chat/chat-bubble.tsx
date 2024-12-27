import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { CheckIcon } from "lucide-react";

type ChatBubbleProps = (
  | {
      type: "sender";
    }
  | {
      type: "receiver";
    }
) & {
  className?: string;
};

export function ChatBubble(props: ChatBubbleProps) {
  const { type, className } = props;

  return (
    <div
      className={cn("group relative grow px-2 py-2 drop-shadow-sm", {
        "dark:bg-primary-800 bg-primary-100 order-3 ms-2.5 rounded-e-lg rounded-t-lg not-last:rounded-b-lg":
          type == "sender",
        "bg-surface-bright rounded-s-lg rounded-t-lg not-last:rounded-b-lg":
          type == "receiver",
        className
      })}
    >
      <Corner
        className={cn("invisible group-last:visible", "absolute size-6", {
          "fill-primary-100 dark:fill-primary-800 -start-3.5 bottom-0 scale-x-[-1]":
            type == "sender",
          "fill-surface-bright -end-4 bottom-0": type == "receiver"
        })}
      />
      <ChatContent />
    </div>
  );
}

type ChatContentProps = {
  className?: string;
};

function ChatContent(props: ChatContentProps) {
  const { className } = props;

  return (
    <div className={className}>
      <div className="grid grid-cols-1">
        <div className="text-on-surface text-sm leading-relaxed break-words">
          این متن پیام هست
        </div>
      </div>
      <div
        className={cn("mt-1 flex items-center gap-1", {
          "gap-2": "seen"
        })}
      >
        <div className="relative">
          <CheckIcon className="text-on-surface-variant size-3 stroke-[3px]" />
          <CheckIcon className="text-on-surface-variant/50 absolute start-1 top-0 size-3 stroke-[3px]" />
        </div>
        <div className="text-2xs text-on-surface-variant text-start"></div>
      </div>
    </div>
  );
}

function Corner(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 11 20"
      width="11"
      height="20"
      id="SVG 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(9 -13)" fill="inherit">
        <path
          d="M-6 16h6v17c-.193-2.84-.876-5.767-2.05-8.782-.904-2.325-2.446-4.485-4.625-6.48A1 1 0 01-6 16z"
          transform="matrix(1 0 0 -1 0 49)"
          fill="inherit"
        ></path>
      </g>
    </svg>
  );
}
