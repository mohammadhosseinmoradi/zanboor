import { cn } from "@/lib/utils";
import { MessageSquareTextIcon } from "lucide-react";
import { Text } from "@/components/text";

type NoChatProps = {
  className?: string;
};

export function NoChat(props: NoChatProps) {
  const { className } = props;

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <MessageSquareTextIcon className="text-on-surface-variant size-12" />
      <Text className="mt-4">برای شروع گفت‌وگو، یک مخاطب را انتخاب کنید.</Text>
    </div>
  );
}
