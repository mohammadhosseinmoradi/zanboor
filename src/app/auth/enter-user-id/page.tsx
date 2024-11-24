"use client";

import { EnterUserIdForm } from "@/modules/auth";
import AuthContainer from "@/app/auth/auth-container";

export default function EnterUserIdPage() {
  return (
    <AuthContainer
      title="ورود به حساب"
      backButton={{
        disabled: true,
      }}
    >
      <EnterUserIdForm className='lg:mt-2' />
    </AuthContainer>
  );
}
