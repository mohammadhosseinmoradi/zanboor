import { Metadata } from "next";
import { EnterOtpForm } from "@/modules/auth";

export const metadata: Metadata = {
  title: "ورود به حساب با کد یکبار مصرف",
};

export default function Page() {
  return <EnterOtpForm />;
}
