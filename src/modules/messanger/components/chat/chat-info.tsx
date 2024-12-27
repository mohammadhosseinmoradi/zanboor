import { cn } from "@/lib/utils";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { getInitials } from "@/lib/utils/get-initials";
import Link from "next/link";
import { AvatarZoomable } from "@/components/avatar-zoomable/avatar-zoomable";

type ChatHeaderProps = {
  className?: string;
};

export function ChatInfo(props: ChatHeaderProps) {
  const { className } = props;

  return (
    <div className={cn("flex items-center", className)}>
      <AvatarZoomable
        src="/images/users/07.jpg"
        avatar={{
          className: "bg-surface-container border size-10"
        }}
        initials={getInitials("زهرا کریمی")}
      />
      <Link href="" className="ms-4">
        <Heading as="h4" variant="h5">
          زهرا کریمی
        </Heading>
        <Text variant="caption" className="mt-0.5">
          آخرین بازدید اخیر
        </Text>
      </Link>
    </div>
  );
}
