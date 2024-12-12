import { RequireAuth } from "@/modules/auth";
import { Profile } from "@/modules/profile";

export default function Home() {
  return (
    <div className="flex grow p-4">
      <RequireAuth name="پروفایل" className="size-full">
        <Profile />
      </RequireAuth>
    </div>
  );
}
