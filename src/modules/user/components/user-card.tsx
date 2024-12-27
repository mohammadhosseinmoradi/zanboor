import { cn } from "@/lib/utils";
import { UserDto } from "@/modules/user/types";
import Image from "next/image";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { BadgeCheckIcon } from "lucide-react";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";
import { AVATAR_IMG } from "@/lib/constants/common";

type UserCardProps = {
  data: UserDto;
  className?: string;
};

export function UserCard(props: UserCardProps) {
  const { data, className } = props;

  return (
    <Link
      href={routes.user.index(data.id)}
      className={cn(
        "bg-surface-bright overflow-hidden rounded-lg border",
        className
      )}
    >
      <div className="relative">
        <Image
          className="aspect-square w-full object-cover"
          src={data.profile.personal.image || AVATAR_IMG}
          width={500}
          height={500}
          alt=""
        />
        <div className="bg-success absolute end-2 top-2 size-3 rounded-full shadow" />
      </div>
      <div className="flex items-center p-2">
        <Heading as="h4" variant="h5" className="grow truncate">
          {data.profile.personal.displayName}
          <BadgeCheckIcon className="text-surface-bright fill-on-surface ms-1 inline-block size-5 rounded-full p-0.5" />
        </Heading>
        <Text>شیراز</Text>
      </div>
    </Link>
  );
}
