"use client";

import { cn } from "@/lib/utils";
import { ProfileDto } from "@/modules/profile/types";
import { Avatar } from "@/components/avatar";
import { Text } from "@/components/text";
import { BadgeCheckIcon, CircleDollarSignIcon, UserRoundPenIcon } from "lucide-react";
import { Heading } from "@/components/heading";
import { Button } from "@/components/button";
import { getGenderTranslated } from "@/modules/utils";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";

type ProfileHeaderProps = {
  data: ProfileDto;
  className?: string;
};

export function ProfileHeader(props: ProfileHeaderProps) {
  const { data, className } = props;

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-4">
        <ProfileAvatar
          className="size-16 shrink-0"
          data={{
            personalId: data.id,
            src: data.personal.image,
          }}
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
        <Button as={Link} href={routes.profile.edit} variant="outlined" color="secondary">
          <UserRoundPenIcon data-slot="icon" />
          <span className="max-lg:hidden">ویرایش</span>
        </Button>
        <Button variant="outlined" color="secondary">
          <CircleDollarSignIcon data-slot="start-icon" />
          دعوت دیگران
        </Button>
      </div>
    </div>
  );
}

type ProfileAvatarProps = {
  data: {
    personalId: string;
    src: string;
  };
  className?: string;
};

function ProfileAvatar(props: ProfileAvatarProps) {
  const { data, className } = props;

  return (
    <div className={cn("relative", className)}>
      <Avatar className="size-full" src={data.src} />
    </div>
  );
}
