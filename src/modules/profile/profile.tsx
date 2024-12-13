import { isOk } from "@/lib/utils/is-ok";
import { getMe } from "@/modules/profile/actions/get-me";
import { Button } from "@/components/button";
import { ProfileTabs } from "@/modules/profile/components/profile-tabs";
import { ProfileHeader } from "@/modules/profile/components/profile-header";
import { ChartNoAxesColumnIcon, CircleDollarSignIcon } from "lucide-react";
import { Divider } from "@/components/divider";

export async function Profile() {
  const me = await getMe();

  if (!isOk(me)) return null;

  return (
    <div className="flex w-full grow flex-col">
      <div className="flex items-center gap-2 px-2 pt-2">
        <div className="flex grow items-center gap-2">
          <Button variant="plain" color="secondary">
            <svg
              data-slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </Button>
          پروفایل
        </div>
        <Button variant="plain" color="secondary">
          <ChartNoAxesColumnIcon data-slot="icon" />
        </Button>
        <Divider vertical className="h-4" />
        <Button variant="plain">
          <CircleDollarSignIcon data-slot="start-icon" />
          <span>25</span>
        </Button>
      </div>
      <ProfileHeader className="mt-4 px-4" data={me.data.profile} />
      <ProfileTabs className="mt-2" data={me.data.profile} />
    </div>
  );
}
