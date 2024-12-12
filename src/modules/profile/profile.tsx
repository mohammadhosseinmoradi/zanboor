import { isOk } from "@/lib/utils/is-ok";
import { getProfile } from "@/modules/profile/actions/get-profile";
import { Button } from "@/components/button";
import { ProfileTabs } from "@/modules/profile/components/profile-tabs";
import { ProfileHeader } from "@/modules/profile/components/profile-header";

export async function Profile() {
  const profile = await getProfile();

  if (!isOk(profile)) return null;

  return (
    <div className="bg-surface-container flex w-full grow flex-col">
      <div className="px-4 pt-4">
        <Button color="secondary">
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
      </div>
      <ProfileHeader className="mt-6 px-4" data={profile.data.personal} />
      <ProfileTabs className="mt-6" data={profile.data} />
    </div>
  );
}
