"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ShieldAlertIcon } from "lucide-react";
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

  const { user } = useAuth();

  if (user) return children;

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <ShieldAlertIcon className="size-10 text-fg-disabled" />
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
          صفحه اصلی
        </Button>
        <Button className="mt-6 self-center">ورود / ثبت‌نام</Button>
      </div>
    </div>
  );
}
