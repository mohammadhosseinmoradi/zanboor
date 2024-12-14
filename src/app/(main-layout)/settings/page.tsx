"use client";

import { PageLayout } from "@/components/page-layout";
import MenuItem from "@/components/menu-item";
import {
  BellIcon,
  ChevronLeftIcon,
  CircleDollarSignIcon,
  HeartIcon,
  InfoIcon,
  PhoneIcon,
  SunMoonIcon,
  Trash2Icon,
  UserRoundPenIcon,
  UserRoundXIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/switch";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";

export default function Page() {
  return (
    <PageLayout title="تنظیمات" className="grow">
      <div className="flex flex-col gap-2">
        <div className="p-2">
          <MenuItem
            className="px-2 py-2.5"
            title="+989862624"
            description="موبایل"
            startSlot={({ className, ...otherProps }) => (
              <PhoneIcon className={cn("text-on-surface-variant", className)} {...otherProps} />
            )}
            endSlot={(props) => (
              <Button
                as={Link}
                href={routes.changePhone}
                variant="outlined"
                color="secondary"
                size="sm"
                {...props}
              >
                تغییر
              </Button>
            )}
          />
          <MenuItem
            as={Link}
            href={routes.profile.edit}
            className="px-2 py-2.5"
            title="پروفایل"
            description="ویرایش نیاز به تایید مجدد ادمین دارد"
            startSlot={({ className, ...otherProps }) => (
              <UserRoundPenIcon
                className={cn("text-on-surface-variant", className)}
                {...otherProps}
              />
            )}
            endSlot={({ className, ...otherProps }) => (
              <ChevronLeftIcon
                className={cn("text-on-surface-variant size-6", className)}
                {...otherProps}
              />
            )}
          />
          <MenuItem
            className="px-2 py-2.5"
            as="label"
            title="اعلانات"
            description={"دریافت اعلان‌ برای پیام‌های جدید"}
            startSlot={({ className, ...otherProps }) => (
              <BellIcon className={cn("text-on-surface-variant", className)} {...otherProps} />
            )}
            endSlot={({ className, ...otherProps }) => (
              <Switch checked={false} className={cn("", className)} {...otherProps} />
            )}
          />
          <MenuItem
            as={Link}
            href={routes.wallet}
            className="px-2 py-2.5"
            title="سکه"
            description="۲۶ سکه"
            startSlot={({ className, ...otherProps }) => (
              <CircleDollarSignIcon
                className={cn("text-on-surface-variant", className)}
                {...otherProps}
              />
            )}
            endSlot={({ className, ...otherProps }) => (
              <ChevronLeftIcon
                className={cn("text-on-surface-variant size-6", className)}
                {...otherProps}
              />
            )}
          />
          <MenuItem
            as={Link}
            href={routes.favorites}
            className="px-2 py-2.5"
            title="علاقمندی‌ها"
            description="۱۶ نفر"
            startSlot={({ className, ...otherProps }) => (
              <HeartIcon className={cn("text-on-surface-variant", className)} {...otherProps} />
            )}
            endSlot={({ className, ...otherProps }) => (
              <ChevronLeftIcon
                className={cn("text-on-surface-variant size-6", className)}
                {...otherProps}
              />
            )}
          />
          <MenuItem
            as={Link}
            href={routes.blockedUsers}
            className="px-2 py-2.5"
            title="کاربران بلاک شده"
            description="۳ نفر"
            startSlot={({ className, ...otherProps }) => (
              <UserRoundXIcon
                className={cn("text-on-surface-variant", className)}
                {...otherProps}
              />
            )}
            endSlot={({ className, ...otherProps }) => (
              <ChevronLeftIcon
                className={cn("text-on-surface-variant size-6", className)}
                {...otherProps}
              />
            )}
          />
          <MenuItem
            as="label"
            className="px-2 py-2.5"
            title="زمینه"
            description="تغییر زمینه"
            startSlot={({ className, ...otherProps }) => (
              <SunMoonIcon
                className={cn("text-on-surface-variant size-6", className)}
                {...otherProps}
              />
            )}
            endSlot={(props) => <ThemeSwitcher edge="end" {...props} />}
          />
          <MenuItem
            as={Link}
            href={routes.about}
            className="px-2 py-2.5"
            title="درباره"
            description="درباره اپلیکشین زنبور"
            startSlot={({ className, ...otherProps }) => (
              <InfoIcon
                className={cn("text-on-surface-variant size-6", className)}
                {...otherProps}
              />
            )}
          />
          <MenuItem
            className="px-2 py-2.5"
            title="انصراف"
            description="حذف حساب"
            startSlot={({ className, ...otherProps }) => (
              <Trash2Icon
                className={cn("text-on-surface-variant size-6", className)}
                {...otherProps}
              />
            )}
          />
          <Divider className="my-2" />
          <MenuItem
            className="px-2 py-2.5"
            title="خروج از حساب"
            startSlot={({ className, ...otherProps }) => (
              <svg
                className={cn("text-on-surface-variant size-6.5", className)}
                {...otherProps}
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
            )}
          />
        </div>
      </div>
    </PageLayout>
  );
}
