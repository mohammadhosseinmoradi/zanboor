import { useId, ReactNode, Fragment } from "react";
import { routes } from "@/lib/constants/routes";
import { usePathname } from "next/navigation";
import useBreakpoint from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/nav-link";
import {
  BellIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  HouseIcon,
  LockIcon,
  LucideProps,
  MegaphoneIcon,
  MessageSquareTextIcon,
  SearchIcon,
  SettingsIcon,
  SlashIcon,
  UserPenIcon,
  WalletCardsIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/badge";
import { Menu } from "@/components/menu";
import { Button } from "@/components/button";
import { MenuItems } from "@headlessui/react";

type MobileBottomNavBarProps = {
  className?: string;
};

export default function BottomNavBar(props: MobileBottomNavBarProps) {
  const { className } = props;

  const id = useId();

  return (
    <>
      <div
        className={cn(
          "sticky bottom-0 left-0 right-0 z-30 flex items-center justify-center overflow-hidden border-t bg-bg text-fg",
          className
        )}
        suppressHydrationWarning
      >
        <Item href={routes.home} icon={SlashIcon} label="ویترین" layoutId={id} />
        <Item href={routes.search} icon={SearchIcon} label="جستجو" layoutId={id} />
        <Item
          href={routes.favorites}
          icon={HeartIcon}
          label="علاقمندی‌ها"
          layoutId={id}
        />
        <Item
          href={routes.messages}
          icon={MessageSquareTextIcon}
          label="پیام‌ها"
          badge={2}
          layoutId={id}
        />
        <MoreMenu className="me-2" />
      </div>
    </>
  );
}

type ItemProps = {
  icon: (props: LucideProps) => ReactNode;
  label: ReactNode;
  href: string;
  layoutId: string;
  badge?: number;
};

function Item(props: ItemProps) {
  const { icon: Icon, label, href, layoutId, badge } = props;

  return (
    <NavLink
      href={href}
      className={cn(
        "group relative flex size-full grow flex-col items-center justify-start transition hover:text-fg-hover data-[active]:text-fg-hover",
        "pb-4 pt-4"
      )}
    >
      {({ active }) => (
        <>
          <div className="relative z-10 flex flex-col items-center justify-center gap-2">
            <span className="relative">
              <Icon className="size-6 text-fg-muted group-data-[active]:text-fg-hover" />
              {!!badge && <Badge anchor="topEnd">{badge}</Badge>}
            </span>
            <span className="line-clamp-2 text-center text-2xs font-bold transition group-data-[active]:translate-y-1.5">
              {label}
            </span>
          </div>
          {active && (
            <motion.span
              className="absolute top-2 flex h-10 w-[calc(100%-theme(spacing[4]))] bg-primary/20"
              style={{ borderRadius: "calc(var(--rounded) + 0.8rem)" }}
              initial={false}
              layoutId={layoutId}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}

type MoreMenuProps = {
  className?: string;
};

function MoreMenu(props: MoreMenuProps) {
  const { className } = props;

  return (
    <Menu>
      <Menu.Button as={Fragment}>
        <Button variant="plain" className={className}>
          <EllipsisVerticalIcon data-slot="icon" />
        </Button>
      </Menu.Button>
      <Menu.Items anchor="top end">
        <Menu.Item>
          <UserPenIcon data-slot="start-icon" />
          <Menu.Label>مشخطات فردی</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <BellIcon data-slot="start-icon" />
          <Menu.Label>اعلانات</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <LockIcon data-slot="start-icon" />
          <Menu.Label>حریم خصوصی و امنیت</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <WalletCardsIcon data-slot="start-icon" />
          <Menu.Label>پلن‌ها</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <WalletCardsIcon data-slot="start-icon" />
          <Menu.Label>کیف پول</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <SettingsIcon data-slot="start-icon" />
          <Menu.Label>تنظیمات کلی</Menu.Label>
        </Menu.Item>
        <Menu.Item>
          <MegaphoneIcon data-slot="start-icon" />
          <Menu.Label>اعلامیه‌ها</Menu.Label>
        </Menu.Item>
        {/*<Menu.Item>*/}
        {/*  <svg*/}
        {/*    data-slot="start-icon"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    fill="none"*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*    strokeWidth={1}*/}
        {/*    stroke="currentColor"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*      strokeLinecap="round"*/}
        {/*      strokeLinejoin="round"*/}
        {/*      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"*/}
        {/*    />*/}
        {/*  </svg>*/}
        {/*  <Menu.Label>ورود به حساب</Menu.Label>*/}
        {/*</Menu.Item>*/}
        <Menu.Item>
          <svg
            data-slot="start-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
          <Menu.Label>خروج از حساب</Menu.Label>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
