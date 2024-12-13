import { getUsers } from "@/modules/user/actions/get-users";
import { isOk } from "@/lib/utils/is-ok";
import { UserCard } from "@/modules/user";
import { cn } from "@/lib/utils";

export default async function Home() {
  const users = await getUsers();

  if (!isOk(users)) return null;

  return (
    <div className="@container p-4">
      <div
        className={cn(
          "grid gap-4",
          "grid-cols-2 @sm:grid-cols-3 @lg:grid-cols-4 @2xl:grid-cols-4 @4xl:grid-cols-6"
        )}
      >
        {users.data.map((user) => {
          return <UserCard key={user.id} data={user} className="transition hover:shadow" />;
        })}
      </div>
    </div>
  );
}
