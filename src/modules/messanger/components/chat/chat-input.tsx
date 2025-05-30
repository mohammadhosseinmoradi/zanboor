import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Textarea } from "@headlessui/react";
import { Button } from "@/components/button";
import { SendHorizontalIcon } from "lucide-react";

type ChatInputProps = {
  className?: string;
};

export function ChatInput(props: ChatInputProps) {
  const { className } = props;

  return (
    <div className={cn("flex", className)}>
      <div className="mx-auto flex w-full max-w-200 items-end gap-2">
        <div className="bg-surface-bright relative flex grow rounded-s-3xl rounded-se-3xl shadow lg:rounded-s-lg lg:rounded-se-lg">
          <Textarea
            placeholder="پیام"
            className="text-on-surface field-sizing-content max-h-96 grow resize-none bg-transparent px-4 py-3 text-sm text-sm/6"
          />
          <Corner className="fill-surface-bright absolute -end-2 bottom-0" />
        </div>
        <Button size="lg" className="shrink-0 rounded-full shadow">
          <SendHorizontalIcon data-slot="icon" className="scale-x-[-1]" />
        </Button>
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
