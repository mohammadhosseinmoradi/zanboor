"use client";

import { SignInWithOtpForm } from "@/modules/auth";
import AuthContainer from "@/app/auth/auth-container";
import { useRouter } from "next/navigation";

export default function EnterOtpPage() {
  const router = useRouter();

  return (
    <AuthContainer
      title="ورود با کد یکبار مصرف"
      backButton={{
        onClick: () => router.back(),
      }}
    >
      <SignInWithOtpForm className="lg:mt-2" />
    </AuthContainer>
  );
}
