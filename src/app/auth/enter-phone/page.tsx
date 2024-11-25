import { EnterPhoneForm } from "@/modules/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود به حساب",
};

export default function EnterUserIdPage() {
  return <EnterPhoneForm logoLink="/" />;
}
