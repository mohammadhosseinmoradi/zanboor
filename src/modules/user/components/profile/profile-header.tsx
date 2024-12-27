"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/components/text";
import { BadgeCheckIcon, HeartIcon, MessagesSquareIcon } from "lucide-react";
import { Heading } from "@/components/heading";
import { Button } from "@/components/button";
import { ProfileUserDto } from "@/modules/user/types";
import { getGenderTranslated } from "@/modules/utils";
import { AvatarZoomable } from "@/components/avatar-zoomable/avatar-zoomable";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";

type ProfileHeaderProps = {
  data: ProfileUserDto;
  className?: string;
};

export function ProfileHeader(props: ProfileHeaderProps) {
  const { data, className } = props;

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-4">
        <AvatarZoomable
          src={data.personal.image}
          className="size-16 shrink-0"
        />
        <Heading as="h4" variant="h4">
          {[data.personal.displayName].join(" ")}
          <span className="text-on-surface/50 ms-1.5">
            / {getGenderTranslated(data.personal.gender)}
          </span>
          <BadgeCheckIcon className="fill-on-surface text-surface ms-1 mb-0.5 inline-block size-5 rounded-full" />
        </Heading>
      </div>
      <Text className="mt-4">{data.personal.bio}</Text>
      <div className="mt-4 grid grid-cols-[auto_1fr] gap-2 lg:grid-cols-[auto_auto]">
        <Button variant="outlined" color="secondary">
          <HeartIcon data-slot="icon" />
          <span className="max-lg:hidden">افزودن به علاقمندی‌ها</span>
        </Button>
        <Button
          as={Link}
          href={routes.messages.chat("1")}
          variant="outlined"
          color="secondary"
        >
          <MessagesSquareIcon data-slot="start-icon" />
          درخواست علاقمندی
        </Button>
      </div>
    </div>
  );
}
