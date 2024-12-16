import { isOk } from "@/lib/utils/is-ok";
import { getUser } from "@/modules/user/actions/get-user";
import { ProfileHeader } from "@/modules/user/components/profile/profile-header";
import { ProfileTabs } from "@/modules/user/components/profile/profile-tabs";
import { PageLayout } from "@/components/page-layout";
import { cn } from "@/lib/utils";
import { Actions } from "@/modules/user/components/profile/actions";

type ProfileProps = {
  userId: string;
  className?: string;
};

export async function Profile(props: ProfileProps) {
  const { userId, className } = props;

  const user = await getUser(userId);

  if (!isOk(user)) return null;

  return (
    <PageLayout
      header={{
        title: "پروفایل",
        actions: <Actions />,
      }}
      className={cn("grow", className)}
    >
      <ProfileHeader className="mt-2 px-4" data={user.data.profile} />
      <ProfileTabs className="mt-2 grow" data={user.data.profile} />
    </PageLayout>
  );
}
