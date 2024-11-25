import EnterOtpPage from "./enter-otp-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود به حساب با کد یکبار مصرف",
};

export default function Page() {
  return <EnterOtpPage />;
}
