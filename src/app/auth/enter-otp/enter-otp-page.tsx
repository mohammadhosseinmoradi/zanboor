"use client";

import { EnterOtpForm } from "@/modules/auth";
import { useRouter } from "next/navigation";

export default function EnterOtpPage() {
  const router = useRouter();

  return <EnterOtpForm logoLink='/' onBack={() => router.back()} />;
}
