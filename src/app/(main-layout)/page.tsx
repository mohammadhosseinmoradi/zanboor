import { getUsers } from "@/modules/user/actions/get-users";
import { isOk } from "@/lib/utils/is-ok";
import { UserCard } from "@/modules/user";

export default async function Home() {
  const users = await getUsers();

  if (!isOk(users)) return null;

  return (
    <div className="flex grow items-center justify-center p-4">
      {users.data.map((user) => {
        return <UserCard key={user.id} data={user} />;
      })}
    </div>
  );
}
