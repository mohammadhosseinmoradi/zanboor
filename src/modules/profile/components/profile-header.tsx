"use client";

import { cn } from "@/lib/utils";
import { PersonalDto } from "@/modules/profile/types";
import { CoinsIcon } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { Heading } from "@/components/heading";

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
