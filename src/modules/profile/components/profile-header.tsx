"use client";

import { cn } from "@/lib/utils";
import { PersonalDto } from "@/modules/profile/types";
import { CoinsIcon, UserRoundPenIcon } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Button } from "@/components/button";

type ProfileHeaderProps = {
  data: PersonalDto;
  className?: string;
};

export function ProfileHeader(props: ProfileHeaderProps) {
  const { data, className } = props;

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-4">
        <ProfileAvatar
          className="size-16"
          data={{
            personalId: data.id,
            src: data.image,
          }}
        />
        <div className="gird-cols-3 grid items-center">
          <button className="hover:bg-surface-bright flex flex-col items-center gap-2 rounded-lg px-4 py-2">
            <CoinsIcon className="text-yellow-500/50" />
            50
          </button>
        </div>
      </div>

      <Heading as="h4" variant="h4" className="mt-4">
        {[data.firstName, data.lastName].join(" ")}
      </Heading>
      <Text className="mt-2">{data.bio}</Text>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button size="sm" color="secondary">
          خرید سکه
        </Button>
        <Button size="sm" color="secondary">
          <UserRoundPenIcon data-slot="start-icon" />
          ویرایش پروفایل
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
