"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ShieldAlertIcon, SlashIcon } from "lucide-react";
import { Button } from "@/components/button";
import { Link } from "@/components/link";
import { Text } from "@/components/text";
import { Heading } from "@/components/heading";
import { routes } from "@/lib/constants/routes";
import { useAuth } from "@/modules/auth/hooks/use-auth";

type RequiredAuthProps = {
  className?: string;
  children?: ReactNode;
  name?: string;
};

export function RequireAuth(props: RequiredAuthProps) {
  const { className, children, name } = props;

  const { user, signIn } = useAuth();

  if (user) return children;

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <ShieldAlertIcon className="size-10 text-on-surface-disabled" />
      <Heading as="h4" variant="h4" className="mt-6 text-center">
        نیاز به احراز هویت
      </Heading>
      <Text variant="body" className="mt-2 text-center">
        <span>برای مشاهده </span>
        {name || "این صفحه"}
        <span> ابتدا وارد حساب خود شوید.</span>
      </Text>
      <div className="flex items-center gap-2">
        <Button as={Link} href={routes.home} className="mt-6 self-center" color="secondary">
          <SlashIcon data-slot="start-icon" />
          ویترین
        </Button>
        <Button className="mt-6 self-center" onClick={signIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="start-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
          ورود / ثبت‌نام
        </Button>
      </div>
    </div>
  );
}
