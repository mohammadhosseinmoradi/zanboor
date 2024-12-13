import { isOk } from "@/lib/utils/is-ok";
import { getProfile } from "@/modules/profile/actions/get-profile";
import { Button } from "@/components/button";
import { ProfileTabs } from "@/modules/profile/components/profile-tabs";
import { ProfileHeader } from "@/modules/profile/components/profile-header";
import { CircleDollarSignIcon } from "lucide-react";
import { Heading } from "@/components/heading";

export async function Profile() {
  const profile = await getProfile();

  if (!isOk(profile)) return null;

  return (
    <div className="flex w-full grow flex-col">
      <div className="flex gap-2 px-4 pt-4">
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
          <Heading as="h4" variant="h4">
            {[profile.data.personal.firstName, profile.data.personal.lastName].join(" ")}
          </Heading>
        </div>
        <Button variant="plain">
          <CircleDollarSignIcon data-slot="icon-start" />
          <span className="font-bold">25</span>
        </Button>
      </div>
      <ProfileHeader className="mt-6 px-4" data={profile.data} />
      <ProfileTabs className="mt-2" data={profile.data} />
    </div>
  );
}
