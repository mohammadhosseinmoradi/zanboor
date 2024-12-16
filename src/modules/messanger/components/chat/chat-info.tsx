import { Avatar } from "@/components/avatar";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { getInitials } from "@/lib/utils/get-initials";

type ChatHeaderProps = {
  className?: string;
};

export function ChatInfo(props: ChatHeaderProps) {
  const { className } = props;

  return (
    <div className={cn("flex items-center", className)}>
      <Avatar
        className="bg-surface-container size-10 border"
        initials={getInitials("زهرا کریمی")}
      />
      <div className="ms-4">
        <Heading as="h4" variant="h5">
          زهرا کریمی
        </Heading>
        <Text variant="caption" className="mt-0.5">
          آخرین بازدید اخیر
        </Text>
      </div>
    </div>
  );
}
