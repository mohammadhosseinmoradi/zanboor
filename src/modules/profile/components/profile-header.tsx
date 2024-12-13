"use client";

import { cn } from "@/lib/utils";
import { ProfileDto } from "@/modules/profile/types";
import { Avatar } from "@/components/avatar";
import { Text } from "@/components/text";

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
        <div className="gird-cols-3 grid w-full place-items-end items-center">
          {/*<button className="hover:bg-surface-bright flex flex-col items-center gap-1 rounded-lg px-4 py-2">*/}
          {/*  <span className='font-bold'>50</span>*/}
          {/*  <div className='flex gap-2 text-sm'>*/}
          {/*    /!*<CircleDollarSignIcon className="size-5 text-yellow-500/50" />*!/*/}
          {/*    <div className='text-on-surface-variant text-xs'>*/}
          {/*      سکه*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</button>*/}
        </div>
      </div>
      <Text className="mt-2">{data.personal.bio}</Text>

      <div className="mt-4 grid grid-cols-1 gap-2"></div>
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
