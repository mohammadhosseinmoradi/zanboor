import { RequireAuth } from "@/modules/auth";

export default function Home() {
  return (
    <div className="flex grow items-center justify-center p-4">
      <RequireAuth name="پیام‌ها">پیام‌ها</RequireAuth>
    </div>
  );
}
