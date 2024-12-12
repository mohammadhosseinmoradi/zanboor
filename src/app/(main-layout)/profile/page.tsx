import { RequireAuth } from "@/modules/auth";
import { Profile } from "@/modules/profile";

export default function Home() {
  return (
    <div className="flex grow flex-col">
      <RequireAuth name="پروفایل" className="size-full">
        <Profile />
      </RequireAuth>
    </div>
  );
}
